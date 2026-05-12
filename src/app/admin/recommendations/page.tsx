"use client";

import { useEffect, useMemo, useState } from "react";

type ServiceType = {
  id: string;
  name: string;
};

type ResultType = {
  id: string;
  name: string;
  service_type_id: string;
};

type Recommendation = {
  id: string;
  service_type_id: string;
  result_type_id: string;
  recommended_service: string;
  duration_minutes: number;
  price: number;
};

export default function RecommendationsPage() {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [allResultTypes, setAllResultTypes] = useState<ResultType[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedResultType, setSelectedResultType] = useState("");
  const [recommendedService, setRecommendedService] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

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

  // Load all result types
  const loadAllResultTypes = async () => {
    const res = await fetch("/api/admin/result-types");
    const data = await res.json();

    if (data.success) {
      setAllResultTypes(data.data || []);
    }
  };

  // Load recommendations
  const loadRecommendations = async () => {
    const res = await fetch("/api/admin/recommendations");
    const data = await res.json();

    if (data.success) {
      setRecommendations(data.data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([
        loadServiceTypes(),
        loadAllResultTypes(),
        loadRecommendations(),
      ]);
    };

    init();
  }, []);

  // Filter result types based on selected service type
  const filteredResultTypes = useMemo(() => {
    if (!selectedServiceType) return [];

    return allResultTypes.filter(
      (item) => item.service_type_id === selectedServiceType,
    );
  }, [allResultTypes, selectedServiceType]);

  // Helper functions
  const getServiceName = (id: string) =>
    serviceTypes.find((item) => item.id === id)?.name || "Unknown";

  const getResultName = (id: string) =>
    allResultTypes.find((item) => item.id === id)?.name || "Unknown";

  // Add recommendation
  const handleAdd = async () => {
    if (
      !selectedServiceType ||
      !selectedResultType ||
      !recommendedService.trim() ||
      !duration ||
      !price
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/admin/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_type_id: selectedServiceType,
          result_type_id: selectedResultType,
          recommended_service: recommendedService,
          duration_minutes: duration,
          price: price,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSelectedServiceType("");
        setSelectedResultType("");
        setRecommendedService("");
        setDuration("");
        setPrice("");

        await loadRecommendations();
      } else {
        alert(data.error || "Failed to add recommendation.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  // Delete recommendation
  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      "Are you sure you want to delete this recommendation?",
    );

    if (!confirmed) return;

    const res = await fetch("/api/admin/recommendations", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      await loadRecommendations();
    } else {
      alert(data.error || "Failed to delete.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Recommendations</h1>
        <p className="text-gray-600 mt-1">Manage AI booking recommendations.</p>
      </div>

      {/* Add Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Recommendation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={selectedServiceType}
            onChange={(e) => {
              setSelectedServiceType(e.target.value);
              setSelectedResultType("");
            }}
            className="border border-gray-300 px-4 py-3 rounded-lg"
          >
            <option value="">Select Service Type</option>
            {serviceTypes.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>

          <select
            value={selectedResultType}
            onChange={(e) => setSelectedResultType(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg"
          >
            <option value="">Select Result Type</option>
            {filteredResultTypes.map((result) => (
              <option key={result.id} value={result.id}>
                {result.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Recommended Service"
            value={recommendedService}
            onChange={(e) => setRecommendedService(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Duration (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg"
          />
        </div>

        <button
          onClick={handleAdd}
          disabled={saving}
          className="mt-4 px-6 py-3 bg-[#b38b4d] text-white rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Add Recommendation"}
        </button>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-6">Existing Recommendations</h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : recommendations.length === 0 ? (
          <p className="text-gray-500">No recommendations found.</p>
        ) : (
          <div className="space-y-4">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.recommended_service}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {getServiceName(item.service_type_id)} →{" "}
                    {getResultName(item.result_type_id)}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.duration_minutes} min • ${item.price}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
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
