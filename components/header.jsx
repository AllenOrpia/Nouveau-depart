
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
      <Link href={'/'} className="flex-1 font-bold text-3xl italic">
          ND
      </Link>
      
      <div
        id="links"
        className="flex flex-[2] items-center justify-end lg:justify-center gap-3 sm:gap-5  sm:text-lg lg:py-1  "
      >
        <Link href={"/"} className="hidden lg:inline-block ">
          Home
        </Link>
        <Link href={"/posts"} className="hidden lg:inline-block ">
          Blogs
        </Link>
        
        <Link href={"/about"} className="hidden lg:inline-block ">
          About
        </Link>
        
        
          <AuthLinks />
          <ThemeToggle />
      </div>
      <div id="socials" className="lg:flex justify-end gap-3 flex-1 hidden ">
        <Link href={'/'} className="p-2 border rounded-full hover:bg-gray-200">
          <FaInstagram className="w-6 h-6 text-[#bc2a8d] " />
        </Link>
        <Link href={'/'} className="p-2 border rounded-full hover:bg-gray-200">
          <FaLinkedin className="w-6 h-6 text-[#0077b5]  " />
        </Link>
      </div>
    </header>
  );
};

export default Header;
