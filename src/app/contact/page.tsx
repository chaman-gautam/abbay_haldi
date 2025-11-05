"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 bg-white">
        {/* ===== Hero / Banner ===== */}
        <section className="pt-16 text-center text-black">
          <h1 className="text-3xl md:text-4xl font-light">Meet Our Team</h1>
        </section>

        {/* ===== Contact Form + Address Section ===== */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Address */}
            <div className="space-y-6 text-gray-800">
              <h2 className="text-2xl font-semibold">Visit Us</h2>
              <p>
                130 E 65th Street,
                <br />
                New York, NY 10065
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@abbyhaliti.com"
                  className="text-[#b38b4d] hover:underline"
                >
                  info@abbyhaliti.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:212-888-2221"
                  className="text-[#b38b4d] hover:underline"
                >
                  212-888-2221
                </a>
              </p>
              <p>
                Text only:{" "}
                <a
                  href="tel:917-535-1909"
                  className="text-[#b38b4d] hover:underline"
                >
                  1 (917)-535-1909
                </a>
              </p>
            </div>

            {/* Right Column - Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full text-gray-700"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#b38b4d]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#b38b4d]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#b38b4d]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#b38b4d]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#b38b4d]"
              />
              <button
                type="submit"
                className="bg-[#b38b4d] text-white px-8 py-3 text-sm font-medium hover:bg-[#a07a3f] transition-colors"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </section>

        {/* ===== Google Map Section ===== */}
        <section className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.617845943134!2d-73.96718352404723!3d40.76785587138448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e44f2571cf%3A0x9baf6b5c9e16f3e2!2s130%20E%2065th%20St%2C%20New%20York%2C%20NY%2010065%2C%20USA!5e0!3m2!1sen!2sin!4v1730057261024!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
