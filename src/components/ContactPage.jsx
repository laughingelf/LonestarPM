import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <main className="relative bg-white pt-24 pb-16">
      {/* Page header */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Request a Free Quote
          </h1>
          <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-red-600" />
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Tell us a bit about your project and we’ll follow up with a fast, accurate estimate.
          </p>

          {/* Quick info chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white text-gray-800 ring-1 ring-gray-200 px-3 py-1 text-sm">
              <Clock className="w-4 h-4 text-blue-700" /> Operating 7 Days a Week
            </span>
            <a
              href="tel:+18178793087"
              className="inline-flex items-center gap-2 rounded-full bg-white text-red-600 ring-1 ring-red-200 px-3 py-1 text-sm hover:bg-red-50 transition"
            >
              <Phone className="w-4 h-4" /> (817) 879-3087
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-white text-gray-800 ring-1 ring-gray-200 px-3 py-1 text-sm">
              <MapPin className="w-4 h-4 text-blue-700" /> DFW & Surrounding Areas
            </span>
          </div>
        </motion.div>
      </section>

      {/* Form */}
      <section className="mt-8 px-6">
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
