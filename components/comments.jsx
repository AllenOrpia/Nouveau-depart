'use client'

import Link from "next/link";
import React, { useContext, useState } from "react";
import useSWR from "swr";

import SingleComment from "./single-comment";
import { useSession } from "next-auth/react";


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
    setDesc('')
    
  };

  
  return (
    <div className="mt-12">
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
            value={desc}
          ></textarea>
          <button 
          className="button bg-red-400 text-white">Post Comment</button>
        </form>
      )}


      <div className=" mt-20">
        { isLoading ? (
          <div className={`w-10 h-10 animate-spin rounded-full border-b-2 `}></div>
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
