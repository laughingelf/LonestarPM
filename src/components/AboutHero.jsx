import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-16 overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/lspm-header2.webp"
          alt="About LoneStar Property Management"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
  
        {/* Content */}
        <div className="relative z-20 max-w-3xl text-center text-white space-y-6">
          <h1 id="cowboy" className="text-5xl md:text-7xl font-bold text-shadow">
            The LoneStar Difference
          </h1>
          <p className="text-xl md:text-3xl text-gray-200">
            At LoneStar Property Management, we take pride in providing reliable, top-quality property solutions across Texas. Learn more about our mission, values, and the people who make it all happen.
          </p>
          <Link
            to='/contact'
            className="text-2xl inline-block bg-red-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-110 transition"
          >
            Contact Us Today!
          </Link>
        </div>
      </section>
    );
  };
  
  export default AboutHero;
  