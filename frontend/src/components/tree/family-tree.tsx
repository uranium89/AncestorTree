/**
 * @project AncestorTree
 * @file src/components/tree/family-tree.tsx
 * @description Interactive family tree visualization component
 * @version 1.0.0
 * @updated 2026-02-24
 */

'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTreeData } from '@/hooks/use-families';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ZoomIn, ZoomOut, RotateCcw, User } from 'lucide-react';
import type { Person } from '@/types';
import type { TreeData } from '@/lib/supabase-data';
import Link from 'next/link';

interface TreeNodeProps {
  person: Person;
  x: number;
  y: number;
  onSelect: (person: Person) => void;
  isSelected: boolean;
}

const NODE_WIDTH = 120;
const NODE_HEIGHT = 80;
const LEVEL_HEIGHT = 140;
const SIBLING_GAP = 20;

function TreeNode({ person, x, y, onSelect, isSelected }: TreeNodeProps) {
  const initials = person.display_name
    .split(' ')
    .map((n) => n[0])
    .slice(-2)
    .join('')
    .toUpperCase();

  const genderColor = person.gender === 1 ? 'border-blue-400' : 'border-pink-400';
  const selectedRing = isSelected ? 'ring-2 ring-primary ring-offset-2' : '';

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <foreignObject x={x} y={y} width={NODE_WIDTH} height={NODE_HEIGHT}>
        <div
          className={`h-full bg-card border-2 ${genderColor} ${selectedRing} rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow p-2 flex flex-col items-center justify-center`}
          onClick={() => onSelect(person)}
        >
          <Avatar className="h-8 w-8 mb-1">
            <AvatarImage src={person.avatar_url} />
            <AvatarFallback className="text-xs">
              {initials || <User className="h-3 w-3" />}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium text-center line-clamp-2 leading-tight">
            {person.display_name}
          </span>
          {!person.is_living && (
            <span className="text-[10px] text-muted-foreground">†</span>
          )}
        </div>
      </foreignObject>
    </motion.g>
  );
}

interface TreeConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: 'parent-child' | 'couple';
}

