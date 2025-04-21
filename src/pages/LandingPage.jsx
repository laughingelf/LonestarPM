import Navbar from "../components/Navbar"
import ScrollingGallery from "../components/ScrollingGallery"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';
import HeroSection from "../components/Hero";

function LandingPage() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <div>
                <section class=" py-6 px-4 sm:px-6 lg:px-8 ">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8">
                        {/* Image */}
                        <div id="landing-img">
                            <picture>
                                <source srcSet="/img/mission.webp" type="image/webp" />

                                <img
                                src="/img/mission.jpg" // replace with your image path
                                alt="Mission-img"
                                loading="eager"
                                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-xl border-2 border-black"
                                />
                            </picture>
                        </div>

                        {/* Card */}
                        <div id="landing-card">
                            <h2>Why We Do What We Do</h2>
                            <p>
                            At Lonestar Property Management, we take pride in being a family-owned and operated business based in Fort Worth, Texas, 
                            proudly serving DFW and surrounding areas. Built on strong values, hard work, and a commitment to customer satisfaction, 
                            we treat every property like it’s our own—because when you choose Lonestar, you're part of the family.
                            <br /><br />
                            No job is too big or too small—we bring the same attention to detail and professionalism to every project. Whether you're
                             a homeowner looking to refresh your driveway, or a business in need of regular property maintenance, Lonestar Property Management
                              is your one-stop solution.
                            </p>

                            {/* Button */}
                            <div id="landing-btn">
                                <Link to='/contact'>
                                    <button>
                                        Get a Free Estimate
                                    </button>
                                </Link>
                                <a href="tel:1234567890">
                                    <button>
                                        Call Us: (123) 456-7890
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                </section>

                <section className="px-4 py-8">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div class='landing-info'>
                            <h2>Quick Quotes, No Hassle</h2>
                            <p>
                                At Lonestar Property Mangement, we make it easy to get fast and reliable estimates for all of your exterior
                                cleaning and maintenance needs. Whether you're looking for pressure washing, soft washing, fencing installation,
                                or even auto and boat detailing, our team is here to provide clear and accurate pricing. We specialize in transforming
                                your property with services like concrete sealing, haul off, and full property maintenance to keep your space looking
                                its best. Let us help you with quick, hassle-free estimates that give you peace of mind and a job well done.
                            </p>
                        </div>

                        <div class='landing-info'>
                            <h2>Trusted By Our Community</h2>
                            <p>
                            At Lonestar Property Management, we’re proud to be a locally owned and operated Texas business that our neighbors trust. From 
                            residential homeowners to local business owners, our clients choose us time and time again for our honest service, fair pricing, 
                            and dependable results. We’ve built a reputation for delivering top-quality property maintenance, pressure washing, fencing, and 
                            haul-off services with integrity and care. Our commitment to building long-lasting relationships means we treat every project like 
                            it’s our own — with respect, attention to detail, and a true Texas work ethic. When you choose Lonestar, you're choosing a team your
                             community already counts on.
                            </p>
                        </div>

                        <div class='landing-info'>
                            <h2>We are reliable</h2>
                            <p>
                            At Lonestar Property Management, reliability is at the core of everything we do. Our experienced team is dedicated to providing exceptional
                             results on every project, no matter the size. Whether it's a routine pressure washing job, soft washing delicate surfaces, or sealing
                              concrete to protect your investment, we take pride in our punctuality, professionalism, and attention to detail. We use top-of-the-line 
                              equipment and eco-friendly products to ensure the job is done right the first time. You can count on us for dependable service, clear communication,
                               and a commitment to exceeding your expectations every time.
                            </p>
                        </div>

                        <div class='landing-info'>
                            <h2>We treat your property like our own.</h2>
                            <p>
                            At Lonestar Property Management, we understand that your property is a valuable investment, and we treat it with the utmost care and respect. Whether
                             we are pressure washing your driveway, cleaning your roof, or detailing your boat, we approach every job with the same level of attention to detail
                              as if it were our own home. Our team is fully trained to ensure that your property is protected throughout the process. We use safe, non-damaging 
                              techniques and equipment to ensure that nothing is harmed, leaving your property looking spotless and well-maintained. Your satisfaction and peace
                               of mind are our top priorities.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center ">
                    <Link
                    id="call-button"
                    to="/contact"
                    >
                    Get Your Free Quote
                    </Link>
                </div>

                <section>
                    <div>
                        <div>
                            <ScrollingGallery/>
                        </div>
                    </div>
                </section>

            </div>
            <Footer/>
        </>
    )
}

export default LandingPage