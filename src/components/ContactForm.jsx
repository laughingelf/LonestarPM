import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [upload, setUpload] = useState([]);
  const [how, setHow] = useState('');

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

    Array.from(upload).forEach((file, index) => {
      formData.append(`upload${index + 1}`, file);
    });

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setShowModal(true);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setDescription('');
        setTimeframe('');
        setUpload([]);
        setHow('');
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <form name="contact" netlify hidden encType="multipart/form-data">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="address" />
        <textarea name="description"></textarea>
        <input type="text" name="timeframe" />
        <input type="text" name="how" />
        <input type="file" name="upload1" />
        <input type="file" name="upload2" />
        <input type="file" name="upload3" />
      </form>

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="LoneStar Property Management"
      >
        <p>
          Thank you for reaching out to LoneStar Property Management.
          We've received your message and will get back to you as soon as possible.
          We appreciate your interest and look forward to helping you with your property needs!
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
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto space-y-6 text-lg"
      >
        <input type="hidden" name="form-name" value="contact" />

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 header-font">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-800">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-800">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium text-gray-800">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 font-medium text-gray-800">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600" />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 font-medium text-gray-800">Job Description</label>
          <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-600"></textarea>
        </div>

        <div>
          <label htmlFor="timeframe" className="block mb-1 font-medium text-gray-800">How soon do you need it completed?</label>
          <select id="timeframe" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} required
            className="w-full px-4 py-2 rounded-md border text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-600">
            <option value="">Select timeframe</option>
            <option value="asap">ASAP</option>
            <option value="1week">Within 1 week</option>
            <option value="2weeks">Within 2 weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="upload" className="block mb-1 font-medium text-gray-800">Upload Photos</label>
          <input
            type="file"
            id="upload"
            multiple
            onChange={(e) => setUpload(e.target.files)}
            className="w-full text-sm border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div>
          <label htmlFor="how" className="block mb-1 font-medium text-gray-800">How did you hear about us?</label>
          <select id="how" value={how} onChange={(e) => setHow(e.target.value)} required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 text-gray-800">
            <option value="">Select an option</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend or Family</option>
            <option value="search">Google/Search Engine</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="text-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition"
          >
            Submit Request
          </motion.button>
        </div>
      </motion.form>
    </>
  );
};

export default ContactForm;
