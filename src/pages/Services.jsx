import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollingGallery from "../components/ScrollingGallery";
import { Link } from 'react-router-dom';
import ServicesHero from "../components/ServicesHero";
import PageHero from "../components/CommonHero";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <>

      <PageHero
        title="Professional Property Services You Can Count On"
        subtitle="At LoneStar Property Management, we take pride in delivering reliable, top-tier maintenance and management services across Texas. Your property is our priority."
        ctaLabel="Get a Free Quote"
        ctaLink="/contact"
        image="/img/lspm-header2.webp"
      />
      <ServicesSection />
    </>
  );
};

export default Services;
