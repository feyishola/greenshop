import React, { useState } from 'react'
import {ReactComponent as Photo} from '../assets/Group 32.svg';
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoDownloadOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const navItems = [
    {icon:<IoPersonOutline />, label:"Account Details"},
    {icon:<CiLocationOn />, label:"Address"},
    {icon:<CiShoppingCart />, label:"Orders"},
    {icon:<CiHeart />, label:"Wishlist"},
    {icon:<TbDeviceAnalytics />, label:"Reports"},
    {icon:<IoDownloadOutline />, label:"Downloads"},
    {icon:<GoAlert />, label:"Support"},
]

const AccountDetails = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const handleNavClick = (index) => {
        setActiveIndex(index); 
      };

  return (
    <div className='flex flex-col'>
        <div className='w-full flex flex-col md:flex-row gap-10 mt-7'>
    
          {/* Right Side Section - Hidden on Small Screens */}
          <div className='p-5 md:p-0'>
            <div className='w-full md:w-[310px] flex-col bg-secondary-color flex h-[440px]'>
                <p className='mt-[17px] mb-[15px] text-start text-[18px] font-bold px-4'>My Account</p>
                <ul className='flex flex-col w-full'>
                        {navItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleNavClick(index)}
                            className={`flex items-center px-4 py-3 cursor-pointer 
                            ${activeIndex === index 
                            ? 'bg-white border-l-4 border-green-500 text-green-500' 
                            : 'text-gray-600 hover:bg-gray-100'} 
                            `}
                        >
                            <span className='mr-3'>{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                        ))}
                    </ul>
                    <hr/>
                    <button className="flex items-center align-middle space-x-1  text-primary-color px-4 mt-2" onClick={()=>{navigate("/")}}>
                        <IoIosLogOut size={20} />
                        <span>Logout</span>
                    </button>
            </div>
          </div>
          {/* Left Side */}
          <div className='flex-1'>
          <div className="w-full md:flex-1">
                <p className="py-2 text-start p-5 md:p-0">Personal Information</p>
                <form>
                    <div className="w-full grid grid-cols-2 gap-2 md:gap-4 text-left space-y-5 p-5 md:p-0">
                        {/* Firstname */}
                        <div>
                            <label className="block text-gray-700 text-sm font-normal mb-2">
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
                            <label className="block text-gray-700 text-sm font-normal mb-2">
                            Lastname <span className="text-red-500">*</span>
                            </label>
                            <input
                            type="text"
                            name="lastname"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-gray-700 text-sm font-normal mb-2">
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
                            <label className="block text-gray-700 text-sm font-normal mb-2 col-span-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-row gap-2">
                                <select
                                name="phoneCode"
                                className="w-[80px] shadow appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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
                        {/* username */}
                        <div>
                            <label className="block text-gray-700 font-normal mb-2">
                            Username <span className="text-red-500">*</span>
                            </label>
                            <input
                            type="text"
                            name="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {/* buttons */}
                        <div className=''>
                            <p>Photo</p>
                            <div className='flex flex-row gap-5'>
                                
                                <Photo/>
                                <div className='mt-1 '>
                                    <button className='bg-primary-color text-white rounded-md px-5 py-2'>Change</button>
                                    <button className='rounded-sm px-5 py-2'>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='mt-3 md:mt-9 mb-3 md:mb-5 text-start p-5 md:p-0'>Password change</p>

                     {/* current password */}
                     <div className='flex flex-col p-5 md:p-0'>
                            <label className="block text-gray-700 font-normal mb-2 text-start">
                            Current password 
                            </label>
                            <input
                            type="password"
                            name="password"
                            className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                    </div>
                      {/* New password */}
                      <div className='flex flex-col mt-3 md:mt-[30px] p-5 md:p-0'>
                            <label className="block text-gray-700 font-normal mb-2 text-start">
                            New password 
                            </label>
                            <input
                            type="password"
                            name="newpassword"
                            className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                    </div>
                      {/* confirm new password */}
                      <div className='flex flex-col mt-3 md:mt-[30px] p-5 md:p-0'>
                            <label className="block text-gray-700 font-normal mb-2 text-start">
                            Confirm new password 
                            </label>
                            <input
                            type="password"
                            name="confirmnewpassword"
                            className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                    </div>

                    {/* Button */}
                    <div className='flex justify-start p-5 md:p-0'>
                        <button className='mt-12 bg-primary-color text-white rounded-md px-5 py-2'>Save Change</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AccountDetails

  
