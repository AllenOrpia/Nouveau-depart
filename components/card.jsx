import React from "react";
import Image from "next/image";
import culture from "@/public/culture.png";
import Link from "next/link";

const Card = () => {
  return (
    <div id="post" className="mb-12 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1 h-96 relative">
        <Image src={culture} className="object-cover " alt="" fill />
      </div>
      <div className="flex-1 flex flex-col gap-5">
       
        <Link href={""}>
          <h3 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h3>
        </Link>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe
          sequi suscipit dolores nobis cum, est aperiam quo consequatur et
          expedita harum asperiores omnis laboriosam. Doloribus quam quae nam
          culpa?
        </p>
        <div>
          <span className="text-gray-400">11.02.2023 - </span>
          <span className="text-red-500 font-medium text-lg">Culture</span>
        </div>
        <Link href={""} className="underline underline-offset-4">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
