"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/theme-context";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useContext(ThemeContext);

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
        <div className="line"
        style={
          theme === 'dark'
            ? {background: 'white'} 
            : {background: '#0f172a'}
        }></div>
        <div className="line"
        style={
          theme === 'dark'
            ? {background: 'white'} 
            : {background: '#0f172a'}
        }></div>
        <div className="line"
        style={
          theme === 'dark'
            ? {background: 'white'} 
            : {background: '#0f172a'}
        }></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-gray-50 h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-10 text-xl font-bold
        "
        onClick={() => setOpen(!open)}
        style={
          theme === 'dark'
            ? {background: '#0f172a'} 
            : {background: 'rgb(249 250 251/1)'}
        }>
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
