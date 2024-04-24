import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "@/public/instagram.png";
import Linkedin from "@/public/LI-In-Bug.png";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-3 p-12 md:-8 lg:px-0 lg:py-12 ">
      <div className="flex-1 flex flex-col gap-2 ">
        <h3 className="text-xl font-bold">Noveau Depart</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
          quasi! Qui atque officiis, unde quod tenetur esse quo quos
          exercitationem error? Ipsa cupiditate doloribus iste, distinctio
          obcaecati similique qui ut.
        </p>
      </div>
      <div className="flex-1 flex justify-start md:justify-end gap-4 md:gap-28">
        <div className=" flex flex-col gap-2 ">
          <span className="text-lg font-semibold underline underline-offset-2">Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Post</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className=" flex flex-col gap-2 ">
          <span className="text-lg font-semibold underline underline-offset-2">Socials</span>
          <Link href={"/"}>
            <Image src={instagram} width={28} height={28} alt="Instagram Logo" className="inline-block"/>
            <span className="px-2">Instagram</span>
          </Link>
          <Link href={"/"}>
            <Image src={Linkedin} width={28} height={28} alt="Linkedin logo" className="inline-block"/>
            <span className="px-2">Linkedin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
