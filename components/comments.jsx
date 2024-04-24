'use client'

import Link from "next/link";
import React, { useContext, useState } from "react";
import useSWR from "swr";

import SingleComment from "./single-comment";
import { useSession } from "next-auth/react";
import { ThemeContext } from "@/context/theme-context";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};


const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { theme } = useContext(ThemeContext);
  
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    
  };

  
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-3">Comments</h2>
      { status === 'unauthenticated' ? (
          <Link href={"/login"} className="button bg-red-500 mb-12">Login to post a comment</Link>
      ) : (
        <form 
        onSubmit={handleSubmit}
        className="w-full mb-12">
          <textarea
          onChange={ (e) => setDesc(e.target.value)}
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Write a comment"
            className="w-full p-3 mb-3 outline-none text-black"
          ></textarea>
          <button 
          className="button bg-red-400 text-white">Post Comment</button>
        </form>
      )}


      <div className=" mt-20">
        { isLoading ? (
          <div className={`w-10 h-10 animate-spin rounded-full border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'} `}></div>
        ) :
          data?.map( (item) => (
            <SingleComment item={item} key={item._id}/>
          ))
        }
      </div>
    </div>
  );
};

export default Comments;
