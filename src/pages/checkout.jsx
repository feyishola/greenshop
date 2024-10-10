import React from 'react'
import InputFormWithButton from '../components/input';
import { Link } from 'react-router-dom';


const Checkout = () => {
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
                <li class="text-left">
                    <div class="flex items-center">
                        <span class="mx-2 text-gray-400">/</span>
                        <div class="-m-1">
                            <Link to={'/checkout'} class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Checkout </Link>
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
        {/* nav ends*/}

        {/* Billing Address and order starts */}
        <div className='flex flex-col md:flex-row gap-0 md:gap-32'>
        <div className="w-full md:flex-1">
            <p className="p-2 font-semibold text-start">Billing Address</p>
            <form>
                <div className="w-full grid grid-cols-2 gap-2 text-left space-y-5 p-5 md:p-0">
                    {/* Firstname */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Firstname <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        name="firstname"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Lastname */}
                    <div className='mt-0' style={{marginTop:"0"}}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Lastname <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        name="lastname"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Country / Region */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                        Country / Region <span className="text-red-500">*</span>
                        </label>
                        <select
                        name="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkOlive"
                        >
                        <option value="">Select a country / region</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Town / City */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Town / City <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        name="town"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Street / Address */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Street / Address <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        name="address"
                        placeholder="House number and street name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Apartment */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            apartment
                        </label>
                        <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                        State <span className="text-red-500">*</span>
                        </label>
                        <select
                        name="state"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkOlive"
                        >
                        <option value="">Select a state</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Zip */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Zip <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="text"
                        name="zip"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                        type="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Phone Number */}
                    <div >
                        <label className="block text-gray-700 text-sm font-bold mb-2 col-span-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-row">
                            <select
                            name="phoneCode"
                            className="w-[80px] shadow appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Code</option>
                                <option value="+234">+234</option>
                                <option value="+996">+996</option>
                            </select>
                            <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        
                    </div>
                </div>

                {/* Ship to a different address */}
                <div className="mt-4 flex flex-row gap-5 px-5 md:px-0">
                    <input type="radio" name="shipToDifferent" />
                    <label className="block text-gray-700 font-bold">
                        Ship to a different address?
                    </label>
                    
                </div>

                {/* Order Notes */}
                <div className="mt-4 flex flex-col justify-start p-5 md:p-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                        Order notes (optional)
                    </label>
                    <textarea
                        name="orderNotes"
                        className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </form>
        </div>


            {/* orders start */}
            <div className='w-full md:w-[328px] px-8 md:px-0'>
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
                <button className='bg-primary-color text-white w-full p-3 rounded-md'>Proceed To Checkout</button>
                <p className='mt-[15px] text-[15px] text-primary-color'>Continue Shopping</p>
            </div>
            
        </div>
        {/*  Billing Address and order ends */}
    </div>
  )
}

export default Checkout


// <div className="">
                  
//                   <div
//                   className="hidden md:grid grid-cols-4 gap-4 p-2 font-semibold text-start"
//                   style={{ borderBottom: '1px solid gray' }}
//                   >
//                       <div>Products</div>
//                       <div>Price</div>
//                       <div>Quantity</div>
//                       <div>Total</div>
//                   </div>

//                   {data.length === 0 ? (
                 
//                   <div className="flex justify-center items-center h-full">
//                       <img src={nodata} width="200px" height="200px" alt="No Items in Cart Yet" />
//                   </div>
//                   ) : (
                  
//                   data.map((info, index) => {
//                       return (
//                       <div
//                           key={index}
//                           className="overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center mb-2 p-4 h-auto md:h-[70px] bg-white mt-4 md:bg-secondary-color shadow-xl md:shadow-none mx-3 md:mx-0 rounded-xl md:rounded-none"
//                       >
                          
//                           <div className="flex flex-row gap-5 ">
                              
//                               <div className='w-[65px] relative'>
//                                   <img src={info.url} width={"100%"} height={'100%'} alt={info.productname} className='absolute bottom-0' />
//                               </div>
//                               <div>
//                                   <p className="font-medium text-xs">{info.productname}</p>
//                                   <p className="hidden md:flex text-[10px] text-gray-500">{info.sku}</p>
                                  
//                                   <div className='block md:hidden text-primary-color'>{info.total}</div>
//                               </div>
//                           </div>

                        
//                           <div className='hidden md:flex'>{info.price}</div>

                          
//                           <div>
//                               <div className="flex items-center space-x-6">
//                                   <button
//                                   className="px-3 py-2 bg-primary-color text-white rounded-full text-xl"
//                                   onClick={() => decrement(index)}
//                                   disabled={info.quantity === 0}
//                                   >
//                                   -
//                                   </button>
//                                       <span className="text-xl">{info.quantity}</span>
//                                   <button
//                                   className="px-3 py-2 bg-primary-color text-white rounded-full text-xl"
//                                   onClick={() => increment(index)}
//                                   >
//                                   +
//                                   </button>
//                               </div>
//                           </div>

//                           <div className="hidden md:flex flex-row gap-20 items-center  ">
//                               <span className='text-primary-color'>{info.total}</span>
//                               <button onClick={() => deleteItem(index)} aria-label="Delete item">
//                                   <AiOutlineDelete size={20} />
//                               </button>
//                           </div>
//                       </div>
//                       );
//                   })
//                   )}
//               </div>