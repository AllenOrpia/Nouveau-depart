import React from "react";
import Link from "next/link";
import Image from "next/image";
import culture from '@/public/culture.png'

const MenuItems = ({ withImage }) => {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-5">
        {withImage && (
          <div className="flex-[1] relative aspect-[1/1] ">
            <Image
              src={culture}
              alt="Image"
              fill
              width={0}
              height={0}
              className="object-cover rounded-[50%] border-2 border-gray-400"
            />
          </div>
        )}

        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-lg font-semibold py-[2px] px-2 rounded-[.5rem] text-white bg-red-300/[.7] w-max">
            Travel
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            quis animi.
          </p>
          <div>
            <span>John Doe - </span>
            <span className="text-gray-400">10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className="flex items-center gap-5">
        {
          withImage &&  (
            <div className="flex-[1] relative aspect-[1/1] ">
              <Image
                src={culture}
                alt=""
                fill
                className="object-cover rounded-[50%] border-2 border-gray-400"
              />
            </div>

          )
        }
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-lg font-semibold py-[2px] px-2 rounded-[.5rem] text-white bg-orange-300/[.5] w-max">
            Culture
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            quis animi.
          </p>
          <div>
            <span>John Doe - </span>
            <span className="text-gray-400">10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className="flex items-center gap-5">
      {
          withImage &&  (
            <div className="flex-[1] relative aspect-[1/1] ">
              <Image
                src={culture}
                alt=""
                fill
                className="object-cover rounded-[50%] border-2 border-gray-400"
              />
            </div>
            
          )
        }
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-lg font-semibold py-[2px] px-2 rounded-[.5rem] text-white bg-emerald-400/[.4] w-max">
            Food
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            quis animi.
          </p>
          <div>
            <span>John Doe - </span>
            <span className="text-gray-400">10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className="flex items-center gap-5">
      {
          withImage &&  (
            <div className="flex-[1] relative aspect-[1/1] ">
              <Image
                src={culture}
                alt=""
                fill
                className="object-cover rounded-[50%] border-2 border-gray-400"
              />
            </div>
            
          )
        }
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-lg font-semibold py-[2px] px-2 rounded-[.5rem] text-white bg-pink-200 w-max">
            Fashion
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            quis animi.
          </p>
          <div>
            <span>John Doe - </span>
            <span className="text-gray-400">10.03.2024</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MenuItems;
