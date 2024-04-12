import CardList from "@/components/card-list";
import CategoryList from "@/components/category-list";
import Featured from "@/components/featured";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-24">
        <Featured />
        <CategoryList />
        <div className="flex gap-12">
          <CardList />
          <Menu />
        </div>
    </div>
  );
}
