import React from "react";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero / Intro */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We believe that every product has a story—and that story begins with
          human hands. Our platform is dedicated to showcasing beautifully
          handcrafted items made with love, care, and a commitment to
          authenticity.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam id
          aliquam similique asperiores possimus ducimus eaque optio ullam
          eligendi?
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our team is driven by passion, innovation, and the belief that great
          software should be intuitive, inclusive, and scalable. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Voluptas, iusto labore
          nesciunt ipsa quaerat culpa aperiam ullam itaque dolor excepturi,
          optio quasi odit et voluptate dolorum eius. Rerum veritatis, nulla
          recusandae iusto accusantium illo deserunt obcaecati totam, suscipit a
          ducimus quisquam architecto nemo voluptas autem dolore pariatur quod
          aspernatur magnam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur facere maxime hic? Porro quibusdam, corrupti
          deserunt corporis voluptatum dolor nihil esse atque numquam vel
          obcaecati! Debitis, corrupti. Repellat, neque ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          cupiditate illum quisquam quam, error quae expedita consequatur
          exercitationem iure ex nisi. Esse soluta neque similique recusandae
          architecto consectetur odit dicta? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Doloribus ea dolor omnis deserunt ut
          voluptate animi distinctio culpa nemo numquam ipsum, sit consequuntur
          sunt similique, quia error non blanditiis vel dolores, iure rerum
          accusantium necessitatibus ipsam eius? Asperiores quod quas
          voluptatibus possimus omnis alias accusantium sequi iure voluptatem
          delectus voluptas culpa, eos doloremque provident maxime! Eos,
          doloribus obcaecati! Ullam, labore?
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-300 text-white px-4">
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
