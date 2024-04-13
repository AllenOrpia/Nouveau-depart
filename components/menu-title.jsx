import React from 'react'

const MenuTitle = ({subheading, heading}) => {
  return (
    <>
        <span className="block text-sm text-gray-500">{subheading}</span>
        <h2 className="mb-12 text-xl sm:text-3xl font-bold">{heading}</h2>
    
    
    </>
  )
}

export default MenuTitle