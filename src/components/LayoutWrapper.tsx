"use client";

import { usePathname } from "next/navigation";
import BookingWidget from "@/components/BookingWidget";
import Navbar from "./Navbar";
import Footer from "./Footer";
type Props = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();

  // For admin pages, render only the admin layout and content.
  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  // For public pages, render the normal site plus booking widget.
  return (
    <>
      {" "}
      <Navbar />
      {children}
      <BookingWidget />
      <Footer />
    </>
  );
}
