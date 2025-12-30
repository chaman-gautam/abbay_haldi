"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // import Link from "next/link";
import { motion } from "framer-motion";
const AboutIntroSection = () => {
  const pressData = [
    {
      img: "/MargotRobbie.webp",
      title: "Shadow Roots: How to Get Lived-In, Low-Maintenance Hair Color",
      source: "Allure",
      link: "https://www.instyle.com/highlights-for-gray-hair-5410274",
    },
    {
      img: "/download.webp",
      title:
        "Celebrity Hair Colorist Abby Haliti On Why Balayage Is Better Than Ever",
      source: "Vogue",
      link: "https://www.voguearabia.com/",
    },
    {
      img: "/IMG_6692.webp",
      title: "Hailey Bieber in the pink",
      source: "Glamour",
      link: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="pt-16 bg-white max-w-[1400px] m-auto">
      {/* Intro / Biography */}
      <h2 className="text-3xl break-keep leading-relaxed font-medium text-center text-black pt-5">
        Meet Abby Haliti
      </h2>

      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center ">
          {/* Left Text Section */}
          <div className="max-w-4xl mx-auto break-keep leading-relaxed space-y-6 text-gray-800 md:pl-10 order-2 md:order-1 max-w-[60%] sm-max-w-[98%]s">
            <p className="text-lg">
              Abby Haliti is a world-renowned Hair Color Specialist & Balayage
              Expert, having created signature looks for countless stars such as
              Olivia Palermo, Rita Ora, Jane Krakowski, and Sigourney Weaver,
              just to name a few.
            </p>
            <p>
              Abby Haliti is a prominent hair colorist in New York City,
              renowned for her precision, artistry, and commitment to
              sustainable beauty. With over 23 years of experience, she has
              earned recognition from Vogue, The New York Times, InStyle and
              international media for her mastery of balayage and her innovative
              “European Method” of hair coloring.
            </p>
            <p>
              Born in southeastern Europe, Abby quickly gained acclaim for her
              fresh, mindful approach to color. Allure magazine named her one of
              the best balayage experts in its Directory of Beauty.
            </p>
            <p>
              Her philosophy is simple: <strong>Less is more.</strong> Abby’s
              signature “3C Simplicity Method” empowers clients to enjoy
              beautiful hair that grows out gracefully, creating a sustainable
              routine with the freedom of fewer salon visits.
            </p>
            <p>
              Beyond her Upper East Side studio, Abby mentors professionals
              around the world. In 2018, she trained salon owners from Japan in
              partnership with Dahlia, the country’s largest beauty distributor,
              and has led masterclasses across Latin America and the Middle
              East.
            </p>
            <div className="w-full break-keep leading-relaxed flex justify-center items-center ">
              <Link
                href="/contact"
                className="inline-block px-16 py-3 bg-[#b38b4d] text-white uppercase text-sm tracking-wide hover:bg-[#a07a3f] transition-colors text-center"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-[50%] mb-8 md:mb-0 order-1 md:order-2 md:ml-1 pb-16">
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
      <section className="py-8 px-6 bg-white">
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
      <section className=" w-full flex items-center justify-center ">
        <h1 className="text-3xl md:text-3xl font-semibold tracking-wide uppercase  text-black">
          Press
        </h1>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-15">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, staggerChildren: 0.12 }}
        >
          {pressData.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col group cursor-pointer border-1  "
              variants={fadeUp}
            >
              <Link
                href={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-[#a37f2d] hover:text-[#b6923f] text-xs mt-2 inline-block transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-[500px] overflow-hidden rounded-none -mt-3">
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
                  <p className="text-base font-light leading-snug text-[#1a1a1a] group-hover:text-[#a37f2d] transition-colors duration-300">
                    {item.title}
                  </p>
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* CTA / Learn more button */}
    </main>
  );
};

export default AboutIntroSection;
