"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pressData = [
  {
    img: "https://source.unsplash.com/random/400x400?model",
    title: "Hailey Bieber debuts her new hair color by Abby Haliti",
    source: "Allure",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?beauty",
    title: "Halle Bailey’s soft pink look by Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?salon",
    title: "Subtle lowlight transformation featured in Glamour",
    source: "Glamour",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?hair",
    title: "The modern approach to blonde perfection",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?fashion",
    title: "Effortless color blends dominating this season",
    source: "InStyle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?studio",
    title: "Transformations using the European Method of Balayage",
    source: "Elle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?luxury",
    title: "Inside the Abby Haliti Color Studio experience",
    source: "Byrdie",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?makeup",
    title: "Why simplicity in color can redefine beauty",
    source: "NewBeauty",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?editorial",
    title: "Luminous blondes that protect hair integrity",
    source: "Refinery29",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?brunette",
    title: "Natural balayage tones that never fade",
    source: "Cosmopolitan",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?makeup-artist",
    title: "The secret to modern hair color artistry",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?woman-hair",
    title: "The most elegant brunette tones of 2024",
    source: "Grazia",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?celebrity",
    title: "Celebrity-approved balayage techniques",
    source: "People",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?runway",
    title: "Runway trends inspired by Abby’s signature method",
    source: "W Magazine",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?style",
    title: "Minimalist hair color revolution",
    source: "Elle Decor",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?sustainable",
    title: "Color artistry meets sustainability",
    source: "The Cut",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?studio-light",
    title: "Inside Abby’s mentorship for new stylists",
    source: "Forbes",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?editorial-hair",
    title: "From Europe to NYC: redefining luxury haircare",
    source: "New York Times",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?blonde",
    title: "The rise of beige blonde tones for spring",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?studio-woman",
    title: "How Abby Haliti reimagines hair wellness",
    source: "Allure",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?glamour",
    title: "Soft dimension: The art of invisible highlights",
    source: "Glamour",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?elegance",
    title: "Quiet luxury color tones redefine beauty standards",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?shine",
    title: "Glossing techniques that transform natural tones",
    source: "Refinery29",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?fashion-model",
    title: "Behind the color philosophy of Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?luxury-hair",
    title: "Subtle transformations for effortless elegance",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?artistry",
    title: "The philosophy behind effortless color",
    source: "Grazia",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?magazine",
    title: "Why healthy hair is the new luxury",
    source: "Forbes",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?editorial-blonde",
    title: "The timeless appeal of sunlit blonde shades",
    source: "Elle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?women",
    title: "Mastering subtle transformations in modern beauty",
    source: "W Magazine",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?hair-color",
    title: "The art of invisible contrast highlights",
    source: "Cosmopolitan",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?studio-portrait",
    title: "Why restraint defines luxury hair color today",
    source: "InStyle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?fashion-beauty",
    title: "Defining a new era of timeless blondes",
    source: "Allure",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?creative",
    title: "Editorial excellence through natural tones",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?model-hair",
    title: "Celebrity favorites: effortless dimensional color",
    source: "People",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?natural-hair",
    title: "Soft blending for everyday luxury",
    source: "Byrdie",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?editorial-luxury",
    title: "Inside the evolution of the European Balayage technique",
    source: "Elle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?model-editorial",
    title: "Redefining precision in modern color work",
    source: "Vogue Italia",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?beauty-portrait",
    title: "Classic tones with contemporary technique",
    source: "Glamour UK",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?luxury-studio",
    title: "The global rise of refined hair artistry",
    source: "Tatler",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?minimal",
    title: "Why natural palettes lead 2025 trends",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?beauty-hair",
    title: "Hair integrity first: The Haliti method explained",
    source: "NewBeauty",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?modern",
    title: "Subtle gloss, bold confidence — Abby’s secret formula",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?creative-style",
    title: "Parisian minimalism meets NYC elegance",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?model-runway",
    title: "Runway-approved understated transformations",
    source: "Elle UK",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?studio-woman",
    title: "Shaping the next era of luxury color education",
    source: "Forbes",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?editorial-hair",
    title: "Behind the chair with Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?fashion",
    title: "Masterclass in soft, dimensional blondes",
    source: "Allure",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?hairstyle",
    title: "From consultation to confidence: the Abby approach",
    source: "InStyle",
    link: "#",
  },
  {
    img: "https://source.unsplash.com/random/400x400?blonde",
    title: "Signature color transformations in 2025",
    source: "Cosmopolitan",
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PressPage() {
  return (
    <main className=" min-h-screen mt-20">
      {/* ===== Hero Header ===== */}
      <section className=" w-full flex items-center justify-center ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase pt-8 text-black">
          Press
        </h1>
      </section>

      {/* ===== Press Grid Section ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, staggerChildren: 0.12 }}
        >
          {pressData.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col group cursor-pointer border-2  "
              variants={fadeUp}
            >
              {/* Image */}
              <div className="relative w-full h-[380px] overflow-hidden rounded-none">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>

              {/* Details */}
              <div className="pt-5 px-2 text-center">
                <h3 className="text-base font-light leading-snug text-[#1a1a1a] group-hover:text-[#a37f2d] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                  {item.source}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a37f2d] hover:text-[#b6923f] text-xs mt-2 inline-block transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
