import React from "react";
import Image from "next/image";
import instagram from "@/public/instagram.png";
import linkedin from "@/public/LI-In-Bug.png";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import AuthLinks from "./auth-links";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center min-h-[6rem] p-12 sm:p-8 lg:p-0 ">
      <div id="socials" className="lg:flex gap-3 flex-1 hidden ">
        <Image src={instagram} alt="instagram logo" width={24} height={24} />
        <Image src={linkedin} alt="instagram logo" width={24} height={24} />
      </div>
      <span
        id="logo"
        className="flex-1  lg:text-center font-bold text-xl sm:text-3xl px-4 sm:px-0"
      >
        Nouveau Depart
      </span>
      <div
        id="links"
        className="flex flex-1 items-center justify-end sm:justify-center gap-3 sm:gap-5 text-md sm:text-lg sm:px-0 "
      >
        <Link href={"/"} className="hidden sm:inline-block ">
          Home
        </Link>
        <Link href={"#contact"} className="hidden sm:inline-block ">
          Contact
        </Link>
        <Link href={"#about"} className="hidden sm:inline-block ">
          About
        </Link>
        
          <AuthLinks />
          <ThemeToggle />
        
      </div>
    </header>
  );
};

export default Header;
