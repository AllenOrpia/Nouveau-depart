import React from 'react';
import Link from 'next/link';
import style from "@/public/style.png";
import fashion from '@/public/fashion.png';
import food from '@/public/food.png';
import travel from '@/public/travel.png';
import coding from '@/public/coding.png';
import culture from '@/public/culture.png'
const CategoryLinks = () => {
  return (
    <>
        <Link href={'/'} className="category bg-[#57c4ff31]">
            {/* <Image src={style} alt="" height={32} width={32}  className="" priority /> */}
            Style
          </Link>
          <Link href={'/'} className="category bg-[#da85c731]">
            {/* <Image src={fashion} alt="" width={32} height={32} className="rounded-[50%]" /> */}
            Fashion
          </Link>
          <Link href={'/'} className="category bg-[#7fb88133]">
            {/* <Image src={food} alt="" width={32} height={32} className="rounded-[50%]" /> */}
            Food
          </Link>
          <Link href={'/'} className="category bg-[#ff795736]">
            {/* <Image src={travel} alt="" width={32} height={32} className="rounded-[50%]" /> */}
            Travel
          </Link>
          <Link href={'/'} className="category bg-[#ffb04f45]">
            {/* <Image src={culture} alt="" width={32} height={32} className="rounded-[50%]" /> */}
            Culture
          </Link>
          <Link href={'/'} className="category bg-[#5e4fff31]">
            {/* <Image src={coding} alt="" width={32} height={32} className="rounded-[50%]" /> */}
            Coding
          </Link>
    </>
  )
}

export default CategoryLinks