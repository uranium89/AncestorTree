/**
 * @project AncestorTree
 * @file src/components/events/add-event-dialog.tsx
 * @description Dialog form for adding new events
 * @version 1.0.0
 * @updated 2026-02-25
 */

'use client';

import { useState } from 'react';
import { useCreateEvent } from '@/hooks/use-events';
import { parseLunarString } from '@/lib/lunar-calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DialogFooter } from '@/components/ui/dialog';
import { EVENT_TYPE_LABELS } from './event-constants';
import type { EventType, Person } from '@/types';
import { toast } from 'sonner';

interface AddEventDialogProps {
  people: Person[];
  onClose: () => void;
}

export function AddEventDialog({ people, onClose }: AddEventDialogProps) {
  const createEvent = useCreateEvent();
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState<EventType>('gio');
  const [personId, setPersonId] = useState<string>('');
  const [eventLunar, setEventLunar] = useState('');
  const [lunarError, setLunarError] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [recurring, setRecurring] = useState(true);

  // Validate lunar date format (fix S3)
  const validateLunar = (value: string) => {
    setEventLunar(value);
    if (!value) {
      setLunarError('');
      return;
    }
    const parsed = parseLunarString(value);
    if (!parsed) {
      setLunarError('Sai định dạng. VD: 15/7 (ngày/tháng)');
    } else {
      setLunarError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Vui lòng nhập tiêu đề');
      return;
    }
    if (eventLunar && !parseLunarString(eventLunar)) {
      toast.error('Ngày âm lịch không hợp lệ');
      return;
    }

    try {
      await createEvent.mutateAsync({
        title: title.trim(),
        event_type: eventType,
        person_id: personId || undefined,
        event_lunar: eventLunar || undefined,
        event_date: eventDate || undefined,
        location: location || undefined,
        description: description || undefined,
        recurring,
      });
      toast.success('Đã thêm sự kiện');
      onClose();
    } catch {
      toast.error('Lỗi khi thêm sự kiện');
    }
  };

  // Auto-fill title when selecting a person for giỗ
  const handlePersonChange = (value: string) => {
    setPersonId(value);
    if (eventType === 'gio' && value) {
      const person = people.find(p => p.id === value);
      if (person) {
        setTitle(`Giỗ ${person.display_name}`);
        if (person.death_lunar) {
          setEventLunar(person.death_lunar);
          setLunarError('');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="event-type">Loại sự kiện</Label>
        <Select value={eventType} onValueChange={v => setEventType(v as EventType)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(EVENT_TYPE_LABELS).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {eventType === 'gio' && (
        <div className="space-y-2">
          <Label htmlFor="person">Người được giỗ</Label>
          <Select value={personId} onValueChange={handlePersonChange}>
            <SelectTrigger>
              <SelectValue placeholder="Chọn thành viên..." />
            </SelectTrigger>
            <SelectContent>
              {people
                .filter(p => !p.is_living)
                .map(p => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.display_name} {p.death_lunar ? `(${p.death_lunar} ÂL)` : ''}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Tiêu đề</Label>
        <Input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="VD: Giỗ Ông Nội"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lunar">Ngày âm lịch (DD/MM)</Label>
          <Input
            id="lunar"
            value={eventLunar}
            onChange={e => validateLunar(e.target.value)}
            placeholder="15/7"
            className={lunarError ? 'border-destructive' : ''}
          />
          {lunarError && (
            <p className="text-xs text-destructive">{lunarError}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Ngày dương lịch</Label>
          <Input
            id="date"
            type="date"
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Địa điểm</Label>
        <Input
          id="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="VD: Nhà thờ họ"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="desc">Ghi chú</Label>
        <Textarea
          id="desc"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={2}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="recurring"
          checked={recurring}
          onChange={e => setRecurring(e.target.checked)}
          className="rounded border-gray-300"
        />
        <Label htmlFor="recurring" className="font-normal">Lặp lại hàng năm</Label>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>Hủy</Button>
        <Button type="submit" disabled={createEvent.isPending}>
          {createEvent.isPending ? 'Đang lưu...' : 'Thêm sự kiện'}
        </Button>
      </DialogFooter>
    </form>
  );
}
