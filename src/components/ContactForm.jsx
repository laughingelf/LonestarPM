import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [upload, setUpload] = useState([]);
  const [how, setHow] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("timeframe", timeframe);
    formData.append("how", how);

    Array.from(upload || []).forEach((file, index) => {
      formData.append(`upload${index + 1}`, file);
    });

    fetch("/", { method: "POST", body: formData })
      .then(() => {
        setShowModal(true);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setDescription("");
        setTimeframe("");
        setUpload([]);
        setHow("");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      {/* Netlify hidden form */}
      <form name="contact" netlify hidden encType="multipart/form-data">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="address" />
        <textarea name="description" />
        <input type="text" name="timeframe" />
        <input type="text" name="how" />
        <input type="file" name="upload1" />
        <input type="file" name="upload2" />
        <input type="file" name="upload3" />
      </form>

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Lone Star Property Maintenance"
      >
        <p>
          Thanks for reaching out. We’ve received your request and will follow up ASAP.
        </p>
      </SuccessModal>

      <motion.form
        onSubmit={handleSubmit}
        name="contact"
        data-netlify="true"
        encType="multipart/form-data"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6 md:px-10 py-8 md:py-10 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200"
      >
        {/* subtle top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 rounded-t-2xl" />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Get Your Free Quote
        </h2>
        <p className="mt-2 text-center text-gray-600 text-sm">
          Tell us a bit about the job and we’ll get right back to you.
        </p>

        {/* Contact fields */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-800">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jane Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium text-gray-800">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(817) 555-1234"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
            />
            <p className="mt-1 text-xs text-gray-500">We’ll only use this to contact you about your quote.</p>
          </div>

          <div>
            <label htmlFor="address" className="block mb-1 font-medium text-gray-800">
              Service Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Street, City, ZIP"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
            />
          </div>
        </div>

        {/* Job description */}
        <div className="mt-6">
          <label htmlFor="description" className="block mb-1 font-medium text-gray-800">
            Job Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Tell us what you need (materials, access, timeline, etc.)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
          />
        </div>

        {/* Timeframe + Referral */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="timeframe" className="block mb-1 font-medium text-gray-800">
              How soon do you need it completed?
            </label>
            <div className="relative">
              <select
                id="timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                required
                className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
              >
                <option value="">Select timeframe</option>
                <option value="asap">ASAP</option>
                <option value="1week">Within 1 week</option>
                <option value="2weeks">Within 2 weeks</option>
                <option value="flexible">Flexible</option>
              </select>
              {/* custom chevron */}
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="how" className="block mb-1 font-medium text-gray-800">
              How did you hear about us?
            </label>
            <div className="relative">
              <select
                id="how"
                value={how}
                onChange={(e) => setHow(e.target.value)}
                required
                className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
              >
                <option value="">Select an option</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="friend">Friend or Family</option>
                <option value="search">Google/Search</option>
                <option value="other">Other</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.38a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Uploads */}
        <div className="mt-6">
          <label htmlFor="upload" className="block mb-1 font-medium text-gray-800">
            Upload Photos (optional)
          </label>
          <input
            id="upload"
            type="file"
            multiple
            onChange={(e) => setUpload(e.target.files)}
            className="w-full text-sm rounded-lg border border-gray-300 bg-white text-gray-900 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:bg-blue-700 file:text-white hover:file:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 [color-scheme:light]"
          />
          <p className="mt-1 text-xs text-gray-500">Attach site photos to speed up your quote (max 3 files recommended).</p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320 }}
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 shadow-md transition"
          >
            Submit Request
          </motion.button>

          <a
            href="tel:+18178793087"
            className="inline-flex items-center justify-center rounded-full bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 shadow-sm transition"
          >
            Or Call: (817) 879-3087
          </a>
        </div>

        <p className="mt-3 text-center text-xs text-gray-500">
          By submitting, you agree to be contacted about your request. We’ll never share your info.
        </p>
      </motion.form>
    </>
  );
};

export default ContactForm;
