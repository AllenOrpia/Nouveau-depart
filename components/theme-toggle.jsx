"use client";

import React, { useContext } from "react";
import Image from "next/image";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";
import { ThemeContext } from "@/context/theme-context";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    // <div

    //   onClick={toggle}
    //   className="w-[3rem] h-[1.5rem] rounded-[50px] cursor-pointer flex items-center justify-between relative transition-all "
    //   style={
    //     theme === 'dark'
    //       ? {background: 'white'} 
    //       : {background: '#0f172a'}
    //   }
    // >
    //   <Image src={moon} alt="moon logo" width={20} height={20}  />
    //   <div
    //     style={
    //       theme === "dark"
    //         ? { left: 2, background: "#0f172a" }
    //         : { right: 2, background: 'white' }
    //     }
    //     className="w-[1.1rem] h-[1.1rem] rounded-[50%] absolute transition-all z-50"
    //   ></div>
    //   <Image src={sun} alt="sun logo" width={20} height={20} />
      
    // </div>
    <div onClick={toggle} className={`p-2 border rounded-full transition-all ${theme === 'dark' ? 'bg-gray-200 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-100' : 'hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400 '}`}
      
    >
        {
          theme === 'dark' ? 
          (
            <BsMoonStars className="w-5 h-5 text-blue-400"/>
          ) :
          (
            <IoSunnyOutline className="w-5 h-5 text-yellow-500"/>
          )
        }
    </div>
  );
};

export default ThemeToggle;
