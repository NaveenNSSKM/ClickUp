"use client";
import React from "react";
import { FaRocket, FaBullseye, FaChartLine } from "react-icons/fa";

const whyChooseUs = [
  { id: 1, icon: <FaRocket />, title: "Proven Strategies", desc: "We use data-driven strategies for maximum ROI." },
  { id: 2, icon: <FaBullseye />, title: "Targeted Approach", desc: "Reach the right audience at the right time." },
  { id: 3, icon: <FaChartLine />, title: "Result-Oriented", desc: "We focus on tangible outcomes and performance." }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map(({ id, icon, title, desc }) => (
            <div key={id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="text-5xl text-lime-500 mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
