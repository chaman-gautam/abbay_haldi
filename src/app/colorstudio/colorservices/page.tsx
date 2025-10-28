"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function ColorServicesPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="pt-20 bg-white">
        {/* ===== Hero / Banner ===== */}
        <section className="relative w-full h-[50vh]">
          <Image
            src="/hesro-bar.jpg"
            alt="Color Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-light">Color Services</h1>
            <p className="mt-4 text-lg max-w-lg">
              Discover our expert color offerings — from balayage to correction,
              tailored for you.
            </p>
          </div>
        </section>

        {/* ===== Content / Services List ===== */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-10 text-gray-800">
            <h2 className="text-2xl font-medium text-center">
              Our Signature Services
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  European French Balayage
                </h3>
                <p className="mt-2">
                  Our signature technique delivers soft, luminous blending with
                  natural grow-out and low maintenance. Perfect for those
                  wanting elegant dimension without harsh lines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Color Correction</h3>
                <p className="mt-2">
                  Whether recovering from a dye disaster or adjusting tones, our
                  expert color correction restores integrity and depth, always
                  prioritizing hair health.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Gloss & Toner Treatments
                </h3>
                <p className="mt-2">
                  Enhance shine, refresh your tone, or soften highlights with
                  our gloss + toner services — the perfect in-between touch-up.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Short Enhancements & Root Blending
                </h3>
                <p className="mt-2">
                  For low-maintenance clients, we offer root blending or short
                  enhancement services to subtly refresh color without full
                  re-dos.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#b38b4d] text-white uppercase text-sm tracking-wide hover:bg-[#a07a3f] transition"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
