"use client";

import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
import { supabase } from "@/lib/supabase/client";
export default function AdminShadowPage() {
  const [form, setForm] = useState({
    id: "",
    class_time: "",
    class_description: "",
    price: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data } = await supabase
      .from("shadow_schedule")
      .select("*")
      .limit(1)
      .single();

    if (data) setForm(data);
  }

  async function updateData() {
    await supabase
      .from("shadow_schedule")
      .update({
        class_time: form.class_time,
        class_description: form.class_description,
        price: form.price,
      })
      .eq("id", form.id);

    alert("Updated Successfully");
  }

  return (
    <div className="max-w-2xl mx-auto py-20 px-6 space-y-6">
      <h1 className="text-2xl font-semibold">Shadow Schedule Admin</h1>

      <input
        className="border p-3 w-full"
        placeholder="Class Time"
        value={form.class_time}
        onChange={(e) => setForm({ ...form, class_time: e.target.value })}
      />

      <textarea
        className="border p-3 w-full"
        placeholder="Description"
        value={form.class_description}
        onChange={(e) =>
          setForm({ ...form, class_description: e.target.value })
        }
      />

      <input
        className="border p-3 w-full"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={updateData} className="bg-black text-white px-6 py-3">
        Save Changes
      </button>
    </div>
  );
}
