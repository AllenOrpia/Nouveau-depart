import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async () => {
  const postPerPage = 4;

  const query = {
      take: postPerPage,
      orderBy: {
          views: 'desc'
      },
      include: {
        user: true
      }
  }

  try {
    const posts = await prisma.post.findMany(query);

    return new NextResponse(JSON.stringify(posts, { status: 200 }));

  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
