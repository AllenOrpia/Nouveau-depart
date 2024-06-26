import { NextResponse } from "next/server"
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async(req) => {

    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const postPerPage = 4;
    
    const query = {
        take: postPerPage,
        skip: postPerPage * (page - 1),
        where: {
            ...(cat && {catSlug: cat})
        },
        orderBy: {
          createdAt: 'desc'
        }
    }

    try{
        
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where})
]);
        return new NextResponse(JSON.stringify({posts, count},{status:200}))
    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong!'},{status:500}))
    }
}


// CREATE POST

export const POST = async (req) => {
    const session = await getAuthSession();
  
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
      );
    }
  
  
    try {
      const body = await req.json();
      const post = await prisma.post.create({
        data: { ...body, userEmail: session.user.email },
      });
  
      return new NextResponse(JSON.stringify(post, { status: 200 }));
  
    } catch(err) {
      
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  }