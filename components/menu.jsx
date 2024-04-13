import Image from "next/image";
import Link from "next/link";
import React from "react";

import CategoryLinks from "./category-links";
import MenuItems from "./menu-items";
import MenuTitle from "./menu-title";


const Menu = () => {
  return (
    <div className="flex-[2] my-12">
      <div>
        <MenuTitle subheading={"What's hot"} heading={"Menu"} />
        <div className="flex flex-col gap-8 my-8">
          <MenuItems withImage={false} />
        </div>
      </div>

      <div>
        <MenuTitle subheading={"Explore"} heading={"Categories"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
          <CategoryLinks />
        </div>
      </div>

      <div>
        <MenuTitle subheading={"Recommendations"} heading={"Editor's top picks"}/>
        <div className="flex flex-col gap-8 my-8">
          <MenuItems withImage={true} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
