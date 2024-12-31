import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="container mx-auto px-5 flex flex-col items-center">
        {/* Logo and Main Title */}
        <div className="flex flex-col items-center mb-8">
          <img src="/logo1.png" alt="Logo" className="w-40 h-40" />
          <h2 className="text-3xl font-bold mb-2">Easy Breezy Home Recipes</h2>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg px-12 font-bold mb-2">Recipe Glossary</h3>
            <p className="text-sm">Press & Media</p>
          </div>
          <div>
            <h3 className="text-lg px-12 font-bold mb-2">Privacy Policy</h3>
            <p className="text-sm">Terms & Conditions</p>
          </div>
          <div>
            <h3 className="text-lg px-12 font-bold mb-2">
              Accessibility Statement
            </h3>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-2xl px-4"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-2xl px-4"></i>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest text-2xl px-4"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl px-4"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm">
          © Easy Breezy Home Recipes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
