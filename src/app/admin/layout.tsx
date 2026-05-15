"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Do not show admin layout on the public login page
  if (pathname === "/login") {
    return <>{children}</>;
  }

  // Protect all admin pages
  return (
    <AdminGuard>
      <div className="h-screen flex bg-gray-100 overflow-hidden">
        {/* Fixed Sidebar */}
        <aside className="w-64 h-screen fixed left-0 top-0 z-40 bg-white border-r">
          <AdminSidebar />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 ml-64 flex flex-col h-screen">
          {/* Fixed Header */}
          <div className="sticky top-0 z-30 bg-white ">
            <AdminHeader />
          </div>

          {/* Scrollable Content Only */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </AdminGuard>
  );
}
