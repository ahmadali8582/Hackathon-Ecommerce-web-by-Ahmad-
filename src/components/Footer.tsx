import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-12 flex flex-wrap justify-between">
        {/* Left Section: Brand Information */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src="/logo.png.png" alt="Comforty Logo" className="h-10 mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">Comforty</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-teal-500 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-teal-500 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-teal-500 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-500 hover:text-teal-500 transition-colors"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Category</h4>
          <ul className="space-y-2">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Support</h4>
          <ul className="space-y-2">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Newsletter */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-8 text-center">
          <p className="text-sm text-gray-600">
            © 2021 - Blogy - Designed & Developed by Zakirsoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
