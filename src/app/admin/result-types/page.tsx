"use client";

import { useEffect, useState } from "react";

type ServiceType = {
  id: string;
  name: string;
};

type ResultType = {
  id: string;
  name: string;
  is_active: boolean;
  service_types?: {
    id: string;
    name: string;
  };
};

export default function ResultTypesPage() {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [resultTypes, setResultTypes] = useState<ResultType[]>([]);

  const [selectedServiceType, setSelectedServiceType] = useState("");

  const [newName, setNewName] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load service types
  const loadServiceTypes = async () => {
    const res = await fetch("/api/admin/service-types");
    const data = await res.json();

    if (data.success) {
      setServiceTypes(data.data || []);
    }
  };

  // Load result types
  const loadResultTypes = async () => {
    const res = await fetch("/api/admin/result-types");
    const data = await res.json();

    if (data.success) {
      setResultTypes(data.data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadServiceTypes();
    loadResultTypes();
  }, []);

  // Add new result type
  const handleAdd = async () => {
    if (!selectedServiceType) {
      alert("Please select a service type.");
      return;
    }

    if (!newName.trim()) {
      alert("Please enter a result type name.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/admin/result-types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_type_id: selectedServiceType,
          name: newName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setNewName("");
        loadResultTypes();
      } else {
        alert(data.error || "Failed to add result type.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  // Delete result type
  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      "Are you sure you want to delete this result type?",
    );

    if (!confirmed) return;

    const res = await fetch("/api/admin/result-types", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      loadResultTypes();
    } else {
      alert(data.error || "Failed to delete.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Result Types</h1>
        <p className="text-gray-600 mt-1">
          Manage result options for each service.
        </p>
      </div>

      {/* Add Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Result Type</h2>

        <div className="space-y-4">
          <select
            value={selectedServiceType}
            onChange={(e) => setSelectedServiceType(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          >
            <option value="">Select Service Type</option>

            {serviceTypes.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="e.g. Lighter"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          />

          <button
            onClick={handleAdd}
            disabled={saving}
            className="px-6 py-3 bg-[#b38b4d] text-white rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Add Result Type"}
          </button>
        </div>
      </div>

      {/* Result Types List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-6">Existing Result Types</h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : resultTypes.length === 0 ? (
          <p className="text-gray-500">No result types found.</p>
        ) : (
          <div className="space-y-4">
            {resultTypes.map((result) => (
              <div
                key={result.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-200 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{result.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Service Type: {result.service_types?.name || "Unknown"}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(result.id)}
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
