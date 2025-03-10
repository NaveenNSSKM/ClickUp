"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @DemoCompany",
    image: "/images/user/user-01.png",
    content: "Their digital marketing strategies boosted our online presence.",
  },
  {
    id: 2,
    name: "John Abraham",
    designation: "CEO @TechCorp",
    image: "/images/user/user-02.png",
    content: "Our lead generation tripled after working with this agency!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    designation: "@BrandBoost",
    image: "/images/user/user-01.png",
    content: "They optimized our social media strategy with great results.",
  },
  {
    id: 4,
    name: "Michael Brown",
    designation: "@InnovateX",
    image: "/images/user/user-02.png",
    content: "Their data-driven marketing gave us a huge ROI boost!",
  },
  {
    id: 5,
    name: "Emma Wilson",
    designation: "CTO @NextGenTech",
    image: "/images/user/user-01.png",
    content: "SEO & content marketing doubled our inbound leads!",
  },
];



const Testimonial = () => {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Client Testimonials
        </motion.h2>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialData.map(({ id, name, designation, image, content }) => (
              <SwiperSlide key={id}>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all mb-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image src={image} width={60} height={60} className="rounded-full" alt={name} />
                    <div>
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-gray-500 text-sm">{designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
