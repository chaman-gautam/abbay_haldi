"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pressData = [
  {
    img: "/MargotRobbie.webp",
    title: "Hailey Bieber debuts her new hair color by Abby Haliti",
    source: "Allure",
    link: "#",
  },
  {
    img: "/download.webp",
    title: "Halle Bailey’s soft pink look by Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/IMG_6692.webp",
    title: "Subtle lowlight transformation featured in Glamour",
    source: "Glamour",
    link: "#",
  },
  {
    img: "/French.webp",
    title: "The modern approach to blonde perfection",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "/PearlBlonde.webp",
    title: "Effortless color blends dominating this season",
    source: "InStyle",
    link: "#",
  },
  {
    img: "/HairPerfume.webp",
    title: "Transformations using the European Method of Balayage",
    source: "Elle",
    link: "#",
  },
  {
    img: "/AllureCreatorsNetwork.webp",
    title: "Inside the Abby Haliti Color Studio experience",
    source: "Byrdie",
    link: "#",
  },
  {
    img: "/5SurprisingTipsForDisguisingGrayHairsFromHighlightsToSpotTreatments.webp",
    title: "Why simplicity in color can redefine beauty",
    source: "NewBeauty",
    link: "#",
  },
  {
    img: "/TheHaircareHeroesOliviaReliesOn.webp",
    title: "Luminous blondes that protect hair integrity",
    source: "Refinery29",
    link: "#",
  },
  {
    img: "/DryShampooCanCauseDullLifelessHairAccordingToThisExpert.webp",
    title: "Natural balayage tones that never fade",
    source: "Cosmopolitan",
    link: "#",
  },
  {
    img: "/hair.webp",
    title: "/The secret to modern hair color artistry",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "/1-launchmetrics-hobeika-hc-bks-f23-036-64e3d062bf9ed (1).webp",
    title: "The most elegant brunette tones of 2024",
    source: "Grazia",
    link: "#",
  },
  {
    img: "/aby.webp",
    title: "Celebrity-approved balayage techniques",
    source: "People",
    link: "#",
  },
  {
    img: "/nylon.webp",
    title: "Runway trends inspired by Abby’s signature method",
    source: "W Magazine",
    link: "#",
  },
  {
    img: "/blonde.webp",
    title: "Minimalist hair color revolution",
    source: "Elle Decor",
    link: "#",
  },
  {
    img: "/BiggestHairColor.webp",
    title: "Color artistry meets sustainability",
    source: "The Cut",
    link: "#",
  },
  {
    img: "/AGuideToHair.webp",
    title: "Inside Abby’s mentorship for new stylists",
    source: "Forbes",
    link: "#",
  },
  {
    img: "/chlorine-shampoo-649f1b704c5d6.webp",
    title: "From Europe to NYC: redefining luxury haircare",
    source: "New York Times",
    link: "#",
  },
  {
    img: "/blackhair.webp",
    title: "The rise of beige blonde tones for spring",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/fine-hair-tips-1200x900.webp",
    title: "How Abby Haliti reimagines hair wellness",
    source: "Allure",
    link: "#",
  },
  {
    img: "/press39.webp",
    title: "Soft dimension: The art of invisible highlights",
    source: "Glamour",
    link: "#",
  },
  {
    img: "/40.webp",
    title: "Quiet luxury color tones redefine beauty standards",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "/41.webp",
    title: "Glossing techniques that transform natural tones",
    source: "Refinery29",
    link: "#",
  },
  {
    img: "/42.webp",
    title: "Behind the color philosophy of Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/43.webp",
    title: "Subtle transformations for effortless elegance",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "/44.webp",
    title: "The philosophy behind effortless color",
    source: "Grazia",
    link: "#",
  },
  {
    img: "/45.webp",
    title: "Why healthy hair is the new luxury",
    source: "Forbes",
    link: "#",
  },
  {
    img: "/46.webp",
    title: "The timeless appeal of sunlit blonde shades",
    source: "Elle",
    link: "#",
  },
  {
    img: "/47.webp",
    title: "Mastering subtle transformations in modern beauty",
    source: "W Magazine",
    link: "#",
  },
  {
    img: "/48.webp",
    title: "The art of invisible contrast highlights",
    source: "Cosmopolitan",
    link: "#",
  },
  {
    img: "/49.webp",
    title: "Why restraint defines luxury hair color today",
    source: "InStyle",
    link: "#",
  },
  {
    img: "/50.webp",
    title: "Defining a new era of timeless blondes",
    source: "Allure",
    link: "#",
  },
  {
    img: "/51.webp",
    title: "Editorial excellence through natural tones",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/52.webp",
    title: "Celebrity favorites: effortless dimensional color",
    source: "People",
    link: "#",
  },
  {
    img: "/53.webp",
    title: "Soft blending for everyday luxury",
    source: "Byrdie",
    link: "#",
  },
  {
    img: "/54.webp",
    title: "Inside the evolution of the European Balayage technique",
    source: "Elle",
    link: "#",
  },
  {
    img: "/55.webp",
    title: "Redefining precision in modern color work",
    source: "Vogue Italia",
    link: "#",
  },
  {
    img: "/56.webp",
    title: "Classic tones with contemporary technique",
    source: "Glamour UK",
    link: "#",
  },
  {
    img: "/58.webp",
    title: "The global rise of refined hair artistry",
    source: "Tatler",
    link: "#",
  },
  {
    img: "/59.webp",
    title: "Why natural palettes lead 2025 trends",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/60.webp",
    title: "Hair integrity first: The Haliti method explained",
    source: "NewBeauty",
    link: "#",
  },
  {
    img: "/61.webp",
    title: "Subtle gloss, bold confidence — Abby’s secret formula",
    source: "Marie Claire",
    link: "#",
  },
  {
    img: "/62.webp",
    title: "Parisian minimalism meets NYC elegance",
    source: "Harper’s Bazaar",
    link: "#",
  },
  {
    img: "/63.webp",
    title: "Runway-approved understated transformations",
    source: "Elle UK",
    link: "#",
  },
  {
    img: "/64.webp",
    title: "Shaping the next era of luxury color education",
    source: "Forbes",
    link: "#",
  },
  {
    img: "/65.webp",
    title: "Behind the chair with Abby Haliti",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/66.webp",
    title: "Masterclass in soft, dimensional blondes",
    source: "Allure",
    link: "#",
  },
  {
    img: "/67.webp",
    title: "From consultation to confidence: the Abby approach",
    source: "InStyle",
    link: "#",
  },
  {
    img: "/68.webp",
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
