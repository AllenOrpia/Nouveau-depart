import React from "react";
import Pagination from "./pagination";
import Image from "next/image";
import Card from "./card";

const getData = async (page) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  
  const { posts, count} = await getData(page);

  const postPerPage = 4;
  
  const hasPrev = postPerPage * (page - 1) > 0;
  const hasNext =  postPerPage * (page  - 1) + postPerPage < count;

  return (
    <div className=" flex-[5] my-12">
      <h2 className="mb-12 text-xl sm:text-3xl font-bold">Recent Posts</h2>
      <div id="posts">

        {
          posts?.map( (item) => (
            <Card key={item._id} item={item} />
          ))
        }
        
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
