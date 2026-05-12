"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  created_at: string;
  service_type: string;
  result_type: string;
  recommended_service: string;
  time_slot: string;
  name: string;
  email: string;
  phone: string;
  add_on: string;
  status: string;
};

export default function AppointmentsTab() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();

      if (data.success) {
        setBookings(data.data || []);
      }
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
        <p className="text-gray-600 mt-1">
          View all customer booking requests.
        </p>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {loading ? (
          <p className="text-gray-500">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border border-gray-200 rounded-xl p-5"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left Side */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {booking.name}
                    </h3>

                    <p className="text-sm text-gray-600">{booking.email}</p>

                    <p className="text-sm text-gray-600">{booking.phone}</p>

                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(booking.created_at).toLocaleString()}
                    </p>
                  </div>

                  {/* Right Side */}
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>
                      <strong>Service Type:</strong> {booking.service_type}
                    </p>

                    <p>
                      <strong>Result Type:</strong> {booking.result_type}
                    </p>

                    <p>
                      <strong>Recommended Service:</strong>{" "}
                      {booking.recommended_service}
                    </p>

                    <p>
                      <strong>Time Slot:</strong> {booking.time_slot}
                    </p>

                    <p>
                      <strong>Add-on:</strong> {booking.add_on || "No"}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      <span className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-semibold">
                        {booking.status || "Pending"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
