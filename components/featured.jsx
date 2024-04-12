import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/p1.jpeg'

const Featured = () => {
  return (
    <section className=' mt-8'>
        <h1 className='text-5xl font-light'>
          <span className='font-bold'>Hey, I'm Allen!</span> Discover my stories and journey as I explore new hobbies!
        </h1>
        <div className='flex flex-col md:flex-row items-center mt-16 gap-12'>
          <div className='flex-1 h-[31.25rem] relative'>
            <Image 
            className=' object-cover'
            src={heroImg} alt='Picture of a cost' fill/>
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <h2 className=' text-3xl '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod sapiente obcaecati itaque optio quibusdam, odit commodi dolore doloremque quos voluptas quia nihil libero, tenetur saepe iusto aspernatur numquam ut omnis?</h2>
            <p className='text-xl font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi tempore soluta consequuntur quam recusandae fuga beatae laborum quasi nobis minima autem labore, tenetur odit enim minus, nostrum voluptate sunt in?</p>
            <button className='button w-max text-gray-950 bg-gray-200/[.7] '>Read More</button>
          </div>
        </div>

    </section>
  )
}

export default Featured