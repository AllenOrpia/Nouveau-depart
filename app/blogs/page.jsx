
import CardList from "@/components/card-list";
import Menu from "@/components/menu";
import Card from "@/components/card";
import Pagination from "@/components/pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};




const BlogsPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { posts} = await getData(page);
  console.log(posts)
  return (
    <main className=" container mx-auto p-12 sm:p-8 lg:p-0">
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          posts?.map( (item) => (
            
              <Card item={item} />
            
          ))
        }
          
        </div>
        
    </main>
  )
}

export default BlogsPage