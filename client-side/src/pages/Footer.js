import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-75 animate-gradient bg-[length:400%_400%]"></div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src="https://i.ibb.co/6FT2h0v/a.jpg"
            alt="Logo"
            className="w-24 h-auto"
          />
        </div>

        {/* Address */}
        <div className="mb-4 md:mb-0">
          <p className="text-center md:text-left">
            1234 Paharia Sarnath, <br />
            Varanasi, India <br />
            Email: contact@animorecare.com
          </p>
        </div>

        {/* Footer Navbar */}
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-blue-300 transition duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-blue-300 transition duration-300">
            About
          </a>
          <a href="/services" className="hover:text-blue-300 transition duration-300">
            Services
          </a>
          <a href="/contact" className="hover:text-blue-300 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
