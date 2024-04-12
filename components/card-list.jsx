import React from "react";
import Pagination from "./pagination";
import Image from "next/image";
import SinglePost from "./single-post";

const CardList = () => {
  return (
    <div className=" flex-[5] my-12">
      <h2>Recent Posts</h2>
      <div id="posts">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
