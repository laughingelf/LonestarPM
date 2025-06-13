import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"
import ContactHero from "../components/ContactHero";
import PageHero from "../components/CommonHero";
import ContactPage from "../components/ContactPage";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHero
        title="Get in Touch with LoneStar Property Management"
        subtitle="Whether you’re looking for property services or have a question, we’re here to help. Reach out today — let’s talk about how we can serve you."
        ctaLabel="Services"
        ctaLink="/services"
        image="/img/lspm-header2.webp"
      />

      <ContactPage />
      {/* <div className="min-h-screen bg-cover bg-center bg-no-repeat">
        <div className="py-10">
          <div id="contact-title" className="bg-gray-200 text-black py-10 px-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl">Request a Free Quote</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
};

export default Contact;
