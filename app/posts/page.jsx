import CardList from "@/components/card-list";
import Menu from "@/components/menu";

const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main className="container mx-auto p-12 sm:p-8 lg:p-0 border-t-2 ">
      <h1 className={`w-full p-2 mt-3 text-center text-3xl font-bold rounded-lg capitalize underline `}>All Blogs</h1>
      <div>
      <div className="flex flex-col lg:flex-row gap-12 ">
            <CardList page={page} />
            <Menu />
        </div>
      </div>
    </main>
  )
}

export default page