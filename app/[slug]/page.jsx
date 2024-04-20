import Comments from "@/components/comments";
import Menu from "@/components/menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <main className="container mx-auto p-12 sm:p-8 lg:p-0 mt-28">
      <section
        id="infoContainer"
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusamus magnam, provident sequi adipisci, vero explicabo rem
            beatae, eos debitis ratione consequatur iusto omnis deleniti velit
            corporis quasi in laudantium.
          </h1>
          <div className="flex items-center gap-3">
            
              <Image
                src={"/p1.jpeg"}
                alt=""
                width={50}
                height={50}
                className="rounded-full  mr-3 w-12 h-12"
              />
            
            <div className="flex flex-col ">
              <span className="text-gray-400">John Doe</span>
              <span className="text-gray-400">1.02.24</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-[30rem]">
            <Image src={"/p1.jpeg"} alt="" fill  objectFit="cover" priority  className=" " />

        </div>
        

        
        
        
      </section>

      <section className=" flex gap-5">
        <div className="flex-[5] my-12">
          <h2 className="text-3xl font-bold mb-3">Hello World!</h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rem
            totam dolores temporibus cumque quos perspiciatis ut ab magni ea, illo
            accusamus? Nesciunt nihil molestiae cupiditate minima architecto porro
            reprehenderit.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rem
            totam dolores temporibus cumque quos perspiciatis ut ab magni ea, illo
            accusamus? Nesciunt nihil molestiae cupiditate minima architecto porro
            reprehenderit.
          </p>
          <Comments />
        </div>
        <Menu className=" flex-[2]"/>
      </section>
    </main>
  );
};

export default SinglePage;
