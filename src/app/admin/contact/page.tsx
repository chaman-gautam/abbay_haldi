"use client";

import { useEffect, useState } from "react";

export default function AdminContact() {
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    fetch("/api/admin/contact")
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = async () => {
    await fetch("/api/admin/contact", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Saved");
  };

  return (
    <div className="max-w-xl mx-auto p-10 space-y-4">
      <h1 className="text-2xl font-semibold">Contact Settings</h1>

      {Object.keys(form).map((key) =>
        key !== "id" && key !== "updated_at" ? (
          <input
            key={key}
            name={key}
            value={form[key] || ""}
            onChange={handleChange}
            className="border w-full p-2"
            placeholder={key}
          />
        ) : null,
      )}

      <button onClick={save} className="bg-black text-white px-6 py-2">
        Save
      </button>
    </div>
  );
}
