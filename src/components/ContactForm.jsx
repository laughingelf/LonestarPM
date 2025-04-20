import { useState } from "react";
import SuccessModal from "./SuccessModal"


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [timeframe, setTimeframe] = useState('');
    const [upload, setUpload] = useState(null);
    const [how, setHow] = useState('');

    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', name, email, phone, address, description,
            timeframe, upload, how }),
        })
        .then(() => setShowModal(true) )
        .then(() => setName(''), setEmail(''), setPhone(''), setAddress(''), setDescription(''),
        setTimeframe(''), setUpload(''), setHow(''))
        .catch((error) => alert(error))
    };

    const encode = (data) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };


    return (
        <>

            <SuccessModal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="LoneStar Property Management"
            >
                <p>Thank you for reaching out to Lonestar Property Management.
                    We've received your message and will get back to you as soon as possible.
                    We appreciate your interest and look forward to helping you with your property needs!</p>
            </SuccessModal>

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form" name="contact">
            <input type="hidden" name="form-name" value="contact" />
              <div className="grid md:grid-cols-2 gap-4">
              <div>
                  <label for='name' className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={name} onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label for='email' className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label for='phone' className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label for='address' className="block mb-1 font-medium">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label for='description' className="block mb-1 font-medium">Description of the Job</label>
                <textarea
                  rows="4"
                  id="description"
                  name="description"
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={description} onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <label for='timeframe' className="block mb-1 font-medium">How soon do you need the job completed?</label>
                <select
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={timeframe} onChange={(e) => setTimeframe(e.target.value)}
                  id="timeframe"
                  name="timeframe"
                  required
                >
                  <option value="">Select timeframe</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1week">Within 1 week</option>
                  <option value="2weeks">Within 2 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label for='upload' className="block mb-1 font-medium">Upload Photos</label>
                <input
                  type="file"
                  id="upload"
                  name="upload"
                  onChange={(e) => setUpload(e.target.files)}
                  multiple
                  className="rounded-md shadow-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-white text-black"
                />
              </div>

              <div>
                <label for='how' className="block mb-1 font-medium">How did you hear about us?</label>
                <select
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={how} 
                  onChange={(e) => setHow(e.target.value)}
                  id="how"
                  name="how"
                  required
                >
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
    )
}

export default ContactForm