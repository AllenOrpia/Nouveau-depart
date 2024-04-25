import React from "react";
import Pagination from "./pagination";
import Image from "next/image";
import Card from "./card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const postPerPage = 4;

  const hasPrev = postPerPage * (page - 1) > 0;
  const hasNext = postPerPage * (page - 1) + postPerPage < count;

  return (
    <div className=" flex-[5] my-12">
      <h2 className="mb-12 text-xl sm:text-3xl font-bold">Recent Posts</h2>
      <div id="posts">
        {posts?.map((item) => (
          <React.Fragment key={item._id}>
            <Card item={item} />
          </React.Fragment>
        ))}
      </div>
      {
      posts.length === 0 ? (
        <span className="">No Blogs found...</span>
      ) :
       (<Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />)
      }
    </div>
  );
};

export default CardList;
