import React, { useState } from 'react';
// import { UserIcon } from '@heroicons/react/outline'; // Importing the icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Animore Care</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:bg-blue-700 p-2 rounded">Home</a>
          <div className="group relative">
            <button className="text-white hover:bg-blue-700 p-2 rounded">About</button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md">
              <a href="/about/aboutUs" className="block px-11 py-2 text-blue-600 hover:bg-gray-100">About Us</a>
              <a href="/about/company" className="block px-11 py-2 text-blue-600 hover:bg-gray-100">What We Offer</a>
              <a href="/about/careers" className="block px-11 py-2 text-blue-600 hover:bg-gray-100">Our Values</a>
            </div>
          </div>
          <div className="group relative">
            <button className="text-white hover:bg-blue-700 p-2 rounded">Services</button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md">
              <a href="/shop" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Shop</a>
              <a href="/clinic" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Clinic</a>
            </div>
          </div>
          <a href="/contact" className="text-white hover:bg-blue-700 p-2 rounded">Contact Us</a>
          <a href="/account" className="flex items-center text-white hover:bg-blue-700 p-2 rounded">
            {/* <UserIcon className="h-5 w-5 mr-1" /> Account icon */}
            Account
          </a>
        
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg> 
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-white hover:bg-blue-700 p-2">Home</a>
          <div>
            <button className="block text-white hover:bg-blue-700 p-2">About</button>
            <div className="pl-4">
              <a href="/about/team" className="block text-blue-600 hover:bg-gray-100">Team</a>
              <a href="/about/company" className="block text-blue-600 hover:bg-gray-100">Company</a>
              <a href="/about/careers" className="block text-blue-600 hover:bg-gray-100">Careers</a>
            </div>
          </div>
          <a href="/contact" className="block text-white hover:bg-blue-700 p-2">Contact Us</a>
          {/* <a href="/account" className="flex items-center text-white hover:bg-blue-700 p-2">
            <UserIcon className="h-5 w-5 mr-1" />
            Account
          </a> */}
          <div>
            <button className="block text-white hover:bg-blue-700 p-2">Services</button>
            <div className="pl-4">
              <a href="/service/web" className="block text-blue-600 hover:bg-gray-100">Shop</a>
              <a href="/service/mobile" className="block text-blue-600 hover:bg-gray-100">Clinic</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
