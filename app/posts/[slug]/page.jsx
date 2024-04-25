import Comments from "@/components/comments";
import Menu from "@/components/menu";
import Image from "next/image";
import React from "react";
import { Remarkable } from 'remarkable';

const md = new Remarkable();

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  const renderMarkdownToHTML = (markdown) => {
    const renderedHTML = md.render(markdown);
    return {__html: renderedHTML};
  };

  const markup = renderMarkdownToHTML(data?.desc)

  

  return (
    <main className="container mx-auto  p-12 sm:p-8 lg:p-0 mt-28">
      <section
        id="infoContainer"
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            {data?.title}
          </h1>
          <div className="flex items-center gap-3">
            {data?.user?.image && (
              <Image
                src={data.user.image}
                alt="User Image"
                width={50}
                height={50}
                className="rounded-full  mr-3 w-12 h-12"
              />
            )}

            <div className="flex flex-col ">
              <span className="text-gray-400">{ data?.user.name }</span>
              <span className="text-gray-400">{ data?.createdAt?.substring(0,10) }</span>
            </div>
          </div>
            <div className="" dangerouslySetInnerHTML={markup} />
        </div>
        <div className="flex-1 relative h-[30rem]">
          {
            data?.img && (
              <Image
                src={ data.img }
                alt="Post image"
                fill
                priority
                className=" object-cover"
              />

            )
          }
        </div>
      </section>

      <section className=" flex gap-5">
        <div className="flex-[5] my-12 " >
          <h2 className="mb-12 text-xl sm:text-3xl font-bold">Comments</h2>
          <Comments postSlug={slug} />
        </div>
        <Menu className=" flex-[2]" />
      </section>
    </main>
  );
};

export default SinglePage;
