"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// ==== Type Definition ====
interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
}

// ==== Static Team Data ====
const teamMembers: TeamMember[] = [
  {
    name: " Abby Haliti ",
    role: "Founder / Color Director",
    imageSrc: "/IMG_61412.webp",
    bio: " Abby Haliti is a prominent hair colorist in New York City renowned for her exceptional skills and reputation in the beauty industry. She has been recognized by leading publications such as Vogue, The New York Times, and InStyle, as well as international press. Known for her warm personality and mindful approach to hair coloring, Abby was named the best Balayage Expert by Allure magazine’s Directory of Beauty. Born in South-Eastern Europe and possessing a diverse education, Abby rapidly gained recognition for her unique take on the European hair coloring technique of Balayage. Her expertise in this area has made her a highly sought-after colorist in New York City and globally. She is also a leader in the color industry, serving as a color director and sharing her knowledge by mentoring freelancers globally.",
  },
  {
    name: "Malena",
    role: "Malena | Hair Colorist",
    imageSrc: "/NIK_8284.webp",
    bio: " Malena is a senior colorist with 25 years of experience, originally from Mexico City. Her passion has always been in the color department, where she has trained to master the art of hair color. Melena has extensive experience working in some of the top salons in NYC, where she has developed her expertise in the color department. Additionally, she has provided professional hotline services for Clairol, further honing her skills and knowledge in the field.",
  },
  {
    name: "Hiro Araki",
    role: "Hiro Araki | Hairstylist",
    imageSrc: "/NIK_8217.webp",
    bio: " Hiro Araki, a senior stylist with over 22 years of experience in the hairdressing industry, has owned a salon in Tokyo and worked with some of the top salons in New York City. He has earned immense respect in the beauty world for his meticulous and beautiful cuts, and his precision is unmatched. His passion for the beauty world has exceeded expectations, and he has had the honor of working with celebrity clients such as Kamala Devi Harris, Juan Martín del Potro, Ina Garten, Isao Aoki, to name a few.",
  },
  {
    name: "Sedat Gurel",
    role: "Sedat Gurel | Color Specialist & Hair Designer",
    imageSrc: "/sedat.webp",
    bio: " With over 20 years of experience in the hairdressing industry, Sedat Gurel specializes in cutting and coloring. As a former senior education supervisor at L’Oréal for 12 years, he led international trainings and large-scale shows, enhancing the skills of hair professionals worldwide. After managing his own salon for 4 years, Sedat is now based in New York, offering personalized cutting and coloring services that blend creativity with precision.",
  },
  {
    name: "Roy",
    role: "Roy Teeluck | Hairstylist",
    imageSrc: "/roy.webp",
    bio: "Celebrity hairstylist Roy Teeluck is renowned for his expertise in Hair Health. His signature style is characterized by its sexy, organic, and sophisticated elements. Throughout his career, he continuously simplifies and updates his techniques, drawing inspiration from his vast knowledge. As a mentor, he has guided and inspired numerous hairstylists in the beauty industry. Roy's exceptional talent has been acknowledged on various fashion platforms, and he has had the privilege of working with esteemed celebrities including Jane Fonda, Carrie Fisher, and Sigourney Weaver.",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleOpen = (member: TeamMember) => setSelectedMember(member);
  const handleClose = () => setSelectedMember(null);

  return (
    <main className="bg-white text-[#1a1a1a] font-light">
      {/* ===== Hero Title ===== */}
      <section className="pt-28 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-light">Meet Our Team</h1>
      </section>

      {/* ===== Intro Section ===== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12  items-start"> */}
      {/* Text */}
      {/* <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
          <p>
            Abby Haliti is a prominent hair colorist in New York City renowned
            for her exceptional skills and reputation in the beauty industry.
            She has been recognized by leading publications such as{" "}
            <em>Vogue</em>, <em>The New York Times</em>, and <em>InStyle</em>,
            as well as international press.
          </p>
          <p>
            Known for her warm personality and mindful approach to hair
            coloring, Abby was named the best Balayage Expert by <em>Allure</em>{" "}
            magazine’s Directory of Beauty. Born in South-Eastern Europe and
            possessing a diverse education, Abby rapidly gained recognition for
            her unique take on the European hair coloring technique of Balayage.
          </p>
          <p>
            Her expertise in this area has made her a highly sought-after
            colorist in New York City and globally. She is also a leader in the
            color industry, serving as a color director and sharing her
            knowledge by mentoring freelancers globally.
          </p>
        </div> */}

      {/* Abby Image */}
      {/* <div className="flex flex-col items-center text-center">
          <div className="relative w-[350px] h-[420px] overflow-hidden rounded-md">
            <Image
              src="/IMG_61412.webp"
              alt="Abby Haliti"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm mt-2 text-gray-700 italic">
            Abby Haliti | Founder / Color Director
          </p>
        </div> */}
      {/* </section> */}

      {/* ===== Team Members Grid ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center pb-24 mt-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            onClick={() => handleOpen(member)}
            onMouseEnter={() => window.innerWidth > 768 && handleOpen(member)}
            className="flex flex-col items-center text-center space-y-3 cursor-pointer"
          >
            <div className="relative w-[220px] h-[280px] overflow-hidden rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-medium">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== Modal (Popup) ===== */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            // onMouseLeave={handleClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-md max-w-4xl w-full p-8 md:flex md:space-x-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-1 text-gray-500 hover:text-gray-700 text-5xl "
              >
                ×
              </button>

              {/* Image */}
              <div className="relative w-full md:w-[45%] h-[400px] overflow-hidden rounded-md mb-6 md:mb-0">
                <Image
                  src={selectedMember.imageSrc}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-[55%] text-gray-800  h-[100%]  justify-start items-center my-auto">
                <h2 className="text-xl mb-1 font-bold">
                  {selectedMember.role}
                </h2>
                <p className="text-[15px] leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== CTA Section ===== */}
      <section className="bg-[#faf7f2] py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-3">
          Ready for Your Hair Transformation?
        </h2>
        <p className="text-gray-600 text-[15px] mb-6">
          Book a personalized session with our expert team and experience
          elevated hair artistry.
        </p>
        <Link href="/contact">
          <button className="bg-[#a37f2d] text-white px-8 py-2 text-sm tracking-wide hover:bg-[#8d6f25] transition-all">
            CONTACT US
          </button>
        </Link>
      </section>
    </main>
  );
}
