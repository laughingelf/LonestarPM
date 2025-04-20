import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
              <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description of the Job</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 font-medium">How soon do you need the job completed?</label>
                <select
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
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
                <label className="block mb-1 font-medium">Upload Photos</label>
                <input
                  type="file"
                  multiple
                  className="rounded-md shadow-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 bg-white text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">How did you hear about us?</label>
                <select
                  className="w-full px-4 py-2 rounded-md bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
