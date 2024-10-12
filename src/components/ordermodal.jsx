import React from 'react'
import { IoMdClose } from "react-icons/io";
import thankyou from '../assets/thank-you 1.svg'
import img1 from '../assets/image 1.svg'
import img2 from '../assets/product-20-320x320 1.svg';
import img3 from '../assets/image 10.svg'


const OrderModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-1 md:p-0">
        <div className='h-[90%] md:h-auto w-full max-w-[578px] bg-white flex flex-col'>
            <div className='w-full h-[156px] bg-[#F4F9F5] relative' style={{borderBottom:"1px solid #46A358"}}>
                <IoMdClose size={25} className='absolute right-4 cursor-pointer text-[#46A358] top-3' onClick={onClose}/>
                <img src={thankyou} alt='thank you' className='mx-auto pt-5 w-[55px] h-[55px] md:w-[80px] md:h-[80px]' />
                <p className='py-2 md:py-4'>Your order has been received</p>
            </div>
            <div className='hidden md:flex flex-row justify-between px-10 py-5' style={{borderBottom:"1px solid #46A358"}}>
                <div className='w-[94px]'>
                  <p className='text-[14px]'>Order Number</p>
                  <p className='text-[15px] font-bold'>19586687</p>
                </div>
                <div className='w-[90px]'>
                  <p className='text-[14px]'>Date</p>
                  <p className='text-[15px] font-bold'>15 Sep, 2021</p>
                </div>
                <div className='w-[61px]'>
                  <p className='text-[14px]'>Total</p>
                  <p className='text-[15px] font-bold'>2,699.00</p>
                </div>
                <div className='w-[118px]'>
                  <p className='text-[14px]'>Payment Method</p>
                  <p className='text-[15px] font-bold'>Cash on delivery</p>
                </div>
            </div>
            <div className='pb-3 md:pb-5 px-5 md:px-10' style={{borderBottom:"10px solid #46A358"}}>
              
                <div className='mt-2 md:mt-4' >
                    <p className='text-[15px] font-bold text-start'>Order Details</p>
                </div>
                <div className='mb-2 md:mb-[18px]' style={{borderBottom:"1px solid #46A358"}}>
                  <div className='flex flex-row justify-between' style={{borderBottom:"1px solid #46A358"}}>
                      <p className='text-start text-sm mt-[11px] mb-2'>Products</p>
                      <p className='text-start text-sm mt-[11px] mb-2'>Subtotal</p>
                  </div>

                  {data.map((info, index) => {
                              return (
                              <div
                                  key={index}
                                  className="overflow-hidden grid grid-cols-2 gap-4 items-center text-center mb-1 md:mb-2 p-4 h-auto md:h-[70px] bg-white mt-1 md:mt-4 md:bg-secondary-color shadow-xl md:shadow-none mx-0 rounded-xl md:rounded-none"
                              >
                                  {/* Product Info */}
                                  <div className="flex flex-row gap-5 ">
                                      
                                      <div className='w-[65px]'>
                                          <img src={info.url}  alt={info.productname} className="w-full h-full object-contain" />
                                      </div>
                                      <div>
                                          <p className="font-medium text-xs">{info.productname}</p>
                                          <p className="hidden md:flex text-[10px] text-gray-500">{info.sku}</p>
                                          {/* Price */}
                                          <div className='block md:hidden text-primary-color'>{info.total}</div>
                                      </div>
                                  </div>

                                  {/* Total */}
                                  <div className="flex justify-end ">
                                      <p className='text-primary-color items-end '>{info.total}</p>
                                  </div>
                              </div>
                              );
                          })
                  }
                  <div className='w-[70%] mx-auto mr-0 space-y-4 mt-2 md:mt-5 pb-[10px] md:pb-[21px]'>
                    <div className="flex justify-between text-sm md:text-base cursor-pointer">
                      <p>Shiping</p>
                      <p>$16.00</p>
                    </div>
                    <div className="flex justify-between text-sm md:text-base cursor-pointer ">
                      <p className='text-base font-bold'>Total</p>
                      <p className='text-[18px] font-bold text-primary-color'>$2,699.00</p>
                    </div>
                  </div>
                </div>
              <div className='hidden md:block'>
                <p className='text-[14px]'>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
              </div>
              <div className='my-2 md:my-12'>
                <button className='w-[162px] h-[45px] bg-primary-color rounded-md text-white'>Track your order</button>
              </div>
            </div>
        </div>
      </div>
    );
}

export default OrderModal;



const data = [
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
]