"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Accordion = [
  {
    head: " Consultation Policy ",
    description:
      "Your consultation is the first step in crafting your ideal look. During this session, you’ll discuss your hair’s current condition, share your goals, and collaborate with your artist to map out the best path forward for your hair journey.When you book a consultation with Abby Haliti, the consultation fee will be credited toward your service of you schedule an appointment within 7 days of your consultation. Please note: consultations with Abby are non-refundable.We also offer complimentary consultations with our senior colorist.To help us understand your vision, we highly recommend bringing visual references or inspiration photos.",
  },
  {
    head: "Cancellations",
    description:
      "The salon requires any and all cancellations to be made at least 24 hours in advance prior to the scheduled appointment. Any cancellation after this time will not be accepted and result in a charge equal to the reserved service amount. No shows will be charged 100% of the reserved service amount.",
  },
  {
    head: "Adjustments",
    description:
      "After a service is provided and paid for, the customer has a 7-day window from this time to return to the salon for any necessary hair adjustments. Please note that refunds are not provided. Abby Haliti Color Studio policies are presented and provided in the best quality and tradition of excellent servicing for our established and future clientele. By making an appointment with our salon, you understand our policy. Thank you for viewing and supporting our policy requirements.",
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
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl break-keep leading-relaxed font-medium text-center text-black pt-5">
            Color Services
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="relative w-full h-[550px] md:h-[630px] ">
            <Image
              src="/IMG-0631.JPG"
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
              Whether you’re seeking the perfect blonde shade or a seamless
              color transformation, our expert colorists prioritize the
              integrity and longevity of your hair. We use only top-tier
              professional brands like <b>L’Oréal Professionnel</b> and{" "}
              <b>Milbon</b>, known for their advanced technology and gentle
              formulations.
            </p>

            <p className="text-[15px] leading-relaxed mb-4">
              L’Oréal delivers consistent, high-performance color results
              trusted by professionals worldwide, while Milbon’s Japanese
              innovation focuses on low-ammonia, hair-strengthening technology
              that protects and nourishes the hair fiber from within. The
              result: luminous, long-lasting color that feels as healthy as it
              looks.
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
        {[
          {
            title: "French European Balayage",
            desc: "Experience the elegance of French European balayage, where artistry meets natural beauty. Each strand is hand-painted to create a seamless, sun-kissed gradient reminiscent of European summers. This low-maintenance look grows out gracefully, offering understated luxury.This low-maintenance look grows out gracefully, offering understated luxury and lasts beautifully for 3 to 6 months.",
          },
          {
            title: "Color Balance",
            desc: "Revive dull, faded hair with our Color Balance treatment. Strategically applied color enhances your hair’s natural features and creates depth and shine for a multidimensional look.This service is ideal for anyone transitioning to healthier hair or creating a clean canvas for a more refined balayage. It’s especially effective for correcting over-highlighted or oxidized hair, helping to restore balance, tone, and shine. A great option for color correction and hair revival, results can last up to 2–4 months.",
          },
          {
            title: "Signature Hair Contour",
            desc: "Designed to enhance facial structure and skin tone, this technique positions select strands for natural highlights and shadows around the face defining your features with soft dimension.As seen on Vogue-featured style icon Olivia Palermo, this service is the ultimate pick-me-up between full balayage sessions. It refreshes tone, adds shine, and keeps your color looking effortlessly polished. Recommended as a maintenance touch-up, it extends the life of your balayage and lasts up to 2–3 months.",
          },
          {
            title: "Single Process Color",
            desc: "Ideal for covering grays or achieving an even tone, this service applies one consistent shade from root to tip for a refreshed, uniform finish.",
          },
          {
            title: "Non-Ammonia Single Process Color",
            desc: "A gentle, ammonia-free service suitable for all clients, including expectant mothers — delivering rich, vibrant color that’s kind to your hair and scalp.",
          },
          {
            title: "Grey Transformation",
            desc: "Transition gracefully to your natural silver or blend grays for a softer finish. Our expert colorists craft seamless shades that celebrate your individuality with timeless sophistication.",
          },
          {
            title: "Haircutting",
            desc: "Receive a precision cut tailored to your unique style and features. Whether refreshing your look or maintaining your current style, our Senior Stylists ensure every cut enhances your natural beauty.",
          },
        ].map((item, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold tracking-wider mb-2">
              {item.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ====== Accordion Section ====== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          {Accordion.map((item, i) => (
            <details
              key={i}
              className="border-b border-gray-300 py-3 group cursor-pointer"
            >
              <summary className="flex justify-between items-center text-lg font-normal text-[#1a1a1a]">
                {item.head}
                <span className="text-[#a37f2d] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </details>
          ))}
        </div>

        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/unsplash-image-VFZF_pzTVBA.webp"
            alt="Abby Haliti Color Studio"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="bg-[#faf7f2] text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-4">
          Ready for Your Hair Transformation?
        </h2>
        <p className="text-gray-600 mb-6 text-[15px] max-w-xl mx-auto">
          Book a personalized session with our expert team and experience
          elevated hair artistry.
        </p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-transparent border border-[#a37f2d] text-[#a37f2d] hover:bg-[#a37f2d] hover:text-white transition-all duration-300 rounded-md">
            CONTACT US
          </button>
        </Link>
      </section>
    </main>
  );
}
