import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/images/upload/dashboardimage1.jpg"
        alt="Construction background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <figcaption className="absolute left-10 px-4 text-lg text-white p-10 top-40 bg-black/40 mx-6">
        <p className="text-4xl font-bold">
          BUILDING SOLUTIONS
        </p>
        <p className="text-base sm:text-lg font-medium mt-3">
          High-Performance Solutions for the Construction Industry
        </p>
      </figcaption>
    </section>
  );
};

export default HeroSection;
