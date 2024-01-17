"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Hi! I&apos;m Ronny
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Backend Developer", 1000, "Software Engineer", 1000]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            <ul>
              <li>"Everyday, I'm a little bit better."</li>
              <li>
                "Any fool can make something complicated. It takes a genius to
                make it simple."
              </li>
              <li>"the things what i must to do anyway"</li>
            </ul>
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-gradient-to-br from-violet-500 to-blue-700 hover:from-blue-500  text-white"
            >
              Hire Me
            </Link>
            <button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-gradient-to-br from-violet-500 to-blue-700 hover:from-blue-500 text-white mt-3">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[180px] h-[180px] lg:w-[360px] lg:h-[360px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={275}
              height={275}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
