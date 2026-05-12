"use client";

import { useEffect, useState } from "react";

type ServiceType = {
  id: string;
  name: string;
  is_active: boolean;
  sort_order: number | null;
};

export default function ServiceTypesPage() {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load service types
  const loadServiceTypes = async () => {
    try {
      const res = await fetch("/api/admin/service-types");
      const data = await res.json();

      if (data.success) {
        setServiceTypes(data.data || []);
      }
    } catch (error) {
      console.error("Error loading service types:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServiceTypes();
  }, []);

  // Add new service type
  const handleAdd = async () => {
    if (!newName.trim()) {
      alert("Please enter a service name.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/admin/service-types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setNewName("");
        loadServiceTypes();
      } else {
        alert(data.error || "Failed to add service type.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  // Delete service type
  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      "Are you sure you want to delete this service type?",
    );

    if (!confirmed) return;

    try {
      const res = await fetch("/api/admin/service-types", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        loadServiceTypes();
      } else {
        alert(data.error || "Failed to delete.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Service Types</h1>
        <p className="text-gray-600 mt-1">
          Manage top-level booking categories.
        </p>
      </div>

      {/* Add Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Service Type</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="e.g. Hair Color"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-3 rounded-lg"
          />

          <button
            onClick={handleAdd}
            disabled={saving}
            className="px-6 py-3 bg-[#b38b4d] text-white rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Add Service"}
          </button>
        </div>
      </div>

      {/* Service List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-6">Existing Service Types</h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : serviceTypes.length === 0 ? (
          <p className="text-gray-500">No service types found.</p>
        ) : (
          <div className="space-y-4">
            {serviceTypes.map((service) => (
              <div
                key={service.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-200 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {service.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Status: {service.is_active ? "Active" : "Inactive"}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(service.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
