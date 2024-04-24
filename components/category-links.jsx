import React from "react";
import Link from "next/link";
import style from "@/public/style.png";
import fashion from "@/public/fashion.png";
import food from "@/public/food.png";
import travel from "@/public/travel.png";
import coding from "@/public/coding.png";
import culture from "@/public/culture.png";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http:localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryLinks = async () => {
  const data = await getData();
  return (
    <>
      {data?.map((item) => (
        <Link href={`/`} className={`category ${item.title} hover:scale-105 capitalize`} key={item._id}>
          {item.img && (
            <Image
              src={item.img}
              alt="Category Image"
              height={32}
              width={32}
              className="w-8 h-8 object-cover rounded-full"
              priority
            />
          )}

          {item.title}
        </Link>
      ))}
    </>
  );
};

export default CategoryLinks;
