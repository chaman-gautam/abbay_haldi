"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Link from "next/link";
const AboutIntroSection = () => {
  return (
    <section className="text-center py-16 px-6 md:px-20 lg:px-32 max-w-6xl mx-auto">
      <div className="flex justify-center items-center  mb-10 ">
        <Link href="/" aria-label="Home">
          <Image
            src="/IMG_6133.jpeg"
            alt="Abby Haliti Logo"
            width={900}
            height={1000}
            priority
          />
        </Link>
      </div>

      {/* ===== Title ===== */}
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">
        Abby Haliti: World-Renowned Hair Color Specialist & Balayage Expert
      </h2>

      {/* ===== Paragraphs ===== */}
      <div className="space-y-6 text-[15px] leading-relaxed text-gray-800">
        <p>
          Abby Haliti is a leading hair colorist based in New York City, known
          for her precision, artistry, and commitment to sustainable beauty.
          With over 23 years of experience, she has earned recognition from
          <span className="italic"> Vogue</span>,{" "}
          <span className="italic">The New York Times</span>,{" "}
          <span className="italic">InStyle</span>, and international media for
          her mastery of balayage and her innovative “European Method” of hair
          coloring.
        </p>

        <p>
          Originally from southeastern Europe, Abby quickly gained acclaim for
          her fresh, mindful approach to color.{" "}
          <span className="italic">Allure</span> magazine named her one of the
          best balayage experts in its{" "}
          <span className="italic">Directory of Beauty</span>. As an
          accomplished color corrector, she specializes in luminous,
          natural-looking results that protect the integrity of the hair.
        </p>

        <p>
          Her philosophy is simple: <strong>Less is more.</strong> Abby’s
          signature <strong>3C Simplicity Method</strong> empowers clients to
          enjoy beautiful hair that grows out gracefully, creating a sustainable
          routine with the freedom of fewer salon visits.
        </p>

        <p>
          Beyond her Upper East Side studio, Abby mentors professionals around
          the world. In 2018, she trained salon owners from Japan in partnership
          with Dahlia, the country’s largest beauty distributor, and has led
          masterclasses and pop-ups across Latin America and the Middle East,
          including Dubai, Kuwait, and Saudi Arabia.
        </p>

        <p>
          As an <span className="italic">Allure Content Creator</span>, member
          of the <span className="italic">Byrdie Wellness Board</span>, and
          industry educator, Abby was recognized in 2023 by one of the top
          beauty magazines for her influence and expertise. She is dedicated to
          inspiring women and professionals to embrace healthy, effortless
          color. Her work proves that hair is often the first thing people
          notice — and that true beauty starts with healthy hair.
        </p>
      </div>

      {/* ===== Learn More Button ===== */}
      <div className="mt-10">
        <Link
          href="/about"
          className="inline-block bg-[#a37f2d] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider rounded-sm hover:bg-[#a07a3f] transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutIntroSection;
