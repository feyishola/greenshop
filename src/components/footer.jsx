import React from 'react'
import pot1 from '../assets/pot1.svg';
import pot2 from '../assets/pot2.svg';
import pot3 from '../assets/pot3.svg';
import InputFormWithButton from './input';
import { ReactComponent as Logo } from "../assets/Logo.svg";
import Calling from "../assets/Calling.svg";
import Location from "../assets/Location.svg";
import Message from "../assets/Message.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import paymenttype from "../assets/paymenttype.svg";

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col bg-secondary-color mt-10'>
      <div className='h-full md:h-[250px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-start p-[25px]'>
        <div className='w-full md:w-[204px] h-[201px] flex flex-col items-center md:items-start'>
          <img src={pot1} width={"77px"} height={"95px"} alt='pot1'/>
          <p className='text-[17px] font-bold pt-[17px] pb-[9px]'>Garden Care</p>
          <p className='text-[#727272] text-[13px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className='w-full md:w-[204px] h-[196px] flex flex-col items-center md:items-start'>
          <img src={pot2} width={"83px"}  height={"90px"} alt='pot2'/>
          <p className='text-[17px] font-bold pt-[17px] pb-[9px]'>Plant Renovation</p>
          <p className='text-[#727272] text-[13px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className='w-full md:w-[204px] h-[195px] flex flex-col items-center md:items-start'>
          <img src={pot3}  width={"90px"}  height={"89px"} alt='pot3'/>
          <p className='text-[17px] font-bold pt-[17px] pb-[9px]'>Watering Graden</p>
          <p className='text-[#727272] text-[13px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className='w-full md:w-[354px] h-[201px] flex flex-col items-center md:items-start pr-0 md:pr-10'>
          <p className='text-[17px] font-bold'>Would you like to join newsletters?</p>
          <div>
            <InputFormWithButton/>
          </div>
          <p className='text-[#727272] text-[12px] font-normal'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </div>
      <div className='h-full md:h-[88px] bg-light-green w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-start p-[25px] space-y-2'>
        <div className='w-full md:w-[204px] flex flex-col items-center md:items-start'>
          <Logo/>
        </div>
        <div className='w-full md:w-[204px]  flex flex-row items-center md:items-start gap-[9px]'>
        <img src={Location} width={'20px'} height={'20px'} alt='location icon'/>
          <p className='w-full md:w-[176px] h-[22px] md:h-[44px] text-[#727272] text-[13px] font-normal'>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className='w-full md:w-[204px] flex flex-row items-center md:items-start gap-[9px]'>
        <img src={Message} width={'20px'} height={'20px'} alt='message icon'/>
          <p className='w-[165px] h-[22px] text-[#727272] text-[13px] font-normal'>contact@greenshop.com</p>
        </div>
        <div className='w-full md:w-[204px] flex flex-row items-center md:items-start gap-[9px]'>
          <img src={Calling} width={'20px'} height={'20px'} alt='calling icon'/>
          <p className='w-[112px] h-[22px] text-[#727272] text-[13px] font-normal'>+88 01911 717 490</p>
        </div>
      </div>
      <div className="h-full w-full p-[25px] grid gap-6 grid-cols-2 lg:grid-cols-4 md:h-[236px] text-center md:text-left">
        {/* My Account Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>

        {/* Help & Guide Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help & Guide</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4 flex-wrap">
            <img src={Facebook} alt="Facebook" className="w-8 h-8"/>
            <img src={Instagram} alt="Instagram" className="w-8 h-8"/>
            <img src={twitter} alt="Twitter" className="w-8 h-8"/>
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8"/>
            <img src={youtube} alt="YouTube" className="w-8 h-8"/>
          </div>
          <p className="text-sm mb-2">We accept</p>
          <img src={paymenttype} alt="Payment Methods" className="w-56 h-auto"/>
        </div>
      </div>
    </div>
    <div className='flex justify-center align-middle text-center pt-[6px] pb-[13px]'>
      <p className='w-[257px] h-[30px] text-[13px]'>© 2021 GreenShop. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer