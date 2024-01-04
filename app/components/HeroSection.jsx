"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Hi! I&apos;m Ronny
              </span>
              <br></br>
              <TypeAnimation
                sequence={["Web Developer", 1000, "Software Engineer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div>
              <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                Hire Me
              </button>
              <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                Download CV
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;