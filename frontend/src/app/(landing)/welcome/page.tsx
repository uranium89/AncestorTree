/**
 * @project AncestorTree
 * @file src/app/(landing)/welcome/page.tsx
 * @description Public landing page — 9 sections, Vietnamese-first, SSR static
 * @version 1.0.0
 * @updated 2026-02-26
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GitBranch, Calendar, Users, Shield, Download, Bug, LogIn,
  Lightbulb, MessageCircle, Code2, Heart,
  Monitor, Apple, ChevronRight, Award, BookOpen, Utensils,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GITHUB_REPO = 'https://github.com/Minh-Tam-Solution/AncestorTree';
const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;
const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
const GITHUB_DISCUSSIONS = `${GITHUB_REPO}/discussions`;

export const metadata: Metadata = {
  title: 'Gia Phả Điện Tử',
  description:
    'Phần mềm mã nguồn mở quản lý gia phả điện tử. Cây gia phả tương tác, lịch âm dương, quản lý dòng họ. Miễn phí, tự host, có bản Desktop offline.',
  alternates: {
    canonical: 'https://ancestortree.info/welcome',
  },
  openGraph: {
    title: 'AncestorTree — Gia Phả Điện Tử',
    description: 'Gìn giữ tinh hoa — Tiếp bước cha ông',
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ancestortree.info/welcome',
    images: [{ url: '/og-landing.png', width: 1200, height: 630, alt: 'AncestorTree' }],
  },
};

// -- Data --

const features = [
  {
    icon: GitBranch,
    title: 'Cây gia phả tương tác',
    desc: '10+ đời hiển thị, zoom, pan, lọc theo gốc. SVG rendering với layout engine tự phát triển.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Calendar,
    title: 'Lịch âm dương & ngày giỗ',
    desc: 'Tự động chuyển đổi âm-dương, nhắc giỗ chạp hàng năm theo lịch truyền thống.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'Quản lý chi / nhánh',
    desc: 'Phân chia chi-nhánh rõ ràng, tính đời tự động, ghi nhận quan hệ cha-mẹ-con-vợ chồng.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Vinh danh & quỹ khuyến học',
    desc: 'Ghi nhận thành tích, quản lý quỹ khuyến học với tài khoản minh bạch.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: BookOpen,
    title: 'Hương ước gia tộc',
    desc: 'Lưu trữ và hiển thị hương ước, quy định dòng họ dạng bài viết có phiên bản.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Utensils,
    title: 'Cầu đường — phân công lễ hội',
    desc: 'Thuật toán DFS tự động xoay vòng phân công cúng lễ công bằng giữa các gia đình.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Quan hệ gia đình đầy đủ',
    desc: 'Cha mẹ, anh chị em, vợ/chồng, con cái — thêm/xóa trực tiếp từ trang cá nhân.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
  {
    icon: Shield,
    title: 'Bảo mật & phân quyền 4 cấp',
    desc: 'Row Level Security trên Supabase: admin, editor, viewer, guest — bảo vệ dữ liệu cá nhân.',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
  },
];

const techStack = [
  'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4',
  'Supabase (PostgreSQL)', 'shadcn/ui', 'Electron', 'sql.js (SQLite WASM)',
];

// -- Page --

export default function WelcomePage() {
  return (
    <div className="flex flex-col">
      {/* ───── 1. Hero ───── */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Gia Phả Điện Tử
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            Gìn giữ tinh hoa — Tiếp bước cha ông
          </p>
          <div className="mt-6">
            <Button variant="link" className="text-emerald-200 hover:text-white" asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Con cháu họ Phạm làng Phù Lưu Hạ — Đăng nhập
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ───── 2. Features ───── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Tính năng nổi bật</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Giải pháp toàn diện cho quản lý gia phả — từ cây phả hệ đến lễ nghi truyền thống.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center mb-3`}>
                    <f.icon className={`h-5 w-5 ${f.color}`} />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. Screenshots ───── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Giao diện ứng dụng</h2>
            <p className="text-gray-500">Thiết kế hiện đại, hỗ trợ tiếng Việt, tương thích di động.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/screenshots/tree-view.png', alt: 'Cây gia phả tương tác', label: 'Cây gia phả' },
              { src: '/screenshots/people-list.png', alt: 'Quản lý thành viên', label: 'Danh sách thành viên' },
              { src: '/screenshots/admin-panel.png', alt: 'Trang quản trị', label: 'Trang quản trị' },
              { src: '/screenshots/mobile-view.png', alt: 'Giao diện di động', label: 'Di động' },
            ].map((img) => (
              <div key={img.src} className="group relative rounded-xl overflow-hidden border bg-gray-100 aspect-video flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 4. Hướng dẫn sử dụng ───── */}
      <section id="guide" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Hướng dẫn sử dụng</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tổng quan các chức năng chính và cách sử dụng ứng dụng.
            </p>
          </div>

          {/* Navigation overview */}
          <div className="mb-14">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Thanh điều hướng</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                { name: 'Trang chủ', desc: 'Tổng quan, thống kê' },
                { name: 'Cây phả hệ', desc: 'Sơ đồ cây gia phả' },
                { name: 'Thành viên', desc: 'Quản lý thành viên' },
                { name: 'Thư mục', desc: 'Danh bạ liên lạc' },
                { name: 'Sự kiện', desc: 'Ngày giỗ, lễ tết' },
                { name: 'Vinh danh', desc: 'Thành tích con cháu' },
                { name: 'Quỹ khuyến học', desc: 'Thu chi, học bổng' },
                { name: 'Hương ước', desc: 'Gia huấn, quy ước' },
                { name: 'Cầu đương', desc: 'Phân công cúng lễ' },
                { name: 'Gia phả sách', desc: 'Xuất dạng sách' },
                { name: 'Quản trị', desc: 'Cài đặt hệ thống' },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-lg px-4 py-3 border shadow-sm">
                  <p className="font-medium text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key workflows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
            {[
              {
                title: 'Thêm thành viên',
                steps: [
                  'Nhấn "Thêm thành viên" ở trang Thành viên',
                  'Điền họ tên, giới tính, đời, năm sinh',
                  'Chọn Cha/Mẹ để tự động tạo quan hệ',
                  'Nhấn Lưu — thành viên xuất hiện trên cây',
                ],
              },
              {
                title: 'Xem cây gia phả',
                steps: [
                  'Vào Cây phả hệ từ thanh điều hướng',
                  'Cuộn chuột để thu phóng, kéo để di chuyển',
                  'Click vào thành viên để xem chi tiết',
                  'Chọn "Xem cây từ đây" để lọc theo nhánh',
                ],
              },
              {
                title: 'Quản lý sự kiện & ngày giỗ',
                steps: [
                  'Ngày giỗ tự động tính từ ngày mất âm lịch',
                  'Thêm sự kiện: Giỗ, Lễ/Tết, hoặc Khác',
                  'Chọn ngày âm lịch và người liên quan',
                  'Bật "Lặp lại hàng năm" cho ngày giỗ',
                ],
              },
              {
                title: 'Sao lưu dữ liệu (Desktop)',
                steps: [
                  'Dữ liệu lưu tại ~/AncestorTree/',
                  'Copy thư mục ra USB hoặc Google Drive',
                  'Khôi phục: copy ngược về ~/AncestorTree/',
                  'Nên sao lưu ít nhất 1 lần/tháng',
                ],
              },
            ].map((workflow) => (
              <Card key={workflow.title}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{workflow.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {workflow.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-medium">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage tips */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Mẹo sử dụng</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Bắt đầu từ thủy tổ — nhập thông tin từ đời cao nhất trở xuống',
                'Chọn Cha/Mẹ ngay khi tạo thành viên để cây tự động cập nhật',
                'Ghi ngày mất âm lịch — giúp tính ngày giỗ chính xác',
                'Sao lưu thường xuyên — dữ liệu gia phả là tài sản vô giá',
                'Dùng tìm kiếm khi gia phả lớn (>50 người) — nhanh hơn cuộn trang',
              ].map((tip, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-lg px-4 py-3 border shadow-sm">
                  <span className="flex-shrink-0 text-emerald-600 font-semibold text-sm">#{i + 1}</span>
                  <p className="text-sm text-gray-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