function TreeConnection({ x1, y1, x2, y2, type }: TreeConnectionProps) {
  if (type === 'couple') {
    return (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={2}
        className="text-pink-400"
      />
    );
  }

  // Parent-child: draw stepped line
  const midY = y1 + (y2 - y1) / 2;
  return (
    <path
      d={`M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-muted-foreground"
    />
  );
}

function buildTreeLayout(data: TreeData) {
  const { people, families, children } = data;
  
  // Group people by generation
  const byGeneration = new Map<number, Person[]>();
  people.forEach(p => {
    const gen = p.generation || 1;
    if (!byGeneration.has(gen)) byGeneration.set(gen, []);
    byGeneration.get(gen)!.push(p);
  });

  const nodes: { person: Person; x: number; y: number }[] = [];
  const connections: TreeConnectionProps[] = [];

  // Layout by generation
  const generations = [...byGeneration.keys()].sort((a, b) => a - b);
  
  generations.forEach((gen, genIndex) => {
    const genPeople = byGeneration.get(gen)!;
    const y = genIndex * LEVEL_HEIGHT + 20;
    const totalWidth = genPeople.length * (NODE_WIDTH + SIBLING_GAP) - SIBLING_GAP;
    const startX = -totalWidth / 2;

    genPeople.forEach((person, i) => {
      const x = startX + i * (NODE_WIDTH + SIBLING_GAP);
      nodes.push({ person, x, y });
    });
  });

  // Build connections based on families
  const personPositions = new Map(nodes.map(n => [n.person.id, { x: n.x, y: n.y }]));

  families.forEach(family => {
    const fatherPos = family.father_id ? personPositions.get(family.father_id) : null;
    const motherPos = family.mother_id ? personPositions.get(family.mother_id) : null;

    // Couple connection
    if (fatherPos && motherPos) {
      connections.push({
        x1: fatherPos.x + NODE_WIDTH / 2,
        y1: fatherPos.y + NODE_HEIGHT / 2,
        x2: motherPos.x + NODE_WIDTH / 2,
        y2: motherPos.y + NODE_HEIGHT / 2,
        type: 'couple',
      });
    }

    // Parent to children connections
    const parentX = fatherPos 
      ? (motherPos ? (fatherPos.x + motherPos.x) / 2 + NODE_WIDTH / 2 : fatherPos.x + NODE_WIDTH / 2)
      : (motherPos ? motherPos.x + NODE_WIDTH / 2 : null);
    const parentY = fatherPos?.y ?? motherPos?.y;

    if (parentX !== null && parentY !== undefined) {
      const familyChildren = children.filter(c => c.family_id === family.id);
      familyChildren.forEach(child => {
        const childPos = personPositions.get(child.person_id);
        if (childPos) {
          connections.push({
            x1: parentX,
            y1: parentY + NODE_HEIGHT,
            x2: childPos.x + NODE_WIDTH / 2,
            y2: childPos.y,
            type: 'parent-child',
          });
        }
      });
    }
  });

  // Calculate bounds
  let minX = 0, maxX = 0, maxY = 0;
  nodes.forEach(n => {
    minX = Math.min(minX, n.x);
    maxX = Math.max(maxX, n.x + NODE_WIDTH);
    maxY = Math.max(maxY, n.y + NODE_HEIGHT);
  });

  return {
    nodes,
    connections,
    width: maxX - minX + 100,
    height: maxY + 50,
    offsetX: -minX + 50,
  };
}

export function FamilyTree() {
  const { data, isLoading, error } = useTreeData();
  // Start with smaller scale on mobile
  const [scale, setScale] = useState(typeof window !== 'undefined' && window.innerWidth < 768 ? 0.7 : 1);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const layout = useMemo(() => {
    if (!data || data.people.length === 0) return null;
    return buildTreeLayout(data);
  }, [data]);

  const handleZoomIn = () => setScale(s => Math.min(s + 0.1, 2));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.1, 0.5));
  const handleReset = () => setScale(1);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="space-y-4 text-center">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-64 w-96" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="py-12 text-center">
          <p className="text-destructive">Lỗi khi tải dữ liệu: {error.message}</p>
        </CardContent>
      </Card>
    );
  }

  if (!layout || layout.nodes.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          <p>Chưa có dữ liệu để hiển thị cây gia phả</p>
          <Button asChild variant="link" className="mt-2">
            <Link href="/people/new">Thêm thành viên đầu tiên</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-sm w-16 text-center">{Math.round(scale * 100)}%</span>
        <Button variant="outline" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Tree */}
      <div className="border rounded-lg bg-muted/30 overflow-auto" style={{ height: '60vh' }}>
        <svg
          width={layout.width * scale}
          height={layout.height * scale}
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <g transform={`scale(${scale}) translate(${layout.offsetX}, 0)`}>
            {/* Connections first (behind nodes) */}
            {layout.connections.map((conn, i) => (
              <TreeConnection key={i} {...conn} />
            ))}
            
            {/* Nodes */}
            {layout.nodes.map(({ person, x, y }) => (
              <TreeNode
                key={person.id}
                person={person}
                x={x}
                y={y}
                onSelect={setSelectedPerson}
                isSelected={selectedPerson?.id === person.id}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Selected person info */}
      {selectedPerson && (
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{selectedPerson.display_name}</h3>
              <p className="text-sm text-muted-foreground">
                Đời {selectedPerson.generation}
                {selectedPerson.chi && ` • Chi ${selectedPerson.chi}`}
                {!selectedPerson.is_living && ' • Đã mất'}
              </p>
            </div>
            <Button asChild size="sm">
              <Link href={`/people/${selectedPerson.id}`}>
                Xem chi tiết
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
