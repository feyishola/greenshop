import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Productcard = ({img,productname,price,oldprice,marginTop}) => {
    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
      setIsActive(!isActive);
    };

  return (
    <div className={`text-start relative cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out md:shadow-md ${isActive ? 'border-t-2 border-green-500' : ''} ${marginTop}`} onClick={handleCardClick}>
        {oldprice? 
            <div className='w-[80px] h-[29px] absolute bg-primary-color text-white font-medium top-8 left-0'>13% OFF</div>
        :""}
        <div className='w-full md:w-[300px] h-auto md:h-[302px] bg-[#FBFBFB] flex justify-center align-middle'>
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

// import React, { useState } from 'react';
// import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

// const Productcard = ({ img, productname, price, oldprice }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleCardClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div
//       className={`relative cursor-pointer p-3 border rounded-lg hover:shadow-lg transition-all duration-300 ${isActive ? 'border-t-2 border-green-500' : ''}`}
//       onClick={handleCardClick}
//     >
//       {/* Discount Badge */}
//       {oldprice ? (
//         <div className='w-[80px] h-[29px] absolute bg-primary-color text-white font-medium top-3 left-3 flex justify-center items-center'>
//           13% OFF
//         </div>
//       ) : ""}

//       {/* Product Image */}
//       <div className='w-full h-[250px] flex justify-center items-center bg-[#FBFBFB]'>
//         <img src={img} alt={productname} className='w-full h-full object-cover' />
//       </div>

//       {/* Product Info */}
//       <p className='text-[16px] mt-3 font-semibold'>{productname}</p>
//       <div className='flex flex-row gap-2 mt-1'>
//         <p className='text-[18px] font-bold text-[#46A358]'>{price}</p>
//         {oldprice && <p className='text-[18px] font-normal text-gray-400 line-through'>{oldprice}</p>}
//       </div>

//       {/* Action Icons (shown when active) */}
//       {isActive && (
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
//           <FaSearch className="text-gray-600 hover:text-green-500" size={20} />
//           <FaHeart className="text-gray-600 hover:text-green-500" size={20} />
//           <FaShoppingCart className="text-gray-600 hover:text-green-500" size={20} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Productcard;
