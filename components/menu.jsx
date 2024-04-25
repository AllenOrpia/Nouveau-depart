import Image from "next/image";
import Link from "next/link";
import React from "react";

import CategoryLinks from "./category-links";
import MenuItems from "./menu-items";
import MenuTitle from "./menu-title";


const Menu = () => {
  return (
    <div className="flex-[2] hidden md:block my-12">
      <div>
        <MenuTitle subheading={"What's hot"} heading={"Most Popular"} />
        <div className="flex flex-col gap-8 my-8">
          <MenuItems  />
        </div>
      </div>
      
      <div className="">
        <MenuTitle subheading={"Explore"} heading={"Categories"} />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mb-8">
          <CategoryLinks />
        </div>
      </div>

    
    </div>
  );
};

export default Menu;
