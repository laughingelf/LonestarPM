import { useState } from "react";
import SuccessModal from "./SuccessModal";

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

    // Append each file separately
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
      {/* Netlify Hidden Form */}
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

      <form onSubmit={handleSubmit} name="contact" data-netlify="true" encType="multipart/form-data" className="space-y-6 text-xl" id="contact-form">
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required
              className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block mb-1 font-medium">Address</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required
            className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Description of the Job</label>
          <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required
            className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
        </div>

        <div>
          <label htmlFor="timeframe" className="block mb-1 font-medium">How soon do you need the job completed?</label>
          <select id="timeframe" name="timeframe" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} required
            className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select timeframe</option>
            <option value="asap">As soon as possible</option>
            <option value="1week">Within 1 week</option>
            <option value="2weeks">Within 2 weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="upload" className="block mb-1 font-medium">Upload Photos</label>
          <input
            type="file"
            id="upload"
            name="upload"
            multiple
            onChange={(e) => setUpload(e.target.files)}
            className="rounded-md shadow-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-white text-black"
          />
        </div>

        <div>
          <label htmlFor="how" className="block mb-1 font-medium">How did you hear about us?</label>
          <select id="how" name="how" value={how} onChange={(e) => setHow(e.target.value)} required
            className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select an option</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend or Family</option>
            <option value="search">Google/Search Engine</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="shadow-lg bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
