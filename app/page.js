import CardList from "@/components/card-list";
import CategoryList from "@/components/category-list";
import Featured from "@/components/featured";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col p-12 sm:p-8 lg:p-0">
        <Featured />
        <CategoryList />
        <div className="flex flex-col lg:flex-row gap-12">
          <CardList />
          <Menu />
        </div>
    </div>
  );
}
