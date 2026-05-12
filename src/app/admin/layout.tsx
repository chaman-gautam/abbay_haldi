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
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1">
          {/* <AdminHeader /> */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </AdminGuard>
  );
}
