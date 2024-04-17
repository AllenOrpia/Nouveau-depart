import CardList from '@/components/card-list';
import React from 'react';
import Menu from '@/components/menu';

const BlogPage = () => {
  return (
    <main className='container mx-auto p-12 sm:p-8 lg:p-0'>
        <h1 className='w-full p-2 bg-orange-500 text-center text-3xl font-bold rounded-lg'>Style Blog</h1>
        <div className="flex flex-col lg:flex-row gap-12">
            <CardList />
            <Menu />
        </div>
    
    </main>
  )
}

export default BlogPage