import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between'>
      <button className='w-[6rem] border-none p-4 bg-red-500 text-white cursor-pointer rounded-xl'>Previous</button>
      <button className='w-[6rem] border-none p-4 bg-red-500 text-white cursor-pointer rounded-xl'>Next</button>
    </div>
  )
}

export default Pagination