import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

export default function ProductList({ data, increment, decrement, deleteItem }) {
  return (
    <>
      {data.map((info, index) => (
        <div
          key={index}
          className="overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center mb-2 p-4 h-auto md:h-[70px] bg-white mt-4 md:bg-secondary-color shadow-xl md:shadow-none mx-3 md:mx-0 rounded-xl md:rounded-none"
        >
          {/* Product Info */}
          <div className="flex flex-row gap-5">
            <div className="w-[65px] relative">
              <img
                src={info.url}
                width={"100%"}
                height={'100%'}
                alt={info.productname}
                className="absolute bottom-0"
              />
            </div>
            <div>
              <p className="font-medium text-xs">{info.productname}</p>
              <p className="hidden md:flex text-[10px] text-gray-500">{info.sku}</p>
              {/* Price (Mobile View) */}
              <div className="block md:hidden text-primary-color">{info.total}</div>
            </div>
          </div>

          {/* Price (Desktop View) */}
          <div className="hidden md:flex">{info.price}</div>

          {/* Quantity Controller */}
          <div className="flex items-center space-x-6">
            <button
              className="px-3 py-2 bg-primary-color text-white rounded-full text-xl"
              onClick={() => decrement(index)}
              disabled={info.quantity === 0}
            >
              -
            </button>
            <span className="text-xl">{info.quantity}</span>
            <button
              className="px-3 py-2 bg-primary-color text-white rounded-full text-xl"
              onClick={() => increment(index)}
            >
              +
            </button>
          </div>

          {/* Total and Delete Button (Desktop View) */}
          <div className="hidden md:flex flex-row gap-20 items-center">
            <span className="text-primary-color">{info.total}</span>
            <button onClick={() => deleteItem(index)} aria-label="Delete item">
              <AiOutlineDelete size={20} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
