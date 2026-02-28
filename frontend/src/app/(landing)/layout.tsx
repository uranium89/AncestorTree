/**
 * @project AncestorTree
 * @file src/app/(landing)/layout.tsx
 * @description Landing route group layout — no auth, no sidebar, clean public shell
 * @version 1.0.0
 * @updated 2026-02-26
 */

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Minimal top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="font-semibold text-gray-900">Họ Phạm</span>
            <span className="hidden sm:inline text-xs text-gray-400 ml-1">Gia Phả Điện Tử</span>
          </div>
        </div>
      </nav>

      {/* Page content with nav offset */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
}
