import React from "react";
import Link from "next/link";
import Image from "next/image";
import culture from "@/public/culture.png";

const getData = async () => {
  try {
    const res = await fetch("https://nouveau-depart-pearl.vercel.app/api/menu", {
      cache: "no-store",
    });
    

    
    
    return res.json();

  } catch(err) {
    throw new Error(err.message)
  }

};

const MenuItems = async () => {
  const posts = await getData();
  

  return (
    <>
      {posts?.map( (item) => (
        <Link href={`/posts/${item.slug}`} className="flex items-center gap-5" key={item._id}>
          

          <div className="flex-[4] flex flex-col gap-1">
            <span className={`text-lg font-semibold py-[2px] px-2 rounded-[.5rem]  w-max ${item.catSlug}`}>
              {item.catSlug}
            </span>
            <p>
              {item.desc.substring(0,100)}..
            </p>
            <div>
              <span>{item.user.name} - </span>
              <span className="text-gray-400">{item.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
