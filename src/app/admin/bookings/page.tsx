"use client";

import { useState } from "react";

import OverviewTab from "@/components/admin/bookings/OverviewTab";
import AppointmentsTab from "@/components/admin/bookings/AppointmentsTab";
import ServiceTypesTab from "@/components/admin/bookings/ServiceTypesTab";
import ResultTypesTab from "@/components/admin/bookings/ResultTypesTab";
import RecommendationsTab from "@/components/admin/bookings/RecommendationsTab";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "appointments", label: "Appointments" },
  { id: "services", label: "Service Types" },
  { id: "results", label: "Result Types" },
  { id: "recommendations", label: "Recommendations" },
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
        <p className="text-gray-600 mt-1">
          Manage appointments, services, result types, and AI recommendations.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-[#b38b4d] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {activeTab === "overview" && <OverviewTab />}

        {activeTab === "appointments" && <AppointmentsTab />}

        {activeTab === "services" && <ServiceTypesTab />}

        {activeTab === "results" && <ResultTypesTab />}

        {activeTab === "recommendations" && <RecommendationsTab />}
      </div>
    </div>
  );
}
