import React from 'react';
import BlogCard from '../components/blogcard';
import img1 from '../assets/01.svg';
import img2 from '../assets/02.svg'
import img3 from '../assets/03.svg'
import img4 from '../assets/04.svg' 

const blogData = [
  {
    image: img1,
    date: 'September 12  |  Read in 6 minutes',
    heading: 'Cactus & Succulent Care Tips',
    blog: 'Cacti and succulents are easy-care plants for any home or patio.'
  },
  {
    image: img2,
    date: 'September 13  I Read in 2 minutes',
    heading: 'Top 10 Succulents for Your Home',
    blog: 'Best in hanging baskets. Prefers medium to high light.'
  },
  {
    image: img3,
    date: 'July 22  |  Read in 4 minutes',
    heading: 'Best Indoor Plants for Low Light',
    blog: 'These plants thrive in low-light conditions, perfect for apartments.'
  },
  {
    image: img4,
    date: 'June 10  |  Read in 3 minutes',
    heading: 'Best Houseplants Room by Room',
    blog: 'Gardening has numerous benefits for your health and well-being.'
  }
];

const BlogGrid = () => {
  return (
    <div className="w-full font-custom text-center mt-[138px] mb-[100px]">
      <h3 className='text-[30px] font-bold'>Our Blog Posts</h3>
      <p className='text-[14px] font-normal mt-[15px] mb-[35px]'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            date={blog.date}
            heading={blog.heading}
            blog={blog.blog}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
