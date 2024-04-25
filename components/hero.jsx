import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/p1.jpeg'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Hero = () => {
 

  return (
    <section className=' mt-8'>
        <h1 className='text-5xl font-light'>
          <span className='font-bold '>Welcome to Nouveau Depart: </span> Where Every Story Marks a New Beginning
        </h1>
        <div className='flex flex-col lg:flex-row lg:items-center mt-16 gap-12'>
          <div className='flex-1  min-h-full relative h-[50rem]'>
            <Image 
            className='object-cover'
            src={heroImg} alt='Picture of a cost' fill  priority  />
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <h2 className=' text-xl sm:text-2xl lg:text-4xl font-semibold'>Embark on a Journey of Discovery and Inspiration</h2>
            <p className='text-lg sm:text-xl md:text-2xl font-light'>A haven for those seeking inspiration, connection, and the courage to embrace change. Dive into a world of shared experiences, where each tale holds the power to uplift, inspire, and transform.</p>
           
            <span className='text-lg text-gray-500'>Start your journey today</span>
            <Link href={'/posts'} className='button w-max bg-red-400  text-white animate-bounce'>Explore</Link>

            
          </div>
        </div>

    </section>
  )
}

export default Hero