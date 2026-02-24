/**
 * @project AncestorTree
 * @file src/app/(main)/admin/users/page.tsx
 * @description User management page for admins
 * @version 1.0.0
 * @updated 2026-02-24
 */

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Users, ArrowLeft, Shield, UserCog } from 'lucide-react';
import Link from 'next/link';

// Placeholder data - will be replaced with real Supabase data
const mockUsers = [
  {
    id: '1',
    email: 'admin@example.com',
    full_name: 'Admin User',
    role: 'admin' as const,
    created_at: '2026-02-24',
  },
  {
    id: '2',
    email: 'editor@example.com',
    full_name: 'Editor User',
    role: 'editor' as const,
    created_at: '2026-02-24',
  },
  {
    id: '3',
    email: 'viewer@example.com',
    full_name: 'Viewer User',
    role: 'viewer' as const,
    created_at: '2026-02-24',
  },
];

const roleLabels = {
  admin: { label: 'Quản trị viên', color: 'bg-red-100 text-red-800' },
  editor: { label: 'Biên tập viên', color: 'bg-blue-100 text-blue-800' },
  viewer: { label: 'Người xem', color: 'bg-gray-100 text-gray-800' },
};

export default function UsersPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quản trị
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <UserCog className="h-6 w-6" />
              Quản lý người dùng
            </h1>
            <p className="text-muted-foreground">
              Phân quyền và quản lý tài khoản
            </p>
          </div>
        </div>
      </div>

      {/* Role Legend */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Phân quyền
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Badge className={roleLabels.admin.color}>{roleLabels.admin.label}</Badge>
              <span className="text-muted-foreground">- Toàn quyền quản trị</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={roleLabels.editor.color}>{roleLabels.editor.label}</Badge>
              <span className="text-muted-foreground">- Thêm/sửa dữ liệu</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={roleLabels.viewer.color}>{roleLabels.viewer.label}</Badge>
              <span className="text-muted-foreground">- Chỉ xem</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            Danh sách người dùng
          </CardTitle>
          <CardDescription>
            {mockUsers.length} người dùng đã đăng ký
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Họ tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Vai trò</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    {user.full_name || 'Chưa cập nhật'}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={roleLabels[user.role].color}>
                      {roleLabels[user.role].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.created_at}</TableCell>
                  <TableCell className="text-right">
                    <Select defaultValue={user.role}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Quản trị viên</SelectItem>
                        <SelectItem value="editor">Biên tập viên</SelectItem>
                        <SelectItem value="viewer">Người xem</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Note */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <p className="text-sm text-amber-800">
            ⚠️ <strong>Lưu ý:</strong> Tính năng này đang sử dụng dữ liệu mẫu. 
            Kết nối Supabase Auth để quản lý người dùng thực.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
