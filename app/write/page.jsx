"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <main className="container mx-auto h-screen p-12 sm:p-8 lg:p-0">
      <div className="flex flex-col gap-8 relative">
        <input type="text" placeholder="Title" className="outline-none py-12 border-none bg-transparent text-5xl placeholder-[#b3b3b1]" />
        <button onClick={() => setOpen(!open)} className="">
          <FaPlus className="text-3xl text-[#b3b3b1]" />
        </button>
        {open && (
          <div className="flex gap-2 absolute z-10 w-full left-10">
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full">
              <CiImageOn className="text-3xl text-[#b3b3b1]" />
            </button >
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full">
              <CiImageOn className="text-3xl text-[#b3b3b1]" />
            </button>
            <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full">
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
        <button className="absolute -top-2 lg:top-8 right-0 p-3 rounded-full bg-red-400 text-white cursor-pointer">Publish</button>
      </div>
    </main>
  );
};

export default WritePage;
