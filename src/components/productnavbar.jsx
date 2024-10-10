import React, { useState } from 'react';

const ProductNavbar = () => {
  const [activeTab, setActiveTab] = useState('All Plants');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navItems = ['All Plants', 'New Arrivals', 'Sales'];

  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center py-2 mb-8' >
      <div className='flex space-x-4'>
        <ul className='flex space-x-4'>
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleTabClick(item)}
              className={`cursor-pointer pb-2 ${
                activeTab === item
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden md:flex mt-2 md:mt-0'>
        <label className='text-gray-600'>
          Sort by: 
          <select className='ml-2 p-1 rounded-md bg-transparent'>
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Popularity</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductNavbar;
