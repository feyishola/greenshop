import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Productcard = ({img,productname,price,oldprice}) => {
    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
      setIsActive(!isActive);
    };

  return (
    <div className={`text-start relative cursor-pointer ${isActive ? 'border-t-2 border-green-500' : ''}`} onClick={handleCardClick}>
        {oldprice? 
            <div className='w-[80px] h-[29px] absolute bg-primary-color text-white font-medium top-8 left-0'>13% OFF</div>
        :""}
        <div className='w-[300px] h-[302px] bg-[#FBFBFB] flex justify-center align-middle'>
            <img src={img} width={'250px'} height={'250px'} alt='item'/>
        </div>
        <p className='text-[16px]'>{productname}</p>
        <div className='flex flex-row gap-2'>
            <p className='text-[18px] font-bold text-[#46A358]'>{price}</p>
            <p className='text-[18px] font-normal text-gray-400 line-through'>{oldprice}</p>
        </div>

        {isActive && (
        <div className="absolute bottom-16 left-10 flex space-x-2">
          <FaSearch className="text-gray-600 hover:text-green-500" size={20} />
          <FaHeart className="text-gray-600 hover:text-green-500" size={20} />
          <FaShoppingCart className="text-gray-600 hover:text-green-500" size={20} />
        </div>
      )}
        
    </div>
  )
}

export default Productcard