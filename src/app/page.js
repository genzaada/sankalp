import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Submission from "../components/Submission";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Registration from "../components/Registration";
import Speakers from "../components/Speakers";
import Committee from "../components/Committee";
import Tourism from "../components/Tourism";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingFAQButton from "../components/FloatingFAQButton";
import FadeUp from "../components/ui/FadeUp";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content-flow">
        <Hero />
        <SectionDivider />
        <FadeUp><Overview /></FadeUp>
        <FadeUp><Submission /></FadeUp>
        <FadeUp><Tracks /></FadeUp>
        <FadeUp><Timeline /></FadeUp>
        <FadeUp><Registration /></FadeUp>
        <FadeUp><Speakers /></FadeUp>
        <FadeUp><Committee /></FadeUp>
        <FadeUp><Tourism /></FadeUp>
        <FadeUp><Sponsors /></FadeUp>
        <FadeUp><Contact /></FadeUp>
      </main>
      <Footer />
      <FloatingFAQButton />
    </>
  );
}

