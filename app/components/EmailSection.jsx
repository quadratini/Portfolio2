import React from "react";
import GitHubIcon from "../../public/github-mark-white.svg";
import LinkedinIcon from "../../public/linkedin-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:gird-cols-2 my-12 mmd:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Contact me</h5>
      </div>
      <p className="text-[#ADB7BE] mb-4 max-w-md"> Want to chat?</p>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's chat!"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/quadratini">
          <Image src={GitHubIcon} alt="Github Icon" className="h-10 w-10" />
        </Link>
        <Link href="https://www.linkedin.com/in/ronny-ritprasert-35a82b183/">
          <Image src={LinkedinIcon} alt="LinkedIn Icon" className="h-10 w-11" />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
