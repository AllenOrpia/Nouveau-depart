import CardList from "@/components/card-list";
import CategoryList from "@/components/category-list";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className="container mx-auto flex min-h-screen flex-col p-12 sm:p-8 lg:p-0">
        <Hero />
        <CategoryList />
        <div className="flex flex-col lg:flex-row gap-12" id="menu">
          <CardList page={page} />
          <Menu />
        </div>
    </div>
  );
}
