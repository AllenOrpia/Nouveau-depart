import { NextResponse } from "next/server"
import prisma from "@/utils/connect";

export const GET = async(req) => {

    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");

    const postPerPage = 4;

    try{
        const posts = await prisma.post.findMany({
            take: postPerPage,
             skip: postPerPage * (page - 1),
});
        return new NextResponse(JSON.stringify(posts,{status:200}))
    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong!'},{status:500}))
    }
}