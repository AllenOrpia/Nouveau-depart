"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  

  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className="lg:inline-block hidden hover:scale-125  ">Login</Link>
      ) : (
        <>
          <Link href={"/write"} className="lg:inline-block hidden hover:scale-125 ">Write</Link>
          <button className=" cursor-pointer lg:inline-block hidden hover:scale-125 " onClick={signOut}>Log Out</button>
        </>
      )}
      <div
        onClick={() => setOpen(!open)}
        id="burger"
        className=" cursor-pointer lg:hidden 0"
      >
        <button className="p-2 border rounded-full hover:bg-gray-200 ">

          <RxHamburgerMenu className="w-5 h-5"/>
        </button>
      

      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-gray-50 h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-10 text-xl font-bold z-40
        dark:bg-[#0f172a]"
       >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          {status === "unauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className=" cursor-pointer" onClick={signOut}>Log Out</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
