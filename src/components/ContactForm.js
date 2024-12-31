import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactForm = () => {
  return (
    <div className=" flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="p-8 flex-1">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-8">
            Our experienced and knowledgeable team is dedicated to providing
            exceptional customer service.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded-lg bg-blue-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg bg-blue-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="w-full px-4 py-3 border rounded-lg bg-blue-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>

            <div className="mt-4 flex justify-center items-center gap-7">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-pink-500 ">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="bg-blue-100 flex-1 rounded-lg">
          <div className="relative flex justify-center items-center h-full">
            <div className="relative ">
              <img
                src="/reciepe/img8.jpg"
                alt="Assistant"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
