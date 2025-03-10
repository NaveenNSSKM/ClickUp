"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-lime-200 py-16 md:py-32">
      <div className="container mx-auto flex flex-col-reverse items-center px-6 text-center md:flex-row md:gap-12 md:px-12 md:text-left">
        
        {/* Left Side: Marketing Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
        
          <h1 className="mb-4 text-3xl font-bold leading-tight text-black md:text-5xl">
          Elevate Your Brand{" "}
            <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-yellow-400">
            Digital Marketing
            </span>
          </h1>
          <p className="mb-5 text-base text-black opacity-90 md:text-lg">
            Our data-driven digital marketing solutions drive real growth.
            Increase traffic, boost conversions, and maximize ROI with our
            expert strategies.
          </p>

       {/* Email Subscription Form */}
{/* Email Subscription Form */}
<div className="mt-6 w-full">
  <form
    onSubmit={handleSubmit}
    className="flex w-full flex-row items-center gap-2 sm:flex-col sm:items-start md:flex-row md:items-start"
  >
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Enter your email"
      className="w-full flex-1 rounded-full px-4 py-3 text-black focus:outline-none"
    />
    <button
      aria-label="get started button"
      className="whitespace-nowrap rounded-full bg-gradient-to-br from-blue-500 to-lime-500 px-6 py-3 text-lg font-medium text-black transition duration-300 hover:bg-yellow-300"
    >
      Get Started
    </button>
  </form>
</div>


        </div>

        {/* Right Side: Hero Image (Hidden on Mobile) */}
        <div className="w-full md:w-1/2 flex justify-center md:mt-0 mt-10">
          <Image
            src="/images/hero/hero-light.svg"
            alt="Digital Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
