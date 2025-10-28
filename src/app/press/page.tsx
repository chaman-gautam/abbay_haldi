// app/press/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

interface PressItem {
  title: string;
  source: string;
  date?: string;
  href: string;
  imageSrc?: string;
}

const pressItems: PressItem[] = [
  {
    title: "Meet Abby Haliti – CanvasRebel Magazine",
    source: "CanvasRebel",
    date: "Aug 2024",
    href: "https://canvasrebel.com/meet-abby-haliti/",
    imageSrc: "/images/press/canvasrebel-abby-haliti.jpg",
  },
  {
    title: "Bosslady: Celeb Hair Colorist Abby Haliti",
    source: "Island Fever Sisters",
    date: "Jul 2024",
    href: "https://www.islandfeversisters.com/bosslady-abby-haliti/",
    imageSrc: "/images/press/bosslady-abby-haliti.jpg",
  },
  // Add more items as needed...
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function PressPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-24 bg-white">
        {/* Hero section */}
        <section className="relative w-full h-[45vh]">
          <Image
            src="/images/press-hero.jpg"
            alt="Press Room Abby Haliti"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-light">Press & Media</h1>
            <p className="mt-4 max-w-xl text-lg">
              Featured in top global beauty publications and media outlets.
            </p>
          </div>
        </section>

        {/* Press articles grid */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {pressItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {item.imageSrc && (
                  <div className="w-full h-40 relative">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm uppercase text-gray-500 mb-4">
                    {item.source} {item.date && `· ${item.date}`}
                  </p>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-[#b38b4d] hover:text-[#a07a3f] transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
