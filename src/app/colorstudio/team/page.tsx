"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Abby Haliti",
    role: "Hair Colorist",
    imageSrc: "/images/team/abby-haliti.jpg",
    bio: "World-renowned hair color specialist based in NYC.",
  },
  {
    name: "Malena",
    role: "Hair Colorist",
    imageSrc: "/images/team/malena.jpg",
    bio: "Senior colorist with 25 years of experience.",
  },
  {
    name: "Hiro Araki",
    role: "Hairstylist",
    imageSrc: "/images/team/hiro-araki.jpg",
    bio: "Senior stylist with 22 years in the industry.",
  },
  {
    name: "Sedat Gurel",
    role: "Color Specialist & Hair Designer",
    imageSrc: "/images/team/sedat-gurel.jpg",
    bio: "Former senior education supervisor at L’Oréal.",
  },
  {
    name: "Roy Teeluck",
    role: "Hairstylist",
    imageSrc: "/images/team/roy-teeluck.jpg",
    bio: "Celebrity hairstylist known for hair health expertise.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-24 bg-white">
        {/* Hero for Team */}
        <section className="relative w-full h-[45vh]">
          <Image
            src="/images/team-hero.jpg"
            alt="Team at Abby Haliti Color Studio"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-3xl md:text-5xl font-light">Meet Our Team</h1>
            <p className="mt-4 text-lg max-w-xl">
              A curated group of experts dedicated to your hair’s color journey.
            </p>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-16 px-4 md:px-8 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                className="flex flex-col items-center text-center space-y-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="w-48 h-48 relative overflow-hidden rounded-full">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-gray-600">{member.bio}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
