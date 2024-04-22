"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { status} = useSession()
    
  const router = useRouter();

  if (status === 'loading') {
      return <div className="h-screen flex items-center justify-center">Loading...</div>
  };

  if (status === 'unauthenticated') {
      router.push('/')
  }
  return (
    <main className="container mx-auto h-screen p-12 sm:p-8 lg:p-0 relative">
      <div className="flex flex-col gap-8  ">
        <input type="text" placeholder="Title" className="outline-none py-12 border-none bg-transparent text-5xl placeholder-[#b3b3b1]" />
        <button onClick={() => setOpen(!open)} className="">
          <FaPlus className="text-3xl text-[#b3b3b1]" />
        </button>
        {open && (
          
          <div className="flex gap-2  z-10 w-full left-10">
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
              <CiImageOn className="text-3xl text-[#b3b3b1]" />
            </button >
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
              <CiImageOn className="text-3xl text-[#b3b3b1]" />
            </button>
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
              <CiVideoOn className="text-3xl text-[#b3b3b1]" />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Post a story..."
        />
        <button className="absolute top-0 right-[3rem] sm:right-[2rem] lg:right-0 p-3  rounded-full bg-red-400 text-white cursor-pointer hover:scale-110 hover:bg-red-500">Publish</button>
      </div>
    </main>
  );
};

export default WritePage;
