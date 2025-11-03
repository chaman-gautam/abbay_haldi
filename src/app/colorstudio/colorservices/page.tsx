"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Acordion = [
  {
    head: "Consultations",
    description:
      "During the consultation, you'll have the chance to assess your hair's current condition and express your vision for your ideal look. This session serves as the platform for you and your artist to comprehensively discuss every aspect of your hair journey. When you book a consultation with Abby Haliti, the consultation fee will be credited towards your appointment if you book a service within 7 days of your initial visit. Consultations are non-refundable.",
  },
  {
    head: "Cancellations",
    description:
      "The salon requires any and all cancellations to be made at least 24 hours in advance prior to the scheduled appointment. Any cancellation after this time will not be accepted and result in a charge equal to the reserved service amount. No shows will be charged 100% of the reserved service amount.",
  },
  {
    head: "Adjustments",
    description:
      "After a service is provided and paid for, the customer has a 7-day window from this time to return to the salon for any necessary hair adjustments.Please note that refunds are not provided.Abby Haliti Color Studio policies are presented and provided in the best quality and tradition of excellent servicing for our established and future clientele. By making an appointment with our salon, you understand our policy. Thank you for viewing and supporting our policy requirements.",
  },
  {
    head: "Blow Dry",
    description:
      "As a color studio, we offer a quick blow dry with our color services. For a more polished, styled look, please book a separate blow dry appointment.",
  },
];

export default function ColorServicesPage() {
  return (
    <main className="bg-white text-[#1a1a1a] font-light mt-8">
      {/* ====== Hero Section ====== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wide">Color Services</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[420px]">
            <Image
              src="https://source.unsplash.com/random/600x600?hairstylist"
              alt="Abby Haliti Color Studio"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-3">
              European French Balayage & Expert Color Correction
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Welcome to Abby Haliti Color Studio, a serene oasis of beauty and
              tranquility discreetly nestled on the Upper East Side of NYC. Our
              studio offers personalized hair coloring experiences, specializing
              in French Balayage, blonde transformations, and color correction.
              Whether you’re seeking the best blonde shade or a seamless color
              transformation, our expert colorists prioritize the health of your
              hair using top-tier brands like L’Oréal and Davines.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">
              We take immense pride in our holistic approach, devoted to
              enhancing your innate beauty through artistry and expertise. Our
              initial consultation is thoughtfully tailored to understand your
              hair aspirations and guide you toward naturally radiant,
              long-lasting color that keeps your hair’s well-being at the
              forefront.
            </p>
            <p className="text-[15px] leading-relaxed">
              At Abby Haliti Color Studio, we wholeheartedly embrace the “less
              is more” philosophy, prioritizing hair health over extravagant
              transformations.
            </p>
          </div>
        </div>
      </section>

      {/* ====== Services Text Section ====== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20 space-y-10">
        <div>
          <h3 className="text-lg font-medium mb-2">French European Balayage</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Experience the elegance of French European balayage, where artistry
            meets natural beauty. Each strand is hand-painted to create a
            seamless, sun-kissed gradient reminiscent of European summers. This
            low-maintenance look grows out gracefully, offering understated
            luxury.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Color Balance</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Revive dull, faded hair with our Color Balance treatment.
            Strategically applied color enhances your hair’s natural features
            and creates depth and shine for a multidimensional look.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Signature Hair Contour</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Designed to enhance facial structure and skin tone, this technique
            positions select strands for natural highlights and shadows around
            the face — defining your features with soft dimension.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Single Process Color</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Ideal for covering grays or achieving an even tone, this service
            applies one consistent shade from root to tip for a refreshed,
            uniform finish.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">
            Non-Ammonia Single Process Color
          </h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            A gentle, ammonia-free service suitable for all clients, including
            expectant mothers — delivering rich, vibrant color that’s kind to
            your hair and scalp.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Grey Transformation</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Transition gracefully to your natural silver or blend grays for a
            softer finish. Our expert colorists craft seamless shades that
            celebrate your individuality with timeless sophistication.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Haircutting</h3>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Receive a precision cut tailored to your unique style and features.
            Whether refreshing your look or maintaining your current style, our
            Senior Stylists ensure every cut enhances your natural beauty.
          </p>
        </div>
      </section>

      {/* ====== Accordion Section ====== */}
      <div className="flex justify-center item-center max-w-6xl m-auto pb-16">
        <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-4 min-w-[80%]">
          {Acordion.map((item, i) => (
            <details
              key={i}
              className="border-b border-gray-300 py-3 group cursor-pointer"
            >
              <summary className="flex justify-between items-center text-lg font-normal text-[#1a1a1a]">
                {item.head}
                <span className="text-[#a37f2d] text-xl">+</span>
              </summary>
              <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </details>
          ))}
        </section>
        <div className="relative w-full ">
          <Image
            src="https://source.unsplash.com/random/600x600?hairstylist"
            alt="Abby Haliti Color Studio"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* ====== CTA Section ====== */}
      <section className="bg-[#faf7f2] text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Ready for Your Hair Transformation?
        </h2>
        <p className="text-gray-600 mb-6 text-[15px]">
          Book a personalized session with our expert team and experience
          elevated hair artistry.
        </p>
        <button className="px-6 py-3 bg-transparent border border-[#a37f2d] text-[#a37f2d] hover:bg-[#a37f2d] hover:text-white transition-all duration-300">
          CONTACT US
        </button>
      </section>

      {/* ====== Footer Section ====== */}
    </main>
  );
}
