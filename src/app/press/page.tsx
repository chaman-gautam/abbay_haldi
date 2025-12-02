"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pressData = [
  {
    img: "/MargotRobbie.webp",
    title: "Shadow Roots: How to Get Lived-In, Low-Maintenance Hair Color",
    source: "Allure",
    link: "https://www.instyle.com/highlights-for-gray-hair-5410274",
  },
  {
    img: "/download.webp",
    title:
      "Celebrity Hair Colorist Abby Haliti On Why Balayage Is Better Than Ever",
    source: "Vogue",
    link: "https://www.voguearabia.com/",
  },
  {
    img: "/IMG_6692.webp",
    title: "Hailey Bieber in the pink",
    source: "Glamour",
    link: "#",
  },
  {
    img: "/French.webp",
    title:
      "A French Colorist Says *This* Is Every Euro Girl's Secret to Flawless Hair Color",
    source: "Harper’s Bazaar",
    link: "https://www.whowhatwear.com/european-method-hair-color",
  },
  {
    img: "/PearlBlonde.webp",
    title: "Pearl Blonde Is The Most Luminescent Hair Color Trend",
    source: "InStyle",
    link: "https://www.bustle.com/beauty/pearl-blonde-hair-color",
  },
  {
    img: "/HairPerfume.webp",
    title: "Hair Perfumes are an Escape Latch to Luxury",
    source: "Elle",
    link: "https://coveteur.com/best-hair-perfumes-fragrances",
  },
  {
    img: "/AllureCreatorsNetwork.webp",
    title: "Allure Magazine Introducing…the Allure Creators Network",
    source: "Byrdie",
    link: "https://www.allure.com/story/allure-creators-network",
  },
  {
    img: "/5SurprisingTipsForDisguisingGrayHairsFromHighlightsToSpotTreatments.webp",
    title:
      "5 Surprising Tips For Disguising Gray Hairs, From Highlights To Spot Treatments",
    source: "NewBeauty",
    link: "https://www.mindbodygreen.com/lifestyle",
  },
  {
    img: "/TheHaircareHeroesOliviaReliesOn.webp",
    title: "The Haircare Heroes Olivia Relies On",
    source: "Refinery29",
    link: "https://shopmy.us/oliviapalermo/blogs/the-edit/olivia-palermo-haircare-routine-beauty-products",
  },
  {
    img: "/DryShampooCanCauseDullLifelessHairAccordingToThisExpert.webp",
    title:
      "Dry Shampoo Can Cause Dull, Lifeless Hair, According To This Expert",
    source: "Cosmopolitan",
    link: "https://www.mindbodygreen.com/articles/dry-shampoo-can-cause-dull-hair",
  },
  {
    img: "/hair.webp",
    title: "15 Copper Hair Color Ideas You’ll Want to Copy ASAP",
    source: "Marie Claire",
    link: "https://www.glamour.com/gallery/copper-hair-color",
  },
  {
    img: "/1-launchmetrics-hobeika-hc-bks-f23-036-64e3d062bf9ed (1).webp",
    title: "The 13 Best Hard Water Shampoos for Healthy, Shiny Hair",
    source: "Grazia",
    link: "https://www.elle.com/beauty/hair/g44839895/best-hard-water-shampoos/",
  },
  {
    img: "/aby.webp",
    title:
      "We’re Quitting Lemon-Juice Highlights, But It’s Not For The Reason You Think",
    source: "People",
    link: "https://www.refinery29.com/en-us/hair-lightener-spray-risk",
  },
  {
    img: "/nylon.webp",
    title: "Summer’s Biggest Hair Trends Channel Dreamy Escapism",
    source: "W Magazine",
    link: "https://www.nylon.com/beauty/summer-2023-hair-trends",
  },
  {
    img: "/blonde.webp",
    title: "The Best Blonde Hair Colors to Try This Second",
    source: "Elle Decor",
    link: "https://www.glamour.com/gallery/blonde-hair-colors",
  },
  {
    img: "/BiggestHairColor.webp",
    title: "60 Best Fall Hair Colors and Trends to Try for Autumn 2023",
    source: "The Cut",
    link: "https://www.cosmopolitan.com/style-beauty/beauty/g62061746/fall-hair-colors-2024/",
  },
  {
    img: "/AGuideToHair.webp",
    title:
      "A Guide To Hair Contouring: How To Strategically Highlight Different Face Shapes",
    source: "Forbes",
    link: "https://www.mindbodygreen.com/articles/guide-to-hair-contouring-expert-tips-before-and-after-results",
  },
  {
    img: "/chlorine-shampoo-649f1b704c5d6.webp",
    title:
      "The 10 Best Chlorine Shampoos to Revive Post-Swim Strands, According to Hairstylists",
    source: "New York Times",
    link: "https://www.prevention.com/beauty/hair/g44388640/best-shampoo-for-chlorine-removal/",
  },
  {
    img: "/blackhair.webp",
    title: "20 Black Hair Color Ideas to Embrace Your Dark Side",
    source: "Vogue",
    link: "https://www.glamour.com/gallery/black-hair-colors",
  },
  {
    img: "/fine-hair-tips-1200x900.webp",
    title:
      "Everything you need to know about fine hair, according to this expert",
    source: "Allure",
    link: "https://www.cosmopolitanme.com/beauty/fine-hair-tips-from-a-pro",
  },
  {
    img: "/press39.webp",
    title:
      "Highlights Are Back A Few Stealth Streaks Can Change Your Look (And Your Life)",
    source: "Glamour",
    link: "https://www.vogue.com/article/blonde-highlights-hair-color-balayage",
  },
  {
    img: "/40.webp",
    title: "Best Salons for Hair Color",
    source: "Harper’s Bazaar",
    link: "https://www.allure.com/story/color",
  },
  {
    img: "/41.webp",
    title: "Why Olivia Palermo Has Exactly 6 Sun-kissed Highlights",
    source: "Refinery29",
    link: "https://www.vogue.com/article/olivia-palermo-highlighted-hair",
  },
  {
    img: "/42.webp",
    title: "Hair Contouring Is Officially a Thing",
    source: "Vogue",
    link: "#",
  },
  {
    img: "/43.webp",
    title: "Her Crowning Glory in a Box",
    source: "Marie Claire",
    link: "https://www.nytimes.com/2013/02/28/fashion/for-more-everyday-women-their-crowning-glory-comes-in-a-box-skin-deep.html",
  },
  {
    img: "/44.webp",
    title:
      "Sombre hair is like ombré's sexy sister, and you're going to LOVE it",
    source: "Grazia",
    link: "https://her.ie/beauty/sombre-hair-new-ombre-420534",
  },
  {
    img: "/45.webp",
    title: "Olivia Palermo's New Haircut Is Unsurprisingly On-Trend",
    source: "Forbes",
    link: "https://www.refinery29.com/en-us/2017/06/158256/olivia-palermo-bob-hair",
  },
  {
    img: "/46.webp",
    title: "Why Your Hair Is Being the Worst This Time of Year",
    source: "Elle",
    link: "#",
  },
  {
    img: "/47.webp",
    title:
      "Olivia Palermo Gets Blond Highlights Before Her Wedding—See Her Lighter Hair Color!",
    source: "W Magazine",
    link: "https://www.eonline.com/news/553164/olivia-palermo-gets-blond-highlights-before-her-wedding-see-her-lighter-hair-color",
  },
  {
    img: "/48.webp",
    title: "Updating the Gold Standard to Platinum",
    source: "Cosmopolitan",
    link: "https://www.nytimes.com/2014/06/26/fashion/white-blonde-hairstyle.html",
  },
  {
    img: "/49.webp",
    title:
      "These Will Be the Most Popular Hair Colors of 2018, According to Top Stylists",
    source: "InStyle",
    link: "https://www.thefashionspot.com/beauty/784263-popular-hair-color-trends-2018/",
  },
  {
    img: "/50.webp",
    title: "19 NYC Colorists Who Will Give You The Best Hair Of Your Life",
    source: "Allure",
    link: "https://www.refinery29.com/en-us/best-hair-colorists-nyc",
  },
  {
    img: "/51.webp",
    title:
      "So simpel und so elegant: Warum wir jetzt den Olivia Palermo Cut wollen",
    source: "Vogue",
    link: "https://www.instyle.de/beauty/olivia-palermo-cut",
  },
  {
    img: "/52.webp",
    title: "Olivia, Alexa, Chiara, Kristina... ¡bellezas con sello propio!",
    source: "People",
    link: "https://www.hola.com/belleza/2016061486273/it-girls-senas-identidad/",
  },
  {
    img: "/53.webp",
    title:
      "This is why Olivia Palermo's hair always looks so glossy and healthy",
    source: "Byrdie",
    link: "https://www.glamourmagazine.co.uk/gallery/sombre-hair",
  },
  {
    img: "/54.webp",
    title: "5 Ways To Repair Your Hair From Summer Elements",
    source: "Elle",
    link: "https://shopmy.us/oliviapalermo/blogs/the-edit/summer-hair-care-tips",
  },
  {
    img: "/55.webp",
    title: "Aishti",
    source: "Vogue Italia",
    link: "https://issuu.com/aishti/docs/amag94",
  },
  {
    img: "/56.webp",
    title: "Natural-Looking Highlights?",
    source: "Glamour UK",
    link: "#",
  },
  {
    img: "/58.webp",
    title:
      "HOW TO LIGHTEN HAIR WITHOUT DAMAGE (AND WHAT TO DO IF IT'S TOO LATE)",
    source: "Tatler",
    link: "https://www.foxnews.com/lifestyle/how-to-lighten-hair-without-damage-and-what-to-do-if-its-too-late",
  },
  {
    img: "/59.webp",
    title: "OLIVIA PALERMO MAY HAVE THE WORLD'S MOST PRECISE HAIR COLOUR",
    source: "Vogue",
    link: "https://www.cosmopolitan.com/uk/beauty-hair/celebrity-hair-makeup/a26415/olivia-palermo-hair-six-highlights/",
  },
  {
    img: "/60.webp",
    title: "OLIVIA PALERMO SHARES HER SECRET TO GORGEOUS HAIR",
    source: "NewBeauty",
    link: "https://www.hellomagazine.com/healthandbeauty/hair/2016042531097/olivia-palermo-shares-her-secret-for-healthy-looking-hair/",
  },
  {
    img: "/61.webp",
    title: "OLIVIA PALERMO’S BEAUTY SECRETS",
    source: "Marie Claire",
    link: "https://www.marieclaire.co.uk/beauty/olivia-palermo-beauty-secrets-10412",
  },
  {
    img: "/62.webp",
    title: "OLIVIA PALERMO’S DAILY SKIN, HAIR AND MAKEUP HACKS",
    source: "Harper’s Bazaar",
    link: "https://www.net-a-porter.com/en-us/porter/article-25ad120ac3890729/beauty/beauty-memo/olivia-palermo-beauty",
  },
  {
    img: "/63.webp",
    title:
      "ДОСТИГЛИ ПРОСВЕТЛЕНИЯ! КАК ЗАБОТЯТСЯ О ЦВЕТЕ ВОЛОС ЗВЕЗДЫ-БЛОНДИНКИ",
    source: "Elle UK",
    link: "https://www.wmj.ru/krasota/pricheski/dostigli-prosvetleniya-kak-zabotyatsya-o-tsvete-volos-zvezdy-blondinki.htm",
  },
  {
    img: "/64.webp",
    title: "POUR REPRENDRE DES COULEURS",
    source: "Forbes",
    link: "https://www.lorientlejour.com/article/1098019/pour-reprendre-des-couleurs.html",
  },
  {
    img: "/65.webp",
    title:
      "THE WOMAN’S INSTANT COLOR-CHANGING HAIR TRICK HAS THE INTERNET OBSESSED",
    source: "Vogue",
    link: "https://www.newbeauty.com/how-to-get-two-toned-split-hair-color/",
  },
  {
    img: "/66.webp",
    title:
      "THESE WILL BE THE MOST POPULAR HAIR COLORS OF 2018, ACCORDING TO TOP STYLISTS",
    source: "Allure",
    link: "https://www.thefashionspot.com/beauty/784263-popular-hair-color-trends-2018/#/slide/1",
  },
  {
    img: "/67.webp",
    title:
      "UNSER LIEBSTER TREND-CUT DES SOMMERS BEKOMMT JETZT EIN HERBST-UPDATE",
    source: "InStyle",
    link: "https://www.instyle.de/beauty/olivia-palermo-trend-frisur",
  },
  {
    img: "/68.webp",
    title: "Signature color transformations in 2025",
    source: "Cosmopolitan",
    link: "https://www.instyle.de/beauty/olivia-palermo-trend-frisur",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PressPage() {
  return (
    <main className=" min-h-screen mt-20">
      {/* ===== Hero Header ===== */}
      <section className=" w-full flex items-center justify-center ">
        <h1 className="text-3xl md:text-3xl font-semibold tracking-wide uppercase pt-8 text-black">
          Press
        </h1>
      </section>

      {/* ===== Press Grid Section ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, staggerChildren: 0.12 }}
        >
          {pressData.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col group cursor-pointer border-2  "
              variants={fadeUp}
            >
              <Link
                href={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-[#a37f2d] hover:text-[#b6923f] text-xs mt-2 inline-block transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-[500px] overflow-hidden rounded-none -mt-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>

                {/* Details */}
                <div className="pt-5 px-2 text-center">
                  <p className="text-base font-light leading-snug text-[#1a1a1a] group-hover:text-[#a37f2d] transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                    {item.source}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a37f2d] hover:text-[#b6923f] text-xs mt-2 inline-block transition-colors duration-300"
                  >
                    Read more →
                  </Link>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
