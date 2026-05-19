"use client";

import { useEffect, useMemo, useState } from "react";

type Booking = {
  id: string;
  created_at: string;
  appointment_date: string;
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

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  // const [serviceFilter, setServiceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const loadBookings = async () => {
    try {
      const res = await fetch("/api/admin/dashboard/bookings");
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

  // Filtered bookings
  // const filteredBookings = useMemo(() => {
  //   return bookings.filter((booking) => {
  //     const query = searchTerm.toLowerCase().trim();

  //     const matchesSearch =
  //       !query ||
  //       (booking.name || "").toLowerCase().includes(query) ||
  //       (booking.email || "").toLowerCase().includes(query) ||
  //       (booking.phone || "").toLowerCase().includes(query) ||
  //       (booking.service_type || "").toLowerCase().includes(query) ||
  //       (booking.result_type || "").toLowerCase().includes(query) ||
  //       (booking.recommended_service || "").toLowerCase().includes(query) ||
  //       (booking.time_slot || "").toLowerCase().includes(query) ||
  //       (booking.appointment_date || "").toLowerCase().includes(query);

  //     const currentStatus = (booking.status || "pending").toLowerCase();

  //     const matchesStatus =
  //       statusFilter === "all" || currentStatus === statusFilter.toLowerCase();

  //     return matchesSearch && matchesStatus;
  //   });
  // }, [bookings, searchTerm, statusFilter]);

  const filteredBookings = useMemo(() => {
    return bookings
      .filter((booking) => {
        const query = searchTerm.toLowerCase().trim();

        const matchesSearch =
          !query ||
          (booking.name || "").toLowerCase().includes(query) ||
          (booking.email || "").toLowerCase().includes(query) ||
          (booking.phone || "").toLowerCase().includes(query) ||
          (booking.service_type || "").toLowerCase().includes(query) ||
          (booking.result_type || "").toLowerCase().includes(query) ||
          (booking.recommended_service || "").toLowerCase().includes(query) ||
          (booking.time_slot || "").toLowerCase().includes(query) ||
          (booking.appointment_date || "").toLowerCase().includes(query);

        const currentStatus = (booking.status || "pending").toLowerCase();

        const matchesStatus =
          statusFilter === "all" ||
          currentStatus === statusFilter.toLowerCase();

        // const matchesService =
        //   serviceFilter === "all" ||
        //   (booking.service_type || "").toLowerCase() ===
        //     serviceFilter.toLowerCase();

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case "oldest":
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );

          case "name-asc":
            return (a.name || "").localeCompare(b.name || "");

          case "name-desc":
            return (b.name || "").localeCompare(a.name || "");

          case "newest":
          default:
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
        }
      });
  }, [bookings, searchTerm, statusFilter, sortOrder]);

  // Status badge colors
  const getStatusClasses = (status: string) => {
    const normalized = (status || "pending").toLowerCase();

    switch (normalized) {
      case "confirmed":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
        <p className="text-gray-600 mt-1">
          View all customer booking requests.
        </p>
      </div>

      {/* Filters */}
      {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
      {/* Search */}
      {/* <input
            type="text"
            placeholder="Search by name, email, phone, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          /> */}

      {/* Status Filter */}
      {/* <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg  py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select> */}

      {/* Count */}
      {/* <div className="flex items-center text-sm text-gray-600 px-2">
            Showing {filteredBookings.length} of {bookings.length} bookings
          </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Change md:grid-cols-3 to md:grid-cols-5 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name, email, phone, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          />

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg  py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Service Filter */}
          {/* <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          >
            <option value="all">All Services</option>
            <option value="Hair Color">Hair Color</option>
            <option value="Haircut">Haircut</option>
            <option value="Styling">Styling</option>
          </select> */}

          {/* Sort Filter */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full border border-gray-300 rounded-lg  py-3 focus:outline-none focus:ring-2 focus:ring-[#b38b4d]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name-asc">Name A–Z</option>
            <option value="name-desc">Name Z–A</option>
          </select>

          {/* Count */}
          <div className="flex items-center text-sm text-gray-600 px-2">
            Showing {filteredBookings.length} of {bookings.length} bookings
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {loading ? (
          <p className="text-gray-500">Loading bookings...</p>
        ) : filteredBookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="border border-orange-400 rounded-xl p-5 hover:shadow-sm transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Customer Information */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {booking.name || "Unknown Customer"}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {booking.email || "No email"}
                    </p>

                    <p className="text-sm text-gray-600">
                      {booking.phone || "No phone"}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Submitted on{" "}
                      {booking.created_at
                        ? new Date(booking.created_at).toLocaleString()
                        : "Unknown date"}
                    </p>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-1 text-sm text-gray-700 min-w-[280px]">
                    <p>
                      <strong>Service Type:</strong>{" "}
                      {booking.service_type || "N/A"}
                    </p>

                    <p>
                      <strong>Result Type:</strong>{" "}
                      {booking.result_type || "N/A"}
                    </p>

                    <p>
                      <strong>Recommended Service:</strong>{" "}
                      {booking.recommended_service || "N/A"}
                    </p>

                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {booking.appointment_date
                        ? new Date(booking.appointment_date).toLocaleDateString(
                            "en-US",
                          )
                        : "Not selected"}
                    </p>

                    <p>
                      <strong>Time Slot:</strong>{" "}
                      {booking.time_slot || "Not selected"}
                    </p>

                    <p>
                      <strong>Add-on:</strong> {booking.add_on || "No"}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      <select
                        value={booking.status || "pending"}
                        onChange={async (e) => {
                          const newStatus = e.target.value;

                          try {
                            const res = await fetch(
                              `/api/admin/dashboard/${booking.id}/status`,
                              {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  status: newStatus,
                                }),
                              },
                            );

                            const data = await res.json();

                            if (data.success) {
                              setBookings((prev) =>
                                prev.map((item) =>
                                  item.id === booking.id
                                    ? { ...item, status: newStatus }
                                    : item,
                                ),
                              );
                            } else {
                              alert("Failed to update status.");
                            }
                          } catch (error) {
                            console.error(error);
                            alert("Error updating status.");
                          }
                        }}
                        className={` py-2 rounded-lg text-xs font-semibold border ${getStatusClasses(
                          booking.status,
                        )}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
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
