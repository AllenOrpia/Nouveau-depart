import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/p1.jpeg'
import Link from 'next/link';

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
            <h2 className=' text-lg sm:text-xl lg:text-2xl font-semibold'>Embark on a Journey of Discovery and Inspiration</h2>
            <p className='text-sm sm:text-md md:text-lg font-light'>A haven for those seeking inspiration, connection, and the courage to embrace change. Dive into a world of shared experiences, where each tale holds the power to uplift, inspire, and transform.</p>
            <span>Start Your Journey Today</span>
            <Link href={'/blogs'} className='button w-max bg-red-400  text-white animate-bounce'>Explore</Link>
          </div>
        </div>

    </section>
  )
}

export default Hero