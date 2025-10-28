"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsPage() {
  return (
    <>
      {/* <Navbar /> */}

      <motion.main
        className="pt-24 bg-white px-6 md:px-12 lg:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <section className="max-w-4xl mx-auto py-16 space-y-8 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-light text-center">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              <strong>Effective Date:</strong> February 14, 2019
            </p>

            <p>
              <strong>Abby Haliti Salon, LLC</strong> (“AHS”, “we”, “us”)
              welcomes you to our website and associated sites (collectively,
              “the Site”). By accessing, browsing, or using the Site you agree
              to comply with and be bound by these Terms of Use. If you do not
              agree, please exit the Site immediately.
              :contentReference[oaicite:1]
              {/* {(index = 1)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              1. Acceptance of Terms of Use
            </h2>
            <p>
              These Terms of Use apply to the Site and all associated services
              and content. AHS may revise these Terms at any time without
              notice; continuing use of the Site after such changes constitutes
              acceptance of the new Terms. :contentReference[oaicite:2]
              {/* {(index = 2)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              2. Ownership of Site Content
            </h2>
            <p>
              All text, graphics, photographs, trademarks, logos and artwork
              (collectively, “Content”), unless otherwise stated, are
              controlled, licensed or owned by AHS. No Content may be
              reproduced, republished or transmitted without our express written
              permission. :contentReference[oaicite:3]
              {/* {(index = 3)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">3. Privacy</h2>
            <p>
              Your use of the Site is subject to our{" "}
              <Link href="/privacy">
                <b className="text-[#b38b4d] hover:underline">Privacy Policy</b>
              </Link>
              , which is incorporated by reference. By using the Site you
              acknowledge that internet transmissions may not be fully secure.
              :contentReference[oaicite:4]
              {/* {(index = 4)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              4. Accounts, Passwords & Security
            </h2>
            <p>
              Certain access to features may require setting up an account. You
              are responsible for maintaining the confidentiality of your
              account information and for all activity under your account. AHS
              is not liable for loss or damage resulting from your failure to
              keep your login information secure. :contentReference[oaicite:5]
              {/* {(index = 5)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              5. Acceptable Use Policy
            </h2>
            <p>
              You agree to use the Site only for lawful, proper purposes and to
              comply with all laws. You will not interfere with the Site’s
              operations or attempt unauthorized access to systems or data.
              :contentReference[oaicite:6]
              {/* {(index = 6)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              6. Links to Other Sites & Third-Party Services
            </h2>
            <p>
              The Site may include links to external websites not controlled by
              AHS. AHS is not responsible for their content or privacy practices
              when you follow such links. :contentReference[oaicite:7]
              {/* {(index = 7)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              7. Limitation of Liability
            </h2>
            <p>
              Except where prohibited by law, AHS shall not be liable for
              indirect, incidental, or consequential damages arising out of your
              use of the Site. The maximum liability will be the greater of the
              fees paid to AHS for the services or US $100.00.
              :contentReference[oaicite:8]
              {/* {(index = 8)} */}
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              8. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms are governed by the laws of the State of New Jersey
              and you agree that exclusive jurisdiction lies with the courts in
              New Jersey. :contentReference[oaicite:9]
              {/* {(index = 9)} */}
            </p>

            <p className="pt-8">
              If you have questions about these Terms, you may contact us via
              our{" "}
              <Link href="/contact">
                <b className="text-[#b38b4d] hover:underline">Contact</b>
              </Link>{" "}
              page.
            </p>
          </div>
        </section>
      </motion.main>

      {/* <Footer /> */}
    </>
  );
}
