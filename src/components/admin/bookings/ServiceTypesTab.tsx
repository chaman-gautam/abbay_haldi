"use client";

import { useEffect, useState } from "react";

type ServiceType = {
  id: string;
  name: string;
  is_active: boolean;
};

export default function ServiceTypesTab() {
  const [items, setItems] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/service-types", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setItems(data.data || []);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error("Error loading service types:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async () => {
    if (!newName.trim()) return;

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
        await loadData();
      }
    } catch (error) {
      console.error("Error adding service type:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service type?")) return;

    try {
      const res = await fetch("/api/admin/service-types", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      const data = await res.json();

      if (data.success) {
        await loadData();
      }
    } catch (error) {
      console.error("Error deleting service type:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Service Types</h1>
        <p className="text-gray-600">Manage top-level booking categories.</p>
      </div>

      {/* Add Form */}
      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Service Type</h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="e.g. Hair Color"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 border px-4 py-3 rounded-lg"
          />

          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-[#b38b4d] text-white rounded-lg"
          >
            Add Service
          </button>
        </div>
      </div>

      {/* Existing Items */}
      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">Existing Service Types</h2>

        {loading ? (
          <p>Loading...</p>
        ) : items.length === 0 ? (
          <p>No service types found.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded-xl p-4"
              >
                <span className="font-medium">{item.name}</span>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
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
