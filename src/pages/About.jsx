import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import AboutHero from "../components/AboutHero";
import PageHero from "../components/CommonHero";
import AboutSection from "../components/AboutSection";
import QualitySection from "../components/QualitySection";
import MissionSection from "../components/MissionSection";

const About = () => {
  return (
    <>
      <PageHero
        title="The Lone Star Difference"
        subtitle="At LoneStar Property Management, we take pride in providing reliable, top-quality property solutions across Texas. Learn more about our mission, values, and the people who make it all happen."
        ctaLabel="Get a Free Quote"
        ctaLink="/contact"
        image="/img/lspm-header2.webp"
      />
      <AboutSection />
      <QualitySection />
      <MissionSection />
    </>
  );
};

export default About;
