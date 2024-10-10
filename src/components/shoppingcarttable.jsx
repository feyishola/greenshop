import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineDelete } from "react-icons/ai";
import nodata from "../assets/nodata.jpg";
import img1 from '../assets/image 1.svg'
import img2 from '../assets/product-20-320x320 1.svg';
import img3 from '../assets/image 10.svg'
import InputFormWithButton from './input';

const ShoppingCartTable = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([
        {
          url: img1,
          productname: 'Barberton Daisy',
          sku: 'SKU: 1995751877966',
          price: '$25',
          quantity: 2,
          total: '$50',
        },
        {
          url: img2,
          productname: 'Blushing Bromeliad',
          sku: 'SKU: 1995751877965',
          price: '$40',
          quantity: 1,
          total: '$40',
        },
        {
          url: img3,
          productname: 'Aluminum Plant',
          sku: 'SKU: 1995751877963',
          price: '$15',
          quantity: 3,
          total: '$45',
        },
      ]);


      // Increment/Decrement functions
      const increment = (index) => {
        const newData = [...data];
        newData[index].quantity += 1;
        newData[index].total = `$${newData[index].quantity * parseInt(newData[index].price.slice(1))}`;
        setData(newData);
      };
    
      const decrement = (index) => {
        const newData = [...data];
        if (newData[index].quantity > 0) {
          newData[index].quantity -= 1;
          newData[index].total = `$${newData[index].quantity * parseInt(newData[index].price.slice(1))}`;
          setData(newData);
        }
      };
    
      const deleteItem = (index) => {
        setData(data.filter((_, i) => i !== index));
      };

  return (
    <div className='pt-1 md:pt-9'>
        {/* nav starts*/}
        <nav class="flex mb-3 md:mb-[57px]">
            <ol class="flex items-center">
                <li class="text-left">
                    <div class="-m-1">
                        <Link to={'/'} class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </Link>
                    </div>
                </li>

                <li class="text-left">
                    <div class="flex items-center">
                        <span class="mx-2 text-gray-400">/</span>
                        <div class="-m-1">
                            <Link to={'/shop'} class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Shop </Link>
                        </div>
                    </div>
                </li>
                <li class="text-left">
                    <div class="flex items-center">
                        <span class="mx-2 text-gray-400">/</span>
                        <div class="-m-1">
                            <Link to={'/shoppingcart'} class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Shopping Cart </Link>
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
        {/* nav ends*/}

        {/* table and Cart Total begins */}
        <div className='flex flex-col md:flex-row gap-0 md:gap-32'>
            <div className="w-full md:flex-1">
                <div className="">
                    {/* Table Header */}
                    <div
                    className="hidden md:grid grid-cols-4 gap-4 p-2 font-semibold text-start"
                    style={{ borderBottom: '1px solid gray' }}
                    >
                        <div>Products</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>

                    {data.length === 0 ? (
                    // Display "No Data" Image when no data is available
                    <div className="flex justify-center items-center h-full">
                        <img src={nodata} width="200px" height="200px" alt="No Items in Cart Yet" />
                    </div>
                    ) : (
                    // Display the table rows when data is available
                    data.map((info, index) => {
                        return (
                        <div
                            key={index}
                            className="overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center mb-2 p-4 h-auto md:h-[70px] bg-white mt-4 md:bg-secondary-color shadow-xl md:shadow-none mx-3 md:mx-0 rounded-xl md:rounded-none"
                        >
                            {/* Product Info */}
                            <div className="flex flex-row gap-5 ">
                                
                                <div className='w-[65px] relative'>
                                    <img src={info.url} width={"100%"} height={'100%'} alt={info.productname} className='absolute bottom-0' />
                                </div>
                                <div>
                                    <p className="font-medium text-xs">{info.productname}</p>
                                    <p className="hidden md:flex text-[10px] text-gray-500">{info.sku}</p>
                                    {/* Price */}
                                    <div className='block md:hidden text-primary-color'>{info.total}</div>
                                </div>
                            </div>

                            {/* Price */}
                            <div className='hidden md:flex'>{info.price}</div>

                            {/* Quantity Controller */}
                            <div>
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
                            </div>

                            {/* Total and Delete Button */}
                            <div className="hidden md:flex flex-row gap-20 items-center  ">
                                <span className='text-primary-color'>{info.total}</span>
                                <button onClick={() => deleteItem(index)} aria-label="Delete item">
                                    <AiOutlineDelete size={20} />
                                </button>
                            </div>
                        </div>
                        );
                    })
                    )}
                </div>
            </div>

            {/* cart total */}
            <div className='w-full md:w-[400px] px-8 md:px-0'>
                <div className='p-2'style={{borderBottom:"1px solid gray"}} >
                    <p className='text-lg font-bold text-start'>Cart Totals</p>
                </div>
                <p className='text-start text-sm mt-[11px] mb-2'>Coupon Apply</p>
                <InputFormWithButton label='Enter coupon code here...' button='Apply'/>

                <div className="w-full flex flex-col space-y-3 mb-[29px]">
                    <div className="flex justify-between text-sm md:text-base cursor-pointer">
                        <p>Subtotal</p>
                        <p>$2,683.00</p>
                    </div>
                    <div className="flex justify-between text-sm md:text-base cursor-pointer">
                        <p>Coupon Discount</p>
                        <p>(-) 00.00</p>
                    </div>
                    <div className="flex justify-between text-sm md:text-base cursor-pointer">
                        <p>Shiping</p>
                        <p>$16.00</p>
                    </div>
                    <p className='text-right text-primary-color text-[12px]'>View shipping charge</p>
                    <div className="flex justify-between text-sm md:text-base cursor-pointer ">
                        <p className='text-base font-bold'>Total</p>
                        <p className='text-[18px] font-bold text-primary-color'>$2,699.00</p>
                    </div>
                </div>
                <button className='bg-primary-color text-white w-full p-3 rounded-md' onClick={()=>{navigate("/checkout")}}>Proceed To Checkout</button>
                <p className='mt-[15px] text-[15px] text-primary-color'>Continue Shopping</p>
            </div>
        </div>
        {/* table and Cart Total ends */}
    </div>
  )
}

export default ShoppingCartTable