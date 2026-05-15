"use client";

import { useRouter } from "next/navigation";
import { Bell, Search, LogOut, UserCircle, Settings } from "lucide-react";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove admin auth cookie
    document.cookie =
      "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Redirect to login
    router.push("/");
    router.refresh();
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-white  shadow-sm px-6 py-4">
      <div className="flex items-center justify-between gap-6">
        {/* Left Section */}

        {/* Center Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-96">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search bookings, posts, settings..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </button>

          {/* Settings */}
          <button className="p-2 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-3 pl-4 border-l">
            <UserCircle className="w-7 h-7 text-gray-500" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Admin </p>
              <p className="text-xs text-gray-500">Super Administrator</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition shadow-sm cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
