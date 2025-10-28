"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please fill in your email first.");
      return;
    }

    // Optional: simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error if valid
    setEmail(""); // Optional: reset input after success
    // You can connect your API call here
  };
  return (
    <footer
      className={cn(
        "bg-white text-gray-700  w-full border-t border-gray-400 focus:outline-none",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Newsletter */}
        {/* <div className="w-full md:max-w-md">
          <p className="text-black text-lg md:text-xl mb-2 font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with Abby’s latest news, offers, and styling tips.
          </p>
          <form action="#" className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 border-b border-gray-500 focus:outline-none text-sm w-full placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-sm uppercase w-full md:w-auto hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div> */}

        <div className="w-full md:max-w-md">
          <p className="text-black text-lg md:text-xl mb-2 font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with Abby’s latest news, offers, and styling tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`px-3 py-2 border-b focus:outline-none text-sm w-full placeholder-gray-500 ${
                error ? "border-red-500" : "border-gray-500"
              }`}
            />

            {/* Inline red error text */}
            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-sm uppercase w-full md:w-auto hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-xs uppercase tracking-wider">
          <p className="text-black text-base md:text-[1rem] font-semibold mb-2">
            Quick Links
          </p>
          <div className="flex flex-col space-y-2 text-gray-600">
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <p className="text-black text-base md:text-[1rem] font-semibold mb-2">
            Follow Us
          </p>
          <div className="flex flex-row md:flex-col gap-4 text-gray-600 text-sm">
            <Link
              href="https://www.facebook.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-xs text-gray-500 border-t border-gray-300 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
          <span>© Abby Haliti {year}. All rights reserved.</span>
          <span className="text-gray-400">
            Made with ❤️ by Team{" "}
            <Link
              href="https://diwconsultix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              DiwConsultix
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
