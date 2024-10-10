import React, { useEffect } from 'react';
import flowervase1 from '../assets/flowervase1.svg';
import { IoArrowForward } from "react-icons/io5";
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: false, // Disable autoplay for testing
      breakpoints: {
        768: { perView: 1 }, // 1 slide on mobile
        1024: { perView: 1 } // 1 slide on medium screens
      }
    });

    glide.mount();

    const handleResize = () => {
      glide.update(); // Update Glide on resize
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      glide.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="glide w-full h-auto md:bg-[#F5F5F5] bg-[#E4F2E7] rounded-lg md:rounded-none mt-[10px] p-4 md:p-8 ">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {/* Slide 1 */}
            <div className="glide__slide flex flex-row">
              <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
                <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-xl md:text-[70px] font-black leading-tight">LET’S MAKE A BETTER <span className='text-primary-color'>PLANET</span></p>
                </div>
                <div className="w-full md:w-[550px]">
                  <p className="hidden md:block md:text-sm ">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                  <p className='block md:hidden text-[10px]'> We are an online plant shop offering a wide range </p>
                </div>
                <button className='hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base' onClick={()=>{navigate("/shop")}}>SHOP NOW</button>
                <div className='flex md:hidden  flex-row mt-2'onClick={()=>{navigate("/shop")}}>
                  <span className='text-primary-color'>SHOP NOW</span>
                  <IoArrowForward size={20} color='#4BA358'/>
                </div>
                
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
            {/* Slide 2 */}
            <div className="glide__slide flex flex-row bg-[#F5F5F5] md:bg-[#E4F2E7]">
            <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
                <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-xl md:text-[70px] font-black leading-tight">LET’S MAKE A BETTER <span className='text-primary-color'>PLANET</span></p>
                </div>
                <div className="w-full md:w-[550px]">
                  <p className="hidden md:block md:text-sm ">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                  <p className='block md:hidden text-[10px]'> We are an online plant shop offering a wide range </p>
                </div>
                <button className='hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base' onClick={()=>{navigate("/shop")}}>SHOP NOW</button>
                <div className='flex md:hidden  flex-row mt-2' onClick={()=>{navigate("/shop")}}>
                  <span className='text-primary-color'>SHOP NOW</span>
                  <IoArrowForward size={20} color='#4BA358'/>
                </div>
                
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
            {/* Slide 3 */}
            <div className="glide__slide flex flex-row">
            <div className="my-auto md:my-0 flex-grow font-custom mb-6 md:mb-0 text-start">
                <p className="w-full text-[10px] md:text-base mt-0 md:mt-20">Welcome to GreenShop</p>
                <div className="w-full md:w-[530px] h-auto">
                  <p className="text-xl md:text-[70px] font-black leading-tight">LET’S MAKE A BETTER <span className='text-primary-color'>PLANET</span></p>
                </div>
                <div className="w-full md:w-[550px]">
                  <p className="hidden md:block md:text-sm ">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                  <p className='block md:hidden text-[10px]'> We are an online plant shop offering a wide range </p>
                </div>
                <button className='hidden md:block w-[140px] h-[40px] rounded-lg bg-primary-color text-white mt-[55px] font-custom font-bold text-base' onClick={()=>{navigate("/shop")}}>SHOP NOW</button>
                <div className='flex md:hidden  flex-row mt-2' onClick={()=>{navigate("/shop")}}>
                  <span className='text-primary-color'>SHOP NOW</span>
                  <IoArrowForward size={20} color='#4BA358'/>
                </div>
                
              </div>
              <div className="w-full md:w-[518px] relative flex justify-center md:justify-end">
                <img
                  src={flowervase1}
                  className="absolute bottom-2 -left-5 md:left-5 md:bottom-10 w-[100px] md:w-[135px] h-auto"
                  alt="flower vase small"
                />
                <img
                  src={flowervase1}
                  className="w-[200px] md:w-[518px] h-auto"
                  alt="flower vase large"
                />
              </div>
            </div>
          </div>
        </div>

                {/* Carousel indicators */}
        <div className="glide__bullets" data-glide-el="controls">
          <button className="glide__bullet glide__bullet--active" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>

      </div>
    </div>
  );
}

export default Carousel;