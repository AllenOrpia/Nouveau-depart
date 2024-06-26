import CardList from '@/components/card-list';
import React from 'react';
import Menu from '@/components/menu';

const CategoryPage = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <main className='container mx-auto p-12 sm:p-8 lg:p-0 border-t-2 '>
        <h1 className={`w-full p-2 mt-3 text-center text-3xl font-bold rounded-lg capitalize underline `}>{cat} Blogs</h1>
        <div className="flex flex-col lg:flex-row gap-12 ">
            <CardList page={page} cat={cat}/>
            <Menu />
        </div>
    
    </main>
  )
}

export default CategoryPage