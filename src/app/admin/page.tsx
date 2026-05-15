"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back. Manage your AI booking assistant from one place.
          </p>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="">
          {/* <h2 className="text-xl font-semibold text-red-900">
            Dashboard is under construction........
          </h2> */}

          <h2 className="text-xl font-semibold text-green-900">
            For Bookings data , click on Bookings in sidebar.
          </h2>
        </div>
      </div>
    </div>
  );
}
