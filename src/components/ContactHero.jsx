const ContactHero = () => {
    return (
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 py-16 overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/lspm-header2.webp"
          alt="Contact LoneStar Property Management"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
  
        {/* Content */}
        <div className="relative z-20 max-w-2xl text-center text-white space-y-6">
          <h1 id="cowboy" className="text-4xl sm:text-5xl font-bold text-shadow">
            Get in Touch with LoneStar Property Management
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Whether you’re looking for property services or have a question, we’re here to help. Reach out today — let’s talk about how we can serve you.
          </p>
        </div>
      </section>
    );
  };
  
  export default ContactHero;
  