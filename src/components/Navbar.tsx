// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <div
//       className={cn(
//         "fixed top-0   inset-x-0 z-50 flex items-center justify-between bg-[#ffffffba] px-16 py-1 shadow-sm text-black",
//         className
//       )}
//     >
//       {/* ===== Left Menu ===== */}
//       <div className="flex items-center space-x-8 text-sm tracking-wide">
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="ABOUT">
//             {/* <div className="flex flex-col space-y-8 text-sm">
//               <HoveredLink href="/about">ABOUT US</HoveredLink>
//             </div> */}
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/about/shadow">SHADOW DAY</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="COLOR STUDIO">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/colorstudio/team">Team</HoveredLink>
//               <HoveredLink href="/colorstudio/colorservices">
//                 Color Services
//               </HoveredLink>
//               <HoveredLink href="/guest-artist">Guest Artist</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="PRESS"
//           ></MenuItem>
//           <MenuItem
//             setActive={setActive}
//             active={active}
//             item="CONTACT"
//           ></MenuItem>
//         </Menu>
//       </div>

//       {/* ===== Center Logo ===== */}
//       <div className="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
//         <Link href="/" aria-label="Home">
//           <Image
//             src="/logo-wo-ny-nj-2-removebg-preview.webp"
//             alt="Abby Haliti Logo"
//             width={70}
//             height={70}
//             priority
//           />
//         </Link>
//       </div>

//       {/* ===== Right Search + Book Button ===== */}
//       <div className="flex items-center space-x-6 ml-auto">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border-b border-gray-400 focus:outline-none text-sm px-2 py-1 w-32 placeholder-gray-500"
//           />
//         </div>
//         <Link
//           href="https://www.phorest.com/salon/abbyhaliticolorstudio"
//           className="bg-[#a37f2d] text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-[#a07a3f] transition-colors"
//         >
//           Book Now
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { Menu as MenuIcon, X } from "lucide-react"; // icon package

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-[#ffffffba] shadow-sm text-black backdrop-blur-md font-[var(--font-dream)]",
        className
      )}
    >
      {/* Wrapper */}
      <div className="flex items-center justify-between px-6 md:px-16 py-2 font-[var(--font-dream)]">
        {/* ===== Left Menu (Desktop) ===== */}
        <div className="hidden md:flex items-center space-x-8  tracking-wide font-[var(--font-dream)]">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="ABOUT">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/about/shadow">SHADOW DAY</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="COLOR STUDIO">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/colorstudio/team">Team</HoveredLink>
                <HoveredLink href="/colorstudio/colorservices">
                  Color Services
                </HoveredLink>
                <HoveredLink href="/guest-artist">Guest Artist</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="PRESS" />
            <MenuItem setActive={setActive} active={active} item="CONTACT" />
          </Menu>
        </div>

        {/* ===== Center Logo ===== */}
        <div className="flex justify-center items-center">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo-wo-ny-nj-2-removebg-preview.webp"
              alt="Abby Haliti Logo"
              width={60}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* ===== Right Section ===== */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border-b border-gray-400 focus:outline-none text-sm px-2 py-1 w-32 placeholder-gray-500 font-[var(--font-dream)]"
            />
          </div>
          <Link
            href="https://www.phorest.com/salon/abbyhaliticolorstudio"
            className="bg-[#a37f2d] text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-[#a07a3f] transition-colors font-[var(--font-dream)]"
          >
            Book Now
          </Link>
        </div>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* ===== Mobile Menu Dropdown ===== */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 font-[var(--font-dream)]">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
            <Link href="/about/shadow" onClick={() => setMobileOpen(false)}>
              SHADOW DAY
            </Link>

            <details className="group">
              <summary className="cursor-pointer">COLOR STUDIO</summary>
              <div className="pl-4 flex flex-col space-y-2 mt-2 text-gray-700 font-[var(--font-dream)]">
                <Link
                  href="/colorstudio/team"
                  onClick={() => setMobileOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/colorstudio/colorservices"
                  onClick={() => setMobileOpen(false)}
                >
                  Color Services
                </Link>
                <Link href="/guest-artist" onClick={() => setMobileOpen(false)}>
                  Guest Artist
                </Link>
              </div>
            </details>

            <Link href="/press" onClick={() => setMobileOpen(false)}>
              PRESS
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              CONTACT
            </Link>

            <div className="border-t border-gray-200 pt-4 flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Search"
                className="border-b border-gray-400 focus:outline-none text-sm px-2 py-1 w-full placeholder-gray-500"
              />
              <Link
                href="https://www.phorest.com/salon/abbyhaliticolorstudio"
                className="bg-[#a37f2d] text-white text-sm font-medium px-5 py-2 rounded-sm text-center hover:bg-[#a07a3f] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
