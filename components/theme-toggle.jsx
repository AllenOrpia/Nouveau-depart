"use client";

import React, { useContext, useEffect, useState} from "react";

import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme,setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', "light");
      document.documentElement.classList.remove("dark");
    };
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') || null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add("dark");
      };
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [])
 

  return (
   
  
      <button className={`fixed bottom-8 right-8  h-12 w-12 bg-opacity-80 backdrop-blur-[0.5rem] border-white border-opacity-40 flex items-center justify-center rounded-full hover:scale-125 active:scale-100 transition-all ${theme === 'dark' ? 'bg-gray-100 text-blue-400' : 'bg-[#ffb04f45]' }`}
      onClick={toggleTheme}>
        {
          theme === 'light' ? 
          < IoSunnyOutline />
          : 
          <BsMoonStars />
        }
      </button>
  
  );
};

export default ThemeToggle;
