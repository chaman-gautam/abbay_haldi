"use client";
import { useState } from "react";

export default function ContentEditor() {
  const [title, setTitle] = useState("Connect with us");
  const [subtitle, setSubtitle] = useState("Luxury hair studio");

  function save() {
    alert("Saved locally (Supabase later)");
  }

  return (
    <div className="p-10 max-w-2xl text-black">
      <h1 className="text-2xl mb-6">Edit Homepage Hero</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Enter title"
      />

      <textarea
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="border p-2 w-full mb-6"
        placeholder="Enter subtitle"
      />

      <button onClick={save} className="bg-black text-white px-6 py-2">
        Save
      </button>
    </div>
  );
}
