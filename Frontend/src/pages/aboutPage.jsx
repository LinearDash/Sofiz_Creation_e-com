import React from "react";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero / Intro */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We’re on a mission to make technology accessible, efficient, and
          meaningful for everyone.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Founded in [Year], our company was born out of a simple idea: to solve
          real problems with elegant technology. Since day one, we've focused on
          creating tools that empower individuals and businesses alike.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our team is driven by passion, innovation, and the belief that great
          software should be intuitive, inclusive, and scalable.
        </p>
      </section>

      {/* Team */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">Team Member</h3>
                <p className="text-gray-500">Role / Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-indigo-600 text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
        <p className="text-lg mb-6">
          Reach out or follow us on social media for updates and insights.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
