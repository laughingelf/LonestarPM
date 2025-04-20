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
          <div className="bg-gray-200 text-black py-10 px-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 style={{fontFamily: 'Rye, serif'}} className="text-xl text-red-600 underline text-shadow-lg font-semibold mb-6 text-center">Request a Free Quote</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
