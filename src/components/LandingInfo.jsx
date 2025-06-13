import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const infoItems = [
  {
        title: "Quick Quotes, No Hassle",
        text: `At Lone Star Property Maintenance, we make it easy to get fast and reliable estimates for all of your exterior cleaning and maintenance needs. Whether you're looking for pressure washing, soft washing, fencing installation, or even auto and boat detailing, our team is here to provide clear and accurate pricing. We specialize in transforming your property with services like concrete sealing, haul off, and full property maintenance to keep your space looking its best. Let us help you with quick, hassle-free estimates that give you peace of mind and a job well done.`,
  },
  {
        title: "Trusted By Our Community",
        text: `At Lone Star Property Maintenance, we’re proud to be a locally owned and operated Texas business that our neighbors trust. From residential homeowners to local business owners, our clients choose us time and time again for our honest service, fair pricing, and dependable results. We’ve built a reputation for delivering top-quality property maintenance, pressure washing, fencing, and haul-off services with integrity and care. Our commitment to building long-lasting relationships means we treat every project like it’s our own — with respect, attention to detail, and a true Texas work ethic. When you choose Lonestar, you're choosing a team your community already counts on.`,
  },
  {
        title: "We are reliable",
        text: `At Lone Star Property Maintenance, reliability is at the core of everything we do. Our experienced team is dedicated to providing exceptional results on every project, no matter the size. Whether it's a routine pressure washing job, soft washing delicate surfaces, or sealing concrete to protect your investment, we take pride in our punctuality, professionalism, and attention to detail. We use top-of-the-line equipment and eco-friendly products to ensure the job is done right the first time. You can count on us for dependable service, clear communication, and a commitment to exceeding your expectations every time.`,
  },
  {
        title: "We treat your property like our own.",
        text: `At Lone Star Property Maintenance, we understand that your property is a valuable investment, and we treat it with the utmost care and respect. Whether we are pressure washing your driveway, cleaning your roof, or detailing your boat, we approach every job with the same level of attention to detail as if it were our own home. Our team is fully trained to ensure that your property is protected throughout the process. We use safe, non-damaging techniques and equipment to ensure that nothing is harmed, leaving your property looking spotless and well-maintained. Your satisfaction and peace of mind are our top priorities.`,
  },
];

const LandingInfo = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {infoItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white p-6 md:p-8 border border-gray-300"
          >
            {/* Background Overlay */}
            <img
              src="/img/woodgrain.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl text-center md:text-left md:text-4xl font-semibold text-red-700 mb-4 header-font">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-6 whitespace-pre-line">
                {item.text}
              </p>
              <Link to="/contact" className="group inline-block text-2xl text-blue-700 font-medium">
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  Learn More →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingInfo;
