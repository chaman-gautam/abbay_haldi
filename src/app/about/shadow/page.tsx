"use client";
import React from "react";
import Image from "next/image";

export default function ShadowDay() {
  return (
    <>
      <main className="pt-20 bg-white">
        {/* ===== Hero / Banner ===== */}
        <section className="relative w-full h-[15vh] ">
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-black px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-light">
              Shadow Day with Master Colorist Abby Haliti
            </h1>
            <p className="mt-4 text-sm max-w-xl text-[#a37f2d]">
              Consult, Create, Complete The Three-Step Color Mastery
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center my-10">
          <div className="md:w-1/4 ">
            <Image
              src="/IMG_6133.jpeg"
              alt="Abby Haliti"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
        {/* ===== 3C Section ===== */}
        <section className="py-4 pb-8 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
            <div className="border rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="font-semibold mb-2">Consult</h3>
              <p className="text-sm">
                Begin the day by observing Abby's expert client consultations.
                Learn how to listen attentively, understand client needs, and
                translate their vision into a clear, actionable plan.
              </p>
            </div>

            <div className="border rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold mb-2">Create</h3>
              <p className="text-sm">
                Watch as Abby brings the consultation plan to life. Observe her
                techniques in balayage, formulation, and application to create
                natural-looking results.
              </p>
            </div>

            <div className="border rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-4">✔️</div>
              <h3 className="font-semibold mb-2">Complete</h3>
              <p className="text-sm">
                Follow through to the final stage, where Abby refines and
                completes the look, ensuring a polished, flawless result.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Image + Schedule ===== */}
        <section className="py-8 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* <div className="md:w-1/3">
              <Image
                src="/IMG_6141.jpeg"
                alt="Abby Haliti"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div> */}
            <div className="md:w-1/2 space-y-4 text-gray-800">
              <h2 className="text-xl font-semibold">Class Schedule:</h2>
              <p>
                <strong>Time:</strong> 9:00 AM – 4:00 PM
              </p>
              <p>
                The class begins at 9:00 AM and concludes at 4:00 PM, providing
                a full day of immersive learning and hands-on experience with
                Abby Haliti.
              </p>
              <p>
                <strong>Shadow Day Pricing:</strong> $1,500
              </p>
            </div>
          </div>
        </section>

        {/* ===== Call to Action ===== */}
        <section className="py-16 bg-gray-100 text-center text-black">
          <h2 className="text-2xl font-medium mb-4">
            Ready for Your Hair Transformation?
          </h2>
          <p className="mb-6">
            Book a personalized session with our expert team and experience
            elevated hair artistry.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 border border-[#b38b4d] text-[#b38b4d] uppercase text-sm tracking-wide rounded hover:bg-[#b38b4d] hover:text-white transition"
          >
            Contact Us
          </a>
        </section>
      </main>
    </>
  );
}
