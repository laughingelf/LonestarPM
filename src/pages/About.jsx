import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <div>

        <section
          className="bg-cover bg-center bg-no-repeat text-white"
          style={{
            backgroundImage: `url('/img/lspm-header2.png')`, // Replace with your image path
          }}
        >
          <div className="bg-black/60 w-full h-full">
            <div className="max-w-5xl mx-auto text-center px-4 py-16 sm:py-20">
              <h1 style={{fontFamily: 'Rye, serif'}} className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
              <p className="text-base sm:text-lg max-w-2xl mx-auto">
                Lonestar Property Management is built on trust, hard work, and Texas pride. Learn about our mission and how we serve our community.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex-1">
              <img
                src="/img/mission.jpg"
                alt="Mission"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex-1 bg-white bg-opacity-80 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="text-black">
                <h2 style={{fontFamily: 'Rye, serif'}} className="text-3xl font-semibold mb-6 text-center text-shadow-lg text-red-600 lg:text-left">Who We Are</h2>
                <p className="text-lg text-center lg:text-left mb-6">
                  At Lonestar Property Management, we're proud to be a family-owned and operated business based in Fort Worth, Texas. We 
                  serve the DFW area and the surrounding communities, bringing our passion for quality work and customer service to every 
                  job. Our values are rooted in hard work, honesty, and the desire to make a positive impact on the properties we service. 
                  We believe in treating every home and business like it's our own, ensuring you get the highest level of care and attention.
                </p>
                <p className="text-lg text-center lg:text-left mb-6">
                  No project is too large or too small for us—whether it's restoring the beauty of a residential driveway or providing ongoing 
                  maintenance for commercial properties, we approach each task with the same commitment to excellence. Lonestar Pressure Washing 
                  is your trusted partner for all things property maintenance, offering solutions that fit your needs and budget.
                </p>
                <p className="text-lg text-center lg:text-left mb-6">
                  As Texans, we have deep roots in this community. Being born and raised here, we understand the unique demands of maintaining 
                  homes and businesses in our climate. From the hot summer sun to the occasional Texas storm, we know how important it is to keep 
                  your property looking its best year-round. We’re here to help you with that, every step of the way.
                </p>
                <p className="text-lg text-center lg:text-left">
                  Whether you're looking to refresh your property’s exterior, maintain its value, or tackle a large-scale project, our services are 
                  designed to meet your needs. We take pride in our attention to detail and strive to exceed your expectations with every job.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 text-center flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link
                  to='/contact'
                  className=" w-48 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition"
                >
                  Request a Free Quote
                </Link>
                <a
                  href="tel:1234567890"
                  className="w-48 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition"
                >
                  Call Us: (123) 456-7890
                </a>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="flex justify-center items-center">
              {/* <img src="/img/smalltown.svg" className="w-3/4 h-auto" /> */}
              <h1 style={{fontFamily: 'Rye, serif'}} className="text-black text-5xl text-center mb-16 text-red-600 text-shadow-lg">High-Quality Services At Honest,<br/> Affordable Prices</h1>
          </div>
        </section>

        <section>
          <div className="bg-white text-black py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 style={{fontFamily: 'Rye, serif'}} className="text-5xl text-shadow-lg font-bold mb-10 text-center underline">Our Mission & Values</h2>
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Image */}
                <div className="w-full lg:w-1/2 max-w-sm mx-auto">
                  <img src="/img/mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>

                {/* Text Content */}
                <div id="mission-text" className=" w-full lg:w-1/2 space-y-6 text-lg leading-relaxed md:mr-24 p-12 rounded-lg shadow-lg">
                  <p>
                    At <span style={{fontFamily: 'Rye, serif'}} className="text-red-600 text-md underline text-shadow-lg">Lonestar Property Management</span>, our mission is to deliver high-quality, reliable exterior cleaning and property maintenance 
                    services that protect and enhance the value of every home and business we touch. We’re committed to honest work, exceptional 
                    results, and building lasting relationships with our community through trust, integrity, and Texas-sized customer care.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 font-semibold">
                    <li>Integrity First</li>
                    <li>Quality You Can Count On</li>
                    <li>Hard Work, Always</li>
                    <li>Respect for Community</li>
                    <li>Customer-First Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </>
  );
};

export default About;
