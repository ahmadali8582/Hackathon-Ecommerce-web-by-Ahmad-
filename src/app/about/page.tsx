"use client";

import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     

      {/* About Us Section */}
      <section className="py-16 bg-teal-700">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8">
    {/* Left Content */}
    <div className="text-white space-y-4">
      <h2 className="text-4xl font-bold">About Us - Comforty</h2>
      <p className="text-lg">
        At Comforty, we believe that the right chair can transform your space
        and elevate your comfort. Specializing in ergonomic design, premium
        materials, and modern aesthetics, we create chairs that seamlessly blend
        style with functionality.
      </p>
      <button className="bg-white text-teal-700 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
        View Collection
      </button>
    </div>
    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="/chairs.png"
        alt="Chair"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
      {/* What Makes Our Brand Different */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { title: "Next day & standard delivery", icon: "🚚" },
              { title: "Made by true artisans", icon: "🎨" },
              { title: "Unbeatable prices", icon: "💰" },
              { title: "Recyclable packaging", icon: "♻️" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Popular Products */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Our Popular Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "The Plush Sofa",
                price: "$200",
                image: "/grey-chair.png",
              },
              {
                title: "The Dandy Chair",
                price: "$80",
                image: "/Product Card.png",
              },
              {
                title: "The Dandy Chair",
                price: "$80",
                image: "/grey-chair.png",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
