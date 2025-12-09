// import Image from "next/image";
import AboutIntroSection from "@/components/AboutIntroSection";
import AboutPage from "./about/page";
// import PressPage from "./press/page";
export default function Home() {
  return (
    <>
      <div className="text-black mt-12">
        <AboutIntroSection />
        {/* <AboutPage /> */}

        {/* <PressPage /> */}
      </div>
    </>
  );
}
