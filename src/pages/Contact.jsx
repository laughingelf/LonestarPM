import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/lspm-header2.png')" }}
      >
        <div className="py-10">
          <div id="contact-title" className="bg-gray-200 text-black py-10 px-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2>Request a Free Quote</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
