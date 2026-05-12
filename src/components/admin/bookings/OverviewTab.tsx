"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Stats = {
  totalBookings: number;
  serviceTypes: number;
  resultTypes: number;
  recommendations: number;
};

type RecentBooking = {
  id: string;
  name: string;
  recommendedService: string;
  timeSlot: string;
  created_at: string;
};

type DashboardResponse = {
  success: boolean;
  count?: number;
  recent?: RecentBooking[];
};

export default function OverviewTab() {
  const router = useRouter();

  const [stats, setStats] = useState<Stats>({
    totalBookings: 0,
    serviceTypes: 0,
    resultTypes: 0,
    recommendations: 0,
  });

  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [
          bookingsRes,
          serviceTypesRes,
          resultTypesRes,
          recommendationsRes,
        ] = await Promise.all([
          fetch("/api/admin/dashboard/bookings"),
          fetch("/api/admin/dashboard/service-types"),
          fetch("/api/admin/dashboard/result-types"),
          fetch("/api/admin/dashboard/recommendations"),
        ]);

        const [
          bookingsJson,
          serviceTypesJson,
          resultTypesJson,
          recommendationsJson,
        ] = (await Promise.all([
          bookingsRes.json(),
          serviceTypesRes.json(),
          resultTypesRes.json(),
          recommendationsRes.json(),
        ])) as DashboardResponse[];

        setStats({
          totalBookings: bookingsJson.count || 0,
          serviceTypes: serviceTypesJson.count || 0,
          resultTypes: resultTypesJson.count || 0,
          recommendations: recommendationsJson.count || 0,
        });

        setRecentBookings(bookingsJson.recent || []);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const statCards = [
    {
      title: "Total Bookings",
      value: stats.totalBookings,
      href: "/admin/bookings",
      icon: "📅",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Service Types",
      value: stats.serviceTypes,
      href: "/admin/service-types",
      icon: "💇",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Result Types",
      value: stats.resultTypes,
      href: "/admin/result-types",
      icon: "✨",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Recommendations",
      value: stats.recommendations,
      href: "/admin/recommendations",
      icon: "🤖",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      {/* <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back. Manage your AI booking assistant from one place.
          </p>
        </div>
      </div> */}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${card.color}`}
              >
                {card.icon}
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">{card.title}</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              {loading ? "..." : card.value}
            </h2>
          </Link>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Bookings
          </h2>

          <Link
            href="/admin/bookings"
            className="text-[#b38b4d] font-medium text-sm hover:underline"
          >
            View All
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading bookings...</p>
        ) : recentBookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-gray-100 pb-4 last:border-b-0"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {booking.name || "Unknown Customer"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {booking.recommendedService || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {booking.timeSlot || "No time selected"}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  New
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
