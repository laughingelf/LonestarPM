import Navbar from "../components/Navbar"
import ScrollingGallery from "../components/ScrollingGallery"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';
import HeroSection from "../components/Hero";
import { ArrowRight } from 'lucide-react';
import LandingInfo from "../components/LandingInfo";

function LandingPage() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <div>
                <section class=" py-6 px-4 sm:px-6 lg:px-8 bg-gray-300 ">
                    <div className="flex flex-col md:flex-row items-center justify-center  px-4 py-8">
                        {/* Image */}
                        <div id="landing-img">
                            <picture>
                                <source srcSet="/img/mission.webp" type="image/webp" />

                                <img
                                src="/img/mission.jpg" // replace with your image path
                                alt="Mission-img"
                                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-xl border-2 border-black"
                                />
                            </picture>
                        </div>

                        <div>
                            {/* Card */}
                            <div id="landing-card">
                                <h2 className="text-3xl md:text-4xl mb-6">Why We Do What We Do</h2>
                                <p className="text-xl md:text-2xl">
                                At Lone Star Property Maintenance, we take pride in being a family-owned and operated business based in Fort Worth, Texas, 
                                proudly serving DFW and surrounding areas. Built on strong values, hard work, and a commitment to customer satisfaction, 
                                we treat every property like it’s our own—because when you choose Lonestar, you're part of the family.
                                <br /><br />
                                No job is too big or too small—we bring the same attention to detail and professionalism to every project. Whether you're
                                a homeowner looking to refresh your driveway, or a business in need of regular property maintenance, Lone Star Property Maintenance
                                is your one-stop solution.
                                </p>

                                {/* Button */}
                                <div id="landing-btn" className="text-center">
                                    <Link  onClick={() => window.scrollTo(0, 0)} to='/contact' className="text-xl">
                                        <button >
                                            Get a Free Estimate
                                        </button>
                                    </Link>
                                    <Link  onClick={() => window.scrollTo(0, 0)} to='/services' className="text-xl">
                                        <button >
                                            Services
                                        </button>
                                    </Link>
                                </div>
                            </div>
                           


                        </div>
                    </div>


                </section>
                <ScrollingGallery/>
                
                <LandingInfo />

                <div className="flex justify-center ">
                    <Link onClick={() => window.scrollTo(0, 0)}
                    className="mb-8"
                    id="call-button"
                    to="/contact"
                    >
                    Get Your Free Quote
                    </Link>
                </div>

                <section>
                    <div>
                        {/* <div>
                            <ScrollingGallery/>
                        </div> */}
                    </div>
                </section>

            </div>
            <Footer/>
        </>
    )
}

export default LandingPage