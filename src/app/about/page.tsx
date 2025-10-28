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
              <h3 className="font-bold">
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
                src="/IMG_6133.jpeg"
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
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {/* Place logos; example: Vogue, NYT, InStyle, etc. */}
            <Image
              src="/images/logo-vogue.svg"
              alt="Vogue"
              width={120}
              height={60}
            />
            <Image
              src="/images/logo-nytimes.svg"
              alt="The New York Times"
              width={140}
              height={60}
            />
            <Image
              src="/images/logo-instyle.svg"
              alt="InStyle"
              width={120}
              height={60}
            />
            <Image
              src="/images/logo-allure.svg"
              alt="Allure"
              width={100}
              height={60}
            />
          </div>
        </section>

        {/* CTA / Learn more button */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
