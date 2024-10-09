import React from 'react'

const BlogCard = ({ image, blog, heading, date }) => {
  return (
    <div className='w-[268px] md:w-full  h-auto flex flex-col font-custom transition-transform hover:scale-105 duration-300 ease-in-out shadow-md'>
      
      {/* Image Section */}
      <div className='w-full h-[195px] overflow-hidden'>
        <img 
          src={image} 
          alt='blogimage' 
          className='w-full h-full object-cover' 
        />
      </div>
      
      {/* Content Section */}
      <div className='w-full h-auto bg-[#FBFBFB] p-4 text-start flex flex-col justify-between'>
        <p className='text-[14px] font-medium text-primary-color mb-2'>{date}</p>
        <h3 className='text-[18px] md:text-[21px] font-bold leading-tight mb-2'>{heading}</h3>
        <p className='text-[#727272] text-[14px] font-normal mb-4 line-clamp-3'>{blog}</p>
        <p className='text-primary-color font-medium cursor-pointer hover:underline'>Read More</p>
      </div>
      
    </div>
  )
}

export default BlogCard;
