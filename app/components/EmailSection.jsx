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
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {" "}
        Want to chat?
      </p>
      <div>
        <form className="flex flex-col gap-4">
          <label
            htmlFor="email"
            type="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="youremail@gmail.com"
          />
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
