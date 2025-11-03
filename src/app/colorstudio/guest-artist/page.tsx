"use client";

import Image from "next/image";
import React from "react";

export default function GuestArtistPage() {
  return (
    <main className="bg-white text-[#1a1a1a] font-light mt-8">
      {/* ====== Page Header ====== */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-12">Guest Artist</h1>

        <div className=" w-full max-w-3xl mx-auto h-[480px] mb-10 text-black">
          <Image
            src="https://source.unsplash.com/random/1000x800?hairstylist,studio"
            alt="Guest Artist"
            fill
            className="object-cover rounded-md"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">Dhiran Mistry</h2>
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
        <button className="px-6 py-3 border border-[#a37f2d] text-[#a37f2d] hover:bg-[#a37f2d] hover:text-white transition-all duration-300">
          CONTACT US
        </button>
      </section>

      {/* ====== Footer Section ====== */}
    </main>
  );
}
