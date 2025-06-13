import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm"; // adjust path if needed

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center  py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-3xl bg-gray-100 rounded-xl px-6 py-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 text-red-700 header-font"
        >
          Request a Free Quote
        </motion.h1>

        <ContactForm />
      </motion.div>
    </section>
  );
};

export default ContactPage;
