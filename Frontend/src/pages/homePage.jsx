import React from "react";
import BgImage from "../assets/pattern.jpg"; // Replace with hero background or gradient

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Something Special for Someone Special
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          All-in-one platform to scale your operations and deliver better
          experiences.
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
                desc: "Make smarter decisions with real-time data.",
              },
              {
                title: "Low Cost",
                desc: "Save hours every week with powerful automation.",
              },
              {
                title: "Made with love",
                desc: "Keep everyone in sync with built-in tools.",
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
            "This platform helped us increase efficiency by 40% in just 2
            months. It's a total game-changer!"
          </blockquote>
          <p className="mt-4 font-semibold">– Alex Johnson, CEO at TechCore</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Is there a free trial?</h4>
              <p className="text-gray-600">
                Yes! Get 14 days free. No credit card required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Can I cancel anytime?</h4>
              <p className="text-gray-600">
                Absolutely. You're never locked in.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Is support available?</h4>
              <p className="text-gray-600">
                24/7 live chat and email support for all plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
