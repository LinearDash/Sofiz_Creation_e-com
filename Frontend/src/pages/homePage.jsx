import React from "react";
// import BgImage from "../assets/pattern.jpg"; // Replace with hero background or gradient

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Something Special for Someone Special
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam
          quod doloremque harum quos, possimus hic deleniti velit quae similique
          maiores provident dignissimos?
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Handmade",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit.",
              },
              {
                title: "Low Cost",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit.",
              },
              {
                title: "Made with love",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <blockquote className="italic text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            voluptatum velit, accusamus, eveniet natus suscipit tempora, dolorem
            esse sint facere non odit. Aperiam voluptatum magnam dicta qui
            architecto similique commodi?
          </blockquote>
          <p className="mt-4 font-semibold">– Sandesh.dev</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
