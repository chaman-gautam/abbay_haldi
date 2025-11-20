"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchContent() {
  const params = useSearchParams();
  const q = params.get("q")?.toLowerCase() || "";

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

  const results = pages.filter((item) => item.title.toLowerCase().includes(q));

  return (
    <main className="pt-28 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-light mb-6">Search Results</h1>
      <p className="text-gray-600 mb-6">
        Showing results for: <strong>{q}</strong>
      </p>

      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item, i) => (
            <li key={i} className="border-b pb-2">
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
