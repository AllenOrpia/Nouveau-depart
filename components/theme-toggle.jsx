"use client";

import React, { useContext } from "react";
import Image from "next/image";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";
import { ThemeContext } from "@/context/theme-context";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div

      onClick={toggle}
      className="w-[3rem] h-[1.5rem] rounded-[50px] cursor-pointer flex items-center justify-between relative transition-all"
      style={
        theme === 'dark'
          ? {background: 'white'} 
          : {background: '#0f172a'}
      }
    >
      <Image src={moon} alt="moon logo" width={20} height={20} />
      <div
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: 'white' }
        }
        className="w-[1.1rem] h-[1.1rem] rounded-[50%] absolute transition-all"
      ></div>
      <Image src={sun} alt="sun logo" width={20} height={20} />
    </div>
  );
};

export default ThemeToggle;
