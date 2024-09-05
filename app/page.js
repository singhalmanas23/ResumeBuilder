"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/Feature";
import Test from "@/components/Test";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Test/>
      <Footer/>
    </>
  );
}
