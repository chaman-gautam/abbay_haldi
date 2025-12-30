"use client";
import sectionTitle from "@/components/sm_components/page_heading";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function GuestArtistPage() {
  return (
    <main className="bg-white text-[#1a1a1a] font-light ">
      {/* ====== Page Header ====== */}
      <section className="max-w-5xl pt-8  mx-auto px-6 md:px-12  text-center pb-12">
        <h1 className="text-3xl break-keep leading-relaxed font-medium text-center text-black mt-24 pb-12">
          Guest Artist
        </h1>
        {/* <sectionTitle>jflas</sectionTitle> */}
        <div className="flex justify-center items-center mb-10 overflow-hidden h-[600px]">
          {" "}
          {/* custom height */}
          <Link href="#" aria-label="guest-artist">
            <Image
              src="/dirhan.webp"
              alt="dirhan image"
              height={500}
              width={750}
              priority
              className="object-cover object-top w-full h-full"
            />
          </Link>
        </div>

        <h2 className="text-2xl font-medium mb-2">Dhiran Mistry</h2>
        <p className="text-[#a37f2d] text-sm font-medium mb-6">Hairstylist</p>

        <div className="max-w-3xl mx-auto text-[15px] leading-relaxed text-gray-700 space-y-4">
          <p>
            Dhiran started his career two decades ago in London, specializing in
            cutting and styling hair. After honing his skill set there, he
            embarked on New York City where he truly took his craft to the next
            level. He has worked for some of the biggest names in the industry
            in both London and New York.
          </p>
          <p>
            Working on everything from photo shoots to fashion shows, Dhiran’s
            work continues to be featured in some of the most well-known
            publications. Settling in Charlotte to raise his family, with a
            dream to own his own salon and through endless dedication, The
            Carriage House was born. Dhiran’s happiest place is behind the
            chair, tending to all of the needs of his extremely diverse
            clientele, both in New York and in Charlotte.
          </p>
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="bg-[#faf7f2] text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Ready for Your Hair Transformation?
        </h2>
        <p className="text-gray-600 mb-6 text-[15px]">
          Book a personalized session with our expert team and experience
          elevated hair artistry.
        </p>
        <Link href="/contact" aria-label="guest-artist">
          <button className="px-6 py-3 border border-[#a37f2d] text-[#a37f2d] hover:bg-[#a37f2d] hover:text-white transition-all duration-300">
            CONTACT US
          </button>
        </Link>
      </section>

      {/* ====== Footer Section ====== */}
    </main>
  );
}
