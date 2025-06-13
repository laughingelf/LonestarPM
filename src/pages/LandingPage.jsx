import Navbar from "../components/Navbar"
import ScrollingGallery from "../components/ScrollingGallery"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';
import HeroSection from "../components/Hero";
import { ArrowRight } from 'lucide-react';
import LandingInfo from "../components/LandingInfo";
import WhyWeDoSection from "../components/WhyWeDo";
import CTAButton from "../components/Cta";

function LandingPage() {
    return (
        <div className="mb-18">
            <HeroSection />
            <WhyWeDoSection />
            <ScrollingGallery/>
            <LandingInfo />
            <CTAButton />
        </div>
    )
}

export default LandingPage