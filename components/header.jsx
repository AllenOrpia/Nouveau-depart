
import Image from "next/image";
import instagram from "@/public/instagram.png";
import linkedin from "@/public/LI-In-Bug.png";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import AuthLinks from "./auth-links";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center min-h-[6rem] p-12 sm:p-8 lg:p-0  ">
      <div  className="flex-1  ">
          <Link href={'/'} className="flex-start font-bold text-3xl italic hover:scale-125 ">ND</Link>
      </div>
      
      <div
        id="links"
        className="flex flex-[2] items-center justify-end lg:justify-center gap-3 sm:gap-5  sm:text-lg lg:py-1  "
      >
        <Link href={"/"} className="hidden lg:inline-block hover:scale-125 ">
          Home
        </Link>
        <Link href={"/posts"} className="hidden lg:inline-block hover:scale-125 ">
          Blogs
        </Link>
        
        <Link href={"/about"} className="hidden lg:inline-block hover:scale-125 ">
          About
        </Link>
        
        
          <AuthLinks />
          
      </div>
      <div id="socials" className="lg:flex justify-end gap-3 flex-1 hidden ">
        <Link href={'https://www.instagram.com/orpiaallen/'} className="p-2 border rounded-full dark:bg-gray-100 bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-125 active:scale-100 transition-all hover:bg-[#bc2a8d]/[.1]">
          <FaInstagram className="w-6 h-6 text-[#bc2a8d] " />
        </Link>
        <Link href={'https://www.linkedin.com/in/allen-orpia-386b2213b/'} className="p-2 border rounded-full  dark:bg-gray-100 bg-opacity-80 backdrop-blur-[0.5rem]  hover:scale-125 active:scale-100 transition-all hover:bg-[#0077b5]/[.1]">
          <FaLinkedin className="w-6 h-6 text-[#0077b5]  " />
        </Link>
      </div>
    </header>
  );
};

export default Header;
