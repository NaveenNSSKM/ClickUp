"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import featuresData from "./featuresData";

const Feature = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      <div className="text-center mb-12">
 
  <h2 className="text-4xl font-bold text-black">Services</h2>
</div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {featuresData.map((feature, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-white p-7 shadow-lg dark:bg-black dark:border-gray-700"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-lime-500">
                <Image src={feature.icon} width={36} height={36} alt={feature.title} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
