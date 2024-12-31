import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjByZWNpZXBlfGVufDB8fDB8fHww')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-5 rounded-lg">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Discover delicious recipes crafted with passion and love!
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-10">
              Who We Are
            </h2>
            <p className="text-xl leading-7 font-semibold text-gray-600">
              Welcome to our food recipe website! Here, you can explore a
              variety of recipes ranging from traditional classics to modern
              culinary delights. Whether you’re a seasoned chef or a cooking
              enthusiast, our platform provides step-by-step guides to help you
              create mouthwatering dishes.
            </p>
            <p className="text-xl leading-7 font-semibold text-gray-600 mt-4">
              Our mission is to bring the joy of cooking into your kitchen and
              inspire you to try new flavors, techniques, and cuisines. Bon
              Appétit!
            </p>
            <p className="text-xl leading-7 font-semibold text-gray-600 mt-4">
              On our platform, we celebrate the diversity of global cuisines and
              bring you recipes that are perfect for every occasion—be it a cozy
              family dinner, a festive celebration, or a quick snack for busy
              days. With a focus on quality ingredients and easy-to-follow
              instructions, we aim to make cooking an enjoyable and rewarding
              experience for everyone. Let’s embark on this culinary adventure
              together!
            </p>
          </div>

          {/* Recipe Image Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4">
            <img
              src="/reciepe/img1.jpg"
              alt="Recipe 1"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
            <img
              src="/reciepe/img2.jpg"
              alt="Recipe 2"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
            <img
              src="/reciepe/img3.jpg"
              alt="Recipe 3"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
            <img
              src="/reciepe/img4.jpg"
              alt="Recipe 4"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
            <img
              src="/reciepe/img5.avif"
              alt="Recipe 3"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
            <img
              src="/reciepe/img6.jpg"
              alt="Recipe 4"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform h-60 w-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
