"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">  
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center justify-self-start place-self-center sm:text-left"
        >
          <h1 className="justify-around mt-12 mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-primary-600 sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-300">
              Welcome To{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "The Future",
                4000,
                "ArkiTech",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl">
            Empowering Crypto Communities
          </h2>
          <div>
            <Link
              href="/#about"
              className="inline-block w-full px-6 py-3 mr-4 text-white rounded-full space-between sm:w-fit bg-gradient-to-br from-secondary-500 to-primary-800 hover:bg-secondary-400"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mb-4 place-self-center lg:mt-0"
        >
          <div className="w-[450px] h-[750px] lg:w-[500px] lg:h-[700px] md:w-[200px] md:h-[400px] sm:w-[100px] sm:h-[200px] xs:hidden relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
