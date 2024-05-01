"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState, useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { app } from "@/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import dynamic from "next/dynamic";



const storage = getStorage(app);

const WritePage = () => {
  const ReactQuill =  useMemo( () => dynamic( () => import('react-quill'), { ssr: false,
  loading: () => <p>Loading...</p>}), [])

  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  

  
  
  

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

 

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data?.slug}`);
    }
  };
  return (
    <main className="container mx-auto h-screen p-12 sm:p-8 lg:p-0 relative">
      <div className="flex flex-col gap-8  ">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="outline-none py-12 border-none bg-transparent text-5xl placeholder-[#b3b3b1]"
        />
        <button onClick={() => setOpen(!open)} className="">
          <FaPlus className="text-3xl text-[#b3b3b1]" />
        </button>
        {open && (
          <div className="flex flex-col gap-3  z-10 w-full left-10">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className=" hidden"
            />
            <label htmlFor="category" className="text-2xl text-[#b3b3b1]">Select Category</label>
            <select
              id="category"
              className={`w-1/4 text-[#b3b3b1]`}
              placeholder="Select Category"
              onChange={(e) => setCatSlug(e.target.value)}
            >
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
            <div className="flex gap-2">
              <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
                <label htmlFor="image">
                  <CiImageOn className="text-3xl text-[#b3b3b1]" />
                </label>
              </button>
              <button className="w-12 h-12 p-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
                <CiVideoOn className="text-3xl text-[#b3b3b1]" />
              </button>
            </div>
          </div>
        )}
         < ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="absolute top-1 right-[3rem] sm:right-[2rem] lg:right-0 p-3  rounded-full bg-red-400 text-white cursor-pointer hover:scale-110 hover:bg-red-500"
        >
          Publish
        </button>
      </div>
    </main>
  );
};

export default WritePage;
