"use client";
import React from "react";
import Link from "next/link";
// import { cn } from "@/lib/utils";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="pt-24 bg-white px-6 md:px-12 lg:px-20">
        <section className="max-w-4xl mx-auto py-16 space-y-8 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-light text-center">
            Privacy Policy
          </h1>

          <div className="space-y-6">
            <p>
              <strong>Last Updated:</strong> February 14, 2019
            </p>

            <p>
              <strong>Abby Haliti Salon, LLC</strong> (“AHS” or “we” or “us”) is
              committed to safeguarding information provided by users of our
              website (“Site”). Providing information to AHS is voluntary. This
              Privacy Policy is designed to clearly explain what information we
              collect, how we use it, and what choices you have regarding your
              information. Your use of the Site constitutes acceptance of this
              Privacy Policy.
            </p>

            <h2 className="text-2xl font-medium">1. Information We Collect</h2>
            <p>
              By accessing the Site and in the course of engaging with AHS, you
              may provide Personal Information such as your name, email address,
              phone number, billing details, and other contact information. We
              also automatically collect certain usage data, such as IP
              addresses, device types, browser and operating system information,
              and pages visited.
            </p>

            <h2 className="text-2xl font-medium">
              2. How We Use Your Personal Information
            </h2>
            <p>
              We use the Personal Information collected for purposes including:
              billing and service provision; communicating with you; improving
              our Site and services; marketing (if permitted); and legal,
              accounting or security needs.
            </p>

            <h2 className="text-2xl font-medium">
              3. Legal Basis for Processing (EEA only)
            </h2>
            <p>
              If you are in the European Economic Area, we process your
              information either based on legitimate interests (e.g., providing
              and improving our services) or where required by contract or law.
            </p>

            <h2 className="text-2xl font-medium">4. Rights of Individuals</h2>
            <p>
              You may have the right to access, correct, delete, or request
              portability of your Personal Information, restrict processing, or
              object to certain use of your information. To exercise these
              rights, please contact us via our{" "}
              <Link href="/contact">
                <b className="text-[#b38b4d] hover:underline">Contact</b>
              </Link>{" "}
              page.
            </p>

            <h2 className="text-2xl font-medium">5. Information Security</h2>
            <p>
              We take reasonable technical and organizational measures to
              protect your Personal Information from unauthorized access, use,
              disclosure, alteration or destruction.
            </p>

            <h2 className="text-2xl font-medium">
              6. Cookies and Tracking Technologies
            </h2>
            <p>
              Our Site uses cookies and similar technologies to enhance your
              browsing experience, analyze usage and support marketing
              activities. You may set your browser to refuse cookies but some
              features of the Site may not work properly.
            </p>

            <h2 className="text-2xl font-medium">
              7. Third-Party Links & Services
            </h2>
            <p>
              Our Site may contain links to third-party websites or services.
              Once you leave our Site, we are not responsible for the privacy
              practices of those external sites.
            </p>

            <h2 className="text-2xl font-medium">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy at any time. The updated version
              will be posted on this page with a revised “Last Updated” date.
            </p>

            <h2 className="text-2xl font-medium">9. Contact Information</h2>
            <p>
              If you have questions or concerns about how your data is processed
              or wish to exercise your rights, please contact us via our{" "}
              <Link href="/contact">
                <b className="text-[#b38b4d] hover:underline">Contact</b>
              </Link>{" "}
              page or by emailing{" "}
              <a
                href="mailto:info@abbyhaliti.com"
                className="text-[#b38b4d] hover:underline"
              >
                info@abbyhaliti.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
