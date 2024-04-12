"use client";

import React, { useState } from "react";
import Link from "next/link";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href={"/login"} className="sm:inline-block hidden">Login</Link>
      ) : (
        <>
          <Link href={"/write"} className="sm:inline-block hidden">Post</Link>
          <span className=" cursor-pointer">Log Out</span>
        </>
      )}
      <div
        onClick={() => setOpen(!open)}
        id="burger"
        className="w-[20px] h-[16px] flex flex-col justify-between cursor-pointer sm:hidden"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-gray-50 h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-10 text-xl font-bold">
          <Link href={"/"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status === "notauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Post</Link>
              <span className=" cursor-pointer">Log Out</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
