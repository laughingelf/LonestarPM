import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/CommonHero";
import ContactPage from "../components/ContactPage";

const Contact = () => {
  return (
    <>

      <PageHero
        title="Get in Touch with LoneStar Property Management"
        subtitle="Whether you’re looking for property services or have a question, we’re here to help. Reach out today — let’s talk about how we can serve you."
        ctaLabel="Services"
        ctaLink="/services"
        image="/img/lspm-header2.webp"
      />

      <ContactPage />
    </>
  );
};

export default Contact;
