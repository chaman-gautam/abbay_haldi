// "use client";
// import React from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// function Footer({ className }: { className?: string }) {
//   const year = new Date().getFullYear();

//   return (
//     <footer
//       className={cn(
//         "bg-white text-gray-700 mt-16 w-full border-t border-gray-400 focus:outline-none",
//         className
//       )}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-10 flex  items-start justify-between">
//         {/* Newsletter */}
//         <div className="w-full max-w-md">
//           <p className=" text-black text-xl mb-2">
//             Subscribe to Our Newsletter.
//           </p>
//           <p className="text-sm">
//             Stay updated with Abby's latest news, offers, and styling tips.
//           </p>
//           <form
//             action="#"
//             className="flex  flex-col space-x-2"
//             // You may hook up your API route here
//           >
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="flex-grow px-3 py-2 border-b border-gray-500 focus:outline-none text-sm w-[90%] mt-2"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-white text-black text-sm uppercase w-[90%] mt-2 cursor-pointer border-1"
//             >
//               Subscribe Now
//             </button>
//           </form>
//         </div>
//         {/* Top links row */}
//         <div className="flex flex-wrap flex-col justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider">
//           <p className=" text-black text-[1rem]">Quick Links</p>
//           <Link href="/terms">Terms & Conditions</Link>
//           <Link href="/privacy">Privacy Policy</Link>
//           <Link href="/contact">Contact Us</Link>
//         </div>

//         {/* Social icons */}
//         <div className="flex space-x-4 flex-col">
//           <p className="text-black text-[1rem]">Follow Us</p>
//           <Link
//             href="https://www.facebook.com/abbyhaliti"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex "
//           >
//             {/* <svg
//               className="w-5 h-5 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             > */}
//             {/* Facebook SVG path */}
//             {/* <path d="M22 12.07C22 6.56 17.52 2 12 2S2 6.56 2 12.07c0 5 3.66 9.14 8.44 9.93v-7.04H8.41v-2.9h2.03V9.79c0-2 1.2-3.1 3.03-3.1.88 0 1.8.16 1.8.16v1.98h-1.02c-1.01 0-1.32.63-1.32 1.27v1.54h2.24l-.36 2.9h-1.88v7.04C18.34 21.21 22 17.07 22 12.07z" />
//             </svg> */}
//             Facebook
//           </Link>
//           <Link
//             href="https://www.instagram.com/abbyhaliti"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex "
//           >
//             {/* <svg
//               className="w-5 h-5 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             > */}
//             {/* Instagram SVG path */}
//             {/* <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.5 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5c0-.414.336-.75.75-.75h1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
//             </svg> */}
//             Instagram
//           </Link>
//           <Link
//             href="https://twitter.com/abbyhaliti"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex "
//           >
//             {/* <svg
//               className="w-5 h-5 mr-2"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             > */}
//             {/* Twitter SVG path */}
//             {/* <path d="M8 19c11 0 17-9.25 17-17v-.78A12.32 12.32 0 0 0 25 1.4a12.23 12.23 0 0 1-3.5.96A6.14 6.14 0 0 0 24.3.3a12.44 12.44 0 0 1-3.9 1.5A6.13 6.13 0 0 0 16.5 0a6.14 6.14 0 0 0-6.13 6.13c0 .48.06.95.16 1.4A17.4 17.4 0 0 1 2.2 1.2a6.14 6.14 0 0 0 1.9 8.2 6.1 6.1 0 0 1-2.78-.77v.08a6.14 6.14 0 0 0 4.91 6 6.1 6.1 0 0 1-2.76.1A6.14 6.14 0 0 0 9 17.9a12.3 12.3 0 0 1-9.1 2.5A17.4 17.4 0 0 0 8 19z" />
//             </svg> */}
//             Twitter
//           </Link>
//         </div>
//       </div>
//       {/* Copyright */}
//       <div className="text-xs text-gray-500 max-w-5xl mx-auto px-6 py-4 flex  items-center justify-center ">
//         © Abby Haliti 2025. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please fill in your email first.");
      return;
    }

    // Optional: simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error if valid
    setEmail(""); // Optional: reset input after success
    // You can connect your API call here
  };
  return (
    <footer
      className={cn(
        "bg-white text-gray-700  w-full border-t border-gray-400 focus:outline-none",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Newsletter */}
        {/* <div className="w-full md:max-w-md">
          <p className="text-black text-lg md:text-xl mb-2 font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with Abby’s latest news, offers, and styling tips.
          </p>
          <form action="#" className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 border-b border-gray-500 focus:outline-none text-sm w-full placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-sm uppercase w-full md:w-auto hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div> */}

        <div className="w-full md:max-w-md">
          <p className="text-black text-lg md:text-xl mb-2 font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with Abby’s latest news, offers, and styling tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`px-3 py-2 border-b focus:outline-none text-sm w-full placeholder-gray-500 ${
                error ? "border-red-500" : "border-gray-500"
              }`}
            />

            {/* Inline red error text */}
            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-sm uppercase w-full md:w-auto hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-xs uppercase tracking-wider">
          <p className="text-black text-base md:text-[1rem] font-semibold mb-2">
            Quick Links
          </p>
          <div className="flex flex-col space-y-2 text-gray-600">
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <p className="text-black text-base md:text-[1rem] font-semibold mb-2">
            Follow Us
          </p>
          <div className="flex flex-row md:flex-col gap-4 text-gray-600 text-sm">
            <Link
              href="https://www.facebook.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com/abbyhaliti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-xs text-gray-500 border-t border-gray-300 mt-4">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
          <span>© Abby Haliti {year}. All rights reserved.</span>
          <span className="text-gray-400">
            Made with ❤️ by Team{" "}
            <Link
              href="https://diwconsultix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              DiwConsultix
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
