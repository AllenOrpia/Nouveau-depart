import React from "react";
import Image from "next/image";
import culture from "@/public/culture.png";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div
      id="post"
      className="mb-12 flex flex-col lg:flex-row items-center gap-10"
      key={key}
    >
        {
          item.img && (
            <div className="flex-1 h-96 relative">
              <Image src={item.img} className="object-cover " alt="Blog Image" fill />
            </div>

          )
        }
      
      <div className="flex-1 flex flex-col gap-5">
        <Link href={`/posts/${item.slug}`}>
          <h3 className="text-3xl font-bold">{item.title}</h3>
        </Link>
        <p className="text-lg">{item.desc.substring(0,60)}</p>
        <div>
          <span className="text-gray-400">{item.createdAt.substring(0,10)} - </span>
          <span className="text-red-500 font-medium text-lg">
            {item.catSlug}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`} className="underline underline-offset-4">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
