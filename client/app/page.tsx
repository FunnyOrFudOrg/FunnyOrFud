"use client";

import FeaturesSectionDemo from "@/components/Landing/Features";
import Footer from "@/components/Landing/Footer";
import AnimatedHeading from "@/components/Landing/Heading";
import HeroSection from "@/components/Landing/HeroSection";
import TimelineDemo from "@/components/Landing/Timeline";
import Spline from "@splinetool/react-spline";
import React from "react";

const Page = () => {
  return (
    <div>
      <AnimatedHeading />
      <HeroSection />
      <FeaturesSectionDemo />
      <TimelineDemo />
      <Footer />
    </div>
  );
};

export default Page;
