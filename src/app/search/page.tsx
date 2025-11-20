"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function SearchPage() {
  const params = useSearchParams();
  const q = params.get("q")?.toLowerCase() || "";

  // 🔥 your site searchable content
  const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Shadow Day", url: "/about/shadow" },
    { title: "Team", url: "/colorstudio/team" },
    { title: "Color Services", url: "/colorstudio/colorservices" },
    { title: "Guest Artist", url: "/colorstudio/guest-artist" },
    { title: "Press", url: "/press" },
    { title: "Contact", url: "/contact" },
  ];

  // 🔥 FIXED SEARCH FILTER
  const results = pages.filter((item) => item.title.toLowerCase().includes(q));

  return (
    <main className="pt-28 px-6 max-w-3xl mx-auto min-h-[70vh] ">
      <h1 className="text-3xl font-bold mb-6 text-black">Search Results</h1>
      <p className="text-gray-600 mb-6">
        Showing results for: <strong>{q}</strong>
      </p>

      {results.length === 0 ? (
        <p className="text-red-900 font-bold text-3xl">No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item, i) => (
            <li
              key={i}
              className="border-b pb-2 text-2xl border-2 text-center bg-black"
            >
              <Link href={item.url} className="text-[#a37f2d] hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
