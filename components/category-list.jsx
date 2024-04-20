import React from "react";
import Link from "next/link";
import Image from "next/image";


import CategoryLinks from "./category-links";
const CategoryList = () => {
  return (
    <section>
      <h2 className="my-12 text-xl sm:text-3xl font-bold">Popular Categories</h2>
      <div id="categories" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <CategoryLinks />
      </div>
      
    </section>
  );
};

export default CategoryList;
