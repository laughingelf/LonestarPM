import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gray-500 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          {/* Left side: Links & Buttons */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link onClick={() => window.scrollTo(0, 0)} to='/about-us' className="hover:underline">About Us</Link>
              {/* <Link to='/testimonials' className="hover:underline">Testimonials</Link> */}
              <Link onClick={() => window.scrollTo(0, 0)} to='/services' className="hover:underline">Services</Link>
              <Link onClick={() => window.scrollTo(0, 0)} to='/contact' className="hover:underline">Contact Us</Link>
              <p>Operating 7 days a week</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link onClick={() => window.scrollTo(0, 0)} to='/contact' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition">Get a Free Quote</Link>
              <a
                href="tel:8178793087"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Call Us: (817) 879-3087
              </a>
            </div>
          </div>
  
          {/* Right side: Social Icons */}
          <div className="flex space-x-4">
            {/* Facebook Icon Placeholder */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <a href="https://www.facebook.com/profile.php?id=100072807586539" aria-label='Link to Lonestar Facebook' rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
            </svg></a>
            </div>
            {/* Instagram Icon Placeholder */}
            <div className="ml-6 mr-6 w-8 h-8 rounded-full flex items-center justify-center">
            <a href="https://www.facebook.com/profile.php?id=100072807586539" aria-label='Link to Lonestar Facebook' rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg></a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  