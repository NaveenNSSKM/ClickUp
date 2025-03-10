"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import featuresData from "./featuresData";

const Feature = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-2">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-lime-500 mb-4">
                <Image src={feature.icon} width={40} height={40} alt={feature.title} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
