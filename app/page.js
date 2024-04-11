import CardList from "@/components/card-list";
import CategoryList from "@/components/category-list";
import Featured from "@/components/featured";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <Featured />
        <CategoryList />
        <div>
          <CardList />
          <Menu />
        </div>
    </main>
  );
}
