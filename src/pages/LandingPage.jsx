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
                        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 ">
                            <img
                            src="/img/mission.jpg" // replace with your image path
                            alt="Mission-img"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-xl border-2 border-black"
                            />
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-xl text-black text-center">
                            <h2 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 underline sm:text-3xl font-bold mb-4 text-shadow-lg">Why We Do What We Do</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-left">
                            At Lonestar Property Management, we take pride in being a family-owned and operated business based in Fort Worth, Texas, 
                            proudly serving DFW and surrounding areas. Built on strong values, hard work, and a commitment to customer satisfaction, 
                            we treat every property like it’s our own—because when you choose Lonestar, you're part of the family.
                            <br /><br />
                            No job is too big or too small—we bring the same attention to detail and professionalism to every project. Whether you're
                             a homeowner looking to refresh your driveway, or a business in need of regular property maintenance, Lonestar Property Management
                              is your one-stop solution.
                            </p>

                            {/* Button */}
                            <div>
                                <Link to='/contact'>
                            <button className="mt-4 mr-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:text-red-500 hover:bg-gray-700 transition-all duration-300">
                                Get a Free Estimate
                            </button>
                            </Link>
                            <a href="tel:1234567890">
                            <button className="mt-4 mr-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:text-red-500 hover:bg-gray-700 transition-all duration-300">
                                Call Us: (123) 456-7890
                            </button>
                            </a>
                            </div>
                        </div>
                    </div>


                </section>

                <section className="px-4 py-8">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="bg-white text-center rounded-lg shadow-lg p-6">
                            <h2 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 font-semibold mb-2 underline text-shadow-lg">Quick Quotes, No Hassle</h2>
                            <p className="text-gray-700 mb-4 text-left">
                                At Lonestar Property Mangement, we make it easy to get fast and reliable estimates for all of your exterior
                                cleaning and maintenance needs. Whether you're looking for pressure washing, soft washing, fencing installation,
                                or even auto and boat detailing, our team is here to provide clear and accurate pricing. We specialize in transforming
                                your property with services like concrete sealing, haul off, and full property maintenance to keep your space looking
                                its best. Let us help you with quick, hassle-free estimates that give you peace of mind and a job well done.
                            </p>
                        </div>

                        <div className="bg-white text-center rounded-lg shadow-lg p-6">
                            <h2 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 font-semibold mb-2 underline text-shadow-lg">Trusted By Our Community</h2>
                            <p className="text-gray-700 text-left">
                            At Lonestar Property Management, we’re proud to be a locally owned and operated Texas business that our neighbors trust. From 
                            residential homeowners to local business owners, our clients choose us time and time again for our honest service, fair pricing, 
                            and dependable results. We’ve built a reputation for delivering top-quality property maintenance, pressure washing, fencing, and 
                            haul-off services with integrity and care. Our commitment to building long-lasting relationships means we treat every project like 
                            it’s our own — with respect, attention to detail, and a true Texas work ethic. When you choose Lonestar, you're choosing a team your
                             community already counts on.
                            </p>
                        </div>

                        <div className="bg-white text-center rounded-lg shadow-lg p-6">
                            <h2 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 font-semibold mb-2 underline text-shadow-lg">We are reliable</h2>
                            <p className="text-gray-700 mb-4 text-left">
                            At Lonestar Property Management, reliability is at the core of everything we do. Our experienced team is dedicated to providing exceptional
                             results on every project, no matter the size. Whether it's a routine pressure washing job, soft washing delicate surfaces, or sealing
                              concrete to protect your investment, we take pride in our punctuality, professionalism, and attention to detail. We use top-of-the-line 
                              equipment and eco-friendly products to ensure the job is done right the first time. You can count on us for dependable service, clear communication,
                               and a commitment to exceeding your expectations every time.
                            </p>
                        </div>

                        <div className="bg-white text-center rounded-lg shadow-lg p-6">
                            <h2 style={{fontFamily: 'Rye, serif'}} className="text-2xl text-red-600 font-semibold mb-2 underline text-shadow-lg">We treat your property like our own.</h2>
                            <p className="text-gray-700 mb-4 text-left">
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
                    style={{fontFamily: 'Rye, serif'}}
                    id="call-button"
                    to="/contact"
                    className="text-black text-2xl font-semibold px-6 py-3 rounded-lg shadow-md transition text-shadow-lg"
                    // text-white text-2xl bg-red-600 hover:bg-red-700
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