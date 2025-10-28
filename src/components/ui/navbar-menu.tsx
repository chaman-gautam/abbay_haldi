"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ add at top if not already imported

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const linkMap: Record<string, string> = {
    ABOUT: "/about",
    CONTACT: "/contact",
    PRESS: "/press",
    "COLOR STUDIO": "/colorstudio/team",
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <Link href={linkMap[item] || "#"}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] text-sm hover:text-[#A37F2D]"
        >
          {item}
        </motion.p>
      </Link>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          //   transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                // transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[#ffffffba] backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 text-black"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent  shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {/* dark:bg-black dark:border-white/[0.2] */}
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-sm font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className=" text-black  hover:text-[#A37F2D]">
      {children}
    </a>
  );
};
