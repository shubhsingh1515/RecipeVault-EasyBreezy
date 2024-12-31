import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-50 ">
      {/* Contact Section */}
      <section className=" bg-green-50 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-lg">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative ">
            <img
              src="logo1.png"
              alt="Assistant"
              className="rounded-lg h-80 w-80"
            />
            {/* <div className="absolute bottom-4 left-4 bg-yellow-400 text-white py-2 px-4 rounded-full shadow-md">
              How can I help you?
            </div> */}
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            We'd love to hear from you
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 bg-blue-200 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 bg-blue-200 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Any Comments"
              className="w-full px-4 py-2 bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
