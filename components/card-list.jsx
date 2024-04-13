import React from "react";
import Pagination from "./pagination";
import Image from "next/image";
import Card from "./card";

const CardList = () => {
  return (
    <div className=" flex-[5] my-12">
      <h2 className="mb-12 text-xl sm:text-3xl font-bold">Recent Posts</h2>
      <div id="posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
