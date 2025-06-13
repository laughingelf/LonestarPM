import { Link } from 'react-router-dom';

const LandingInfo = () => {

    return (
        <section className="px-4 py-8 bg-gray-300 mb-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {[
      {
        title: "Quick Quotes, No Hassle",
        text: `At Lone Star Property Maintenance, we make it easy to get fast and reliable estimates for all of your exterior
        cleaning and maintenance needs. Whether you're looking for pressure washing, soft washing, fencing installation,
        or even auto and boat detailing, our team is here to provide clear and accurate pricing. We specialize in transforming
        your property with services like concrete sealing, haul off, and full property maintenance to keep your space looking
        its best. Let us help you with quick, hassle-free estimates that give you peace of mind and a job well done.`
      },
      {
        title: "Trusted By Our Community",
        text: `At Lone Star Property Maintenance, we’re proud to be a locally owned and operated Texas business that our neighbors trust. From 
        residential homeowners to local business owners, our clients choose us time and time again for our honest service, fair pricing, 
        and dependable results. We’ve built a reputation for delivering top-quality property maintenance, pressure washing, fencing, and 
        haul-off services with integrity and care. Our commitment to building long-lasting relationships means we treat every project like 
        it’s our own — with respect, attention to detail, and a true Texas work ethic. When you choose Lonestar, you're choosing a team your
        community already counts on.`
      },
      {
        title: "We are reliable",
        text: `At Lone Star Property Maintenance, reliability is at the core of everything we do. Our experienced team is dedicated to providing exceptional
        results on every project, no matter the size. Whether it's a routine pressure washing job, soft washing delicate surfaces, or sealing
        concrete to protect your investment, we take pride in our punctuality, professionalism, and attention to detail. We use top-of-the-line 
        equipment and eco-friendly products to ensure the job is done right the first time. You can count on us for dependable service, clear communication,
        and a commitment to exceeding your expectations every time.`
      },
      {
        title: "We treat your property like our own.",
        text: `At Lone Star Property Maintenance, we understand that your property is a valuable investment, and we treat it with the utmost care and respect. Whether
        we are pressure washing your driveway, cleaning your roof, or detailing your boat, we approach every job with the same level of attention to detail
        as if it were our own home. Our team is fully trained to ensure that your property is protected throughout the process. We use safe, non-damaging 
        techniques and equipment to ensure that nothing is harmed, leaving your property looking spotless and well-maintained. Your satisfaction and peace
        of mind are our top priorities.`
      }
    ].map((item, idx) => (
      <div key={idx} className="relative landing-info overflow-hidden p-6 rounded-md shadow-md shadow-gray-600">
        {/* One shared background image */}
        <img
          src="/img/woodgrain.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />

        {/* Foreground content */}
        <div className="relative z-10">
          <h2 className='text-3xl md:text-4xl'>{item.title}</h2>
          <p className='text-xl md:text-2xl'>{item.text}</p>
          <Link to="/contact">
            <p id="learn-lnk" className="hover:translate-x-2">Learn More →</p>
          </Link>
        </div>
      </div>
    ))}

  </div>
</section>

    )
}

export default LandingInfo;