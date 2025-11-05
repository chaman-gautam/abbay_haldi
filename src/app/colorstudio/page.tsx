"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function ColorStudioPage() {
  return (
    <main className="bg-white text-[#1a1a1a] font-light mt-16">
      {/* ====== Hero Section ====== */}
      <section className="relative w-full h-[85vh] flex items-center justify-center ">
        <Image
          src="/colour-studio-hero.webp"
          alt="Abby Haliti Color Studio"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-8 text-black">
            AH Color Studio
          </h1>

          <Link href={"https://www.phorest.com/salon/abbyhaliticolorstudio"}>
            <button className="bg-[#a37f2d] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#8d6f25] transition-all">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* ====== Studio Info Section ====== */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center py-20">
        <p className="text-[15px] leading-relaxed text-gray-800 mb-6">
          AH Color Studio, founded by the internationally renowned colorist Abby
          Haliti, is the Upper East Side’s premier destination for refined hair
          color, precision cuts, and boutique hair care services. Every detail
          is meticulously designed to create a serene and wellness-driven
          experience, complete with a signature Lavazza cappuccino, a tranquil
          garden, and a sense of calm.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-800 mb-6">
          Our philosophy revolves around the belief that hair is an extension of
          your natural beauty. Our bespoke techniques are meticulously crafted
          to enhance your look while preserving the health and integrity of
          every strand by using top products like L’Oréal and Milbon.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-800 mb-10">
          At AH Color Studio, we unite two exceptional groups: master in-house
          artists who deliver tailored, high-impact results from the city’s top
          colorists and stylists, and world-class guest experts who offer
          innovative techniques and global perspectives.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-800 mb-12">
          Whether you seek subtle refinement or a complete transformation, AH
          Color Studio is your intimate sanctuary where artistry, care, and
          elegance converge.
        </p>
        <button className="bg-[#a37f2d] text-white px-6 py-2 hover:bg-[#8d6f25] transition-all">
          Meet Our Team
        </button>
      </section>

      {/* ====== Appointment Section ====== */}
      <section className="bg-[#faf7f2] py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Book Your Appointment Today
        </h2>
        <p className="text-gray-600 mb-6 text-[15px]">
          Reserve your spot with our expert stylists and experience the perfect
          transformation.
        </p>
        <button className="bg-[#a37f2d] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#8d6f25] transition-all">
          Book Now
        </button>
      </section>

      {/* ====== Footer Section ====== */}
    </main>
  );
}
