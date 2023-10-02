import Who from "@/components/Who";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Inter } from "@next/font/google";
import Services from "@/components/Services";

// import Brands from "@/components/Brands";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Video from "@/components/Video";
// import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Who/>
      <Services/>
      {/* <Features /> */}
      {/* <Video />
      <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Pricing />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
