import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-3 p-12  lg:px-0 lg:py-12   ">
      <div className="flex-1 flex flex-col gap-2 my-auto">
        <h3 className="text-xl font-bold">Noveau Depart</h3>
        <p>
          Where every story marks a new beginning. Join us on our journey of
          exploration, growth, and shared experiences. Your stories matter here.
          Start writing and let's embark on new adventures together.
        </p>
      </div>
      <div className="flex-1 flex justify-start md:justify-end gap-4 md:gap-28">
        <div className=" flex flex-col gap-2 ">
          <span className="text-lg font-semibold underline underline-offset-2">
            Links
          </span>
          <Link href={"/"}>Home</Link>
          <Link href={"/posts"}>Blogs</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/login"}>Log In</Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-lg font-semibold underline underline-offset-2">
            Socials
          </span>
          <Link href={"/"} className="flex gap-2">
            <FaInstagram className="w-6 h-6 text-[#bc2a8d]" />
            <span>Instagram</span>
          </Link>
          <Link href={"/"} className="flex gap-2">
            <FaLinkedin className="w-6 h-6 text-[#0077b5]" />
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
