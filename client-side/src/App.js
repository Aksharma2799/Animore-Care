import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Shop from "./pages/services/shop/Shop";
import Clinic from "./pages/services/clinic/Clinic";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutPage from "./pages/about/AboutPage";
import Background from "./components/home/Background";

  
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flex container */}
        <Navbar />
        <Background/>
        
        <div className="flex-grow">
          {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/clinic" element={<Clinic/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="about" element={<AboutPage/>} />
            {/* Add more routes here */}
          </Routes>
        </div>

        <div className="mt-auto">
          {/* Footer at the bottom */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
