"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function AboutPage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* <Navbar /> */}

      <main className="pt-24 bg-white max-w-[1400px] m-auto">
        {/* Intro / Biography */}
        <h2 className="text-2xl font-medium text-center text-black pt-5">
          Meet Abby Haliti
        </h2>

        <section className="py-12 px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:space-x-12 items-center ">
            {/* Left Text Section */}
            <div className="max-w-4xl mx-auto space-y-6 text-gray-800 md:pl-10 order-2 md:order-1 max-w-[60%]">
              <h3 className="text-lg">
                Abby Haliti is a world-renowned Hair Color Specialist & Balayage
                Expert, having created signature looks for countless stars such
                as Olivia Palermo, Rita Ora, Jane Krakowski, and Sigourney
                Weaver, just to name a few.
              </h3>
              <p>
                Abby Haliti is a prominent hair colorist in New York City,
                renowned for her precision, artistry, and commitment to
                sustainable beauty. With over 23 years of experience, she has
                earned recognition from Vogue, The New York Times, InStyle and
                international media for her mastery of balayage and her
                innovative “European Method” of hair coloring.
              </p>
              <p>
                Born in southeastern Europe, Abby quickly gained acclaim for her
                fresh, mindful approach to color. Allure magazine named her one
                of the best balayage experts in its Directory of Beauty.
              </p>
              <p>
                Her philosophy is simple: <strong>Less is more.</strong> Abby’s
                signature “3C Simplicity Method” empowers clients to enjoy
                beautiful hair that grows out gracefully, creating a sustainable
                routine with the freedom of fewer salon visits.
              </p>
              <p>
                Beyond her Upper East Side studio, Abby mentors professionals
                around the world. In 2018, she trained salon owners from Japan
                in partnership with Dahlia, the country’s largest beauty
                distributor, and has led masterclasses across Latin America and
                the Middle East.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-[#b38b4d] text-white uppercase text-sm tracking-wide hover:bg-[#a07a3f] transition-colors"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-[50%] mb-8 md:mb-0 order-1 md:order-2">
              <Image
                src="/IMG_6141.jpeg"
                alt="Abby Haliti Logo"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Featured in / Press logos */}
        <section className="py-12 px-6 bg-white">
          {/* Horizontal scroll wrapper */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-10 items-center justify-start w-max px-4 animate-scroll-slow">
              {/* Example: 20 logos (you can add or replace freely) */}
              {[
                "/1.webp",
                "/2.webp",
                "/3.webp",
                "/4.webp",
                "/5.webp",
                "/6.webp",
                "/7.webp",
                "/8.webp",
                "/9.webp",
                "/10.webp",
                "/11.webp",
                "/12.webp",
                "/13.webp",
                "/14.webp",
                "/15.webp",
                "/16.webp",
                "/17.webp",
                "/18.webp",
                "/19.webp",
                "/20.webp",
              ].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[250px] h-[200px] relative text-yellow transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`logo-${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Learn more button */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
