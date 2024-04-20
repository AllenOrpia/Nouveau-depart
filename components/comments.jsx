import Link from "next/link";
import React from "react";

import SingleComment from "./single-comment";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-3">Comments</h2>
      {status === "authenticated" ? (
        <div className="w-full mb-12">
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Write a comment"
            className="w-full p-3 mb-3 outline-none text-black"
          ></textarea>
          <button className="button bg-red-400 text-white">Post Comment</button>
        </div>
      ) : (
        <Link href={"/login"} className="button bg-red-500 mb-12">Login to post a comment</Link>
      )}
      <div className="mt-12">
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  );
};

export default Comments;
