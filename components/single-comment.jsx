import React from "react";
import Image from "next/image";
import p1 from "@/public/p1.jpeg";
const SingleComment = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 my-8" key={item._id}>
      <div className="flex gap-2 items-center">
        {item?.user?.image && (
          <Image
            src={item?.user?.image}
            width={50}
            height={50}
            className="rounded-full  mr-3 w-12 h-12"
          />
        )}
        <div className="flex flex-col ">
          <span className="text-gray-400">{item.user.name}</span>
          <span className="text-gray-400">
            {item.createdAt.substring(0, 10)}
          </span>
        </div>
      </div>
      <p className="">{item.desc}</p>
    </div>
  );
};

export default SingleComment;
