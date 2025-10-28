// "use client";
// import React from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";

// export default function ShadowDay() {
//   return (
//     <>
//       <main className="pt-20 bg-white">
//         {/* ===== Hero / Banner for Shadow Day ===== */}
//         <section className="relative w-full h-[50vh]">
//           <Image
//             src="/hero-bar.jpg"
//             alt="Shadow Day with Abby Haliti"
//             fill
//             className="object-cover object-center"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
//             <h1 className="text-3xl md:text-4xl font-light">
//               Shadow Day with Master Colorist Abby Haliti
//             </h1>
//             <p className="mt-4 text-lg max-w-xl">
//               Join Abby for an immersive day learning her signature “3C”
//               approach: Consult, Create, Complete.
//             </p>
//           </div>
//         </section>

//         {/* ===== Content Section ===== */}
//         <section className="py-16 px-6 md:px-12 lg:px-20">
//           <div className="max-w-3xl mx-auto space-y-8 text-gray-800">
//             <h2 className="text-2xl font-medium text-center">
//               Consult, Create, Complete
//             </h2>

//             <p>
//               Join Master Colorist Abby Haliti for an immersive shadow day
//               experience where you’ll dive deep into the art of hair color
//               through her signature “3C” approach: Consult, Create, Complete.
//             </p>

//             <div className="space-y-4">
//               <strong>Consult:</strong> Begin the day by observing Abby’s expert
//               client consultations. Learn how to listen attentively, understand
//               client needs, and translate their vision into a clear, actionable
//               plan. Discover how Abby manages expectations and ensures that each
//               client feels confident and understood.
//             </div>

//             <div className="space-y-4">
//               <strong>Create:</strong> Watch as Abby brings the consultation
//               plan to life. Observe her meticulous techniques in European French
//               balayage, color formulation, and application. This hands-on
//               segment allows you to see how creativity and precision come
//               together to produce stunning, natural-looking results.
//             </div>

//             <div className="space-y-4">
//               <strong>Complete:</strong> Follow through to the final stage,
//               where Abby refines and completes the look. Learn the importance of
//               finishing touches, from toning to styling, ensuring that every
//               client leaves the salon with a polished, flawless result.
//             </div>

//             <h3 className="mt-10 text-xl font-semibold">What to Expect</h3>
//             <p>
//               Throughout the day, you’ll have the opportunity to engage in Q&A
//               sessions, gain valuable insights, and receive personalized advice
//               from Abby herself.
//             </p>

//             <h3 className="mt-8 text-xl font-semibold">
//               Class Schedule & Pricing
//             </h3>

//             <p>
//               <strong>Time:</strong> 9:00 AM – 4:00 PM
//               <br />
//               <strong>Pricing:</strong> $1,500
//             </p>

//             <div className="mt-8 text-center">
//               <a
//                 href="/contact"
//                 className="inline-block px-6 py-3 bg-[#b38b4d] text-white uppercase text-sm tracking-wide hover:bg-[#a07a3f] transition"
//               >
//                 Enroll / Contact Us
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";

export default function ShadowDay() {
  return (
    <>
      <main className="pt-20 bg-white">
        {/* ===== Hero / Banner ===== */}
        <section className="relative w-full h-[40vh]">
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-black px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-light">
              Shadow Day with Master Colorist Abby Haliti
            </h1>
            <p className="mt-12 text-sm max-w-xl text-[#a37f2d]">
              Consult, Create, Complete The Three-Step Color Mastery
            </p>
          </div>
        </section>

        {/* ===== 3C Section ===== */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
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
            <div className="md:w-1/2">
              <Image
                src="/IMG_6141.jpeg"
                alt="Abby Haliti"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-gray-800">
              <h3 className="text-xl font-semibold">Class Schedule:</h3>
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
