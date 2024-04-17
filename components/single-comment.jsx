import React from "react";
import Image from "next/image";
import p1 from "@/public/p1.jpeg";
const SingleComment = () => {
  return (
    <div className="flex flex-col gap-2 my-8">
      <div className="flex gap-2 items-center">
            <Image
                src={p1}
                width={50}
                height={50}
                className="rounded-full  mr-3 w-12 h-12"
            />
            <div className="flex flex-col ">
                <span className="text-gray-400">John Doe</span>
                <span className="text-gray-400">1.02.24</span>
            </div>
          
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum
        ipsa eos animi tempora eaque quam. Nobis deserunt maiores voluptate,
        similique rerum eum quibusdam? Numquam et maiores totam? Obcaecati,
        quidem.
      </p>
    </div>
  );
};

export default SingleComment;
