import React, { useState } from 'react';
import img1 from '../assets/image 1.svg'
import img2 from '../assets/product-20-320x320 1.svg';
import img3 from '../assets/image 10.svg'
import img4 from '../assets/image 9.svg'
import { Link } from 'react-router-dom';
import { FaHeart,FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa"; 
import { CiMail } from "react-icons/ci";


const images = [img1,img2,img3,img4];
const ProductPage = () => {

    const [mainImage, setMainImage] = useState(img1);
    const [active, setActive] = useState("S");
    const [count, setCounter] = useState(0);
    const [activeScreen, setActiveScreen] = useState("productdescription");
    // const [view, setView] = useState
    

    const handleImageClick = (image) => {
        setMainImage(image); 
    };

    const increment = () => {
        setCounter(prevCount => prevCount + 1); 
      };
    
      const decrement = () => {
        setCounter(prevCount => (prevCount > 0 ? prevCount - 1 : 0));  
      };

    const handleSizeChange = (selectedSize)=>{
        setActive(selectedSize);
    };

    const handleScreenChange = (screen)=>{
        setActiveScreen(screen)
    }

  return (
    <section class="pt-1 md:pt-9"> 
        <div class="container mx-auto px-4">
            <nav class="flex">
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
            </ol>
            </nav>

            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
                {/* Main Image Display */}
                <div className="lg:order-2 lg:mx-auto lg:my-auto">
                    <div className="max-w-xl overflow-hidden rounded-lg">
                        <img className="h-full w-full max-w-full object-cover" src={mainImage} alt="main view" />
                    </div>
                </div>

                {/* Thumbnail Images */}
                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                    {/* Map through the images array */}
                    {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        mainImage === image ? 'border-primary-color' : 'border-transparent'
                        } text-center`}
                        onClick={() => handleImageClick(image)}
                    >
                        <img className="h-full w-full object-cover" src={image} alt={`side view ${index + 1}`} />
                    </button>
                    ))}
                </div>
                </div>
            </div>
            </div>

            <div class="lg:col-span-2 lg:row-span-2">
                <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl text-left">Barberton Daisy</h1>

                <div class="pt-3 flex items-center justify-between" style={{borderBottom:"1px solid gray"}}>
                    <div>
                        <p className='text-base font-bold text-primary-color'>$119.00</p>
                    </div>
                    <div className='flex flex-row gap-1 '>
                        <div class="flex items-center">
                            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                            </svg>
                            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                            </svg>
                            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                            </svg>
                            <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                            </svg>
                            <svg class="block h-4 w-4 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                            </svg>
                        </div>
                        <p class="text-sm font-normal text-gray-500">19 Customer Review</p>
                    </div>
                </div>
                {/* description */}
                <div className='text-left'>
                    <p className='text-[15px] font-medium py-3'>Short Description:</p>
                    <p className='text-[14px] font-normal'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>

                    <p className='text-[15px] font-medium pt-3 pb-2'>Size:</p>
                    <div className='flex gap-2 cursor-pointer'>
                        {
                            ["S", "M", "L", "XL"].map((size, index) => (
                            <span 
                                key={index} 
                                className={`border  py-1 px-3 text-base flex items-center justify-center rounded-[100%] ${active === size ?'border-primary-color text-primary-color':'border-gray-400 text-slate-400'}`}
                                onClick={()=>handleSizeChange(size)}
                                >
                                {size}
                            </span>
                            ))
                        }
                    </div>
                    <div className='mt-3 flex flex-row gap-2'>
                        {/* Counter */}
                        <div className="flex items-center space-x-6">
                            <button 
                                className="px-3 py-2 bg-primary-color  text-white rounded-full text-xl" 
                                onClick={decrement}
                                disabled={count === 0}
                            >
                                -
                            </button>
                            <span className="text-xl">{count}</span>
                            <button 
                                className="px-3 py-2 bg-primary-color text-white rounded-full text-xl" 
                                onClick={increment}
                            >
                                +
                            </button>
                        </div>
                        <button className='px-1 bg-primary-color text-white rounded-lg'>BUY NOW</button>
                        <button className='px-1 border border-primary-color text-primary-color rounded-lg'>ADD TO CART</button>
                        <div className='border border-primary-color rounded-lg flex justify-center items-center w-10'><FaHeart className="text-primary-color hover:text-gray-400 " size={20} /></div>
                    </div>
                    {/* details */}
                    <div className='mt-5 space-y-1'>
                        <p className='text-[15px]'><span className='text-gray-500'>SKU: </span>1995751877966</p>
                        <p className='text-[15px]'><span className='text-gray-500'>Categories:</span> Potter Plants</p>
                        <p className='text-[15px]'><span className='text-gray-500'>Tags:</span> Home, Garden, Plants</p>
                        <div className='flex flex-row gap-5'>
                            <p className='text-[15px]'>Share this products:</p> 
                            <div className='flex flex-row gap-3'>
                                <FaFacebookF size={15} />
                                <FaTwitter size={15}/>
                                <FaLinkedinIn size={15}/>
                                <CiMail size={15}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div class="lg:col-span-3">
                <div class="border-b border-gray-300">
                    <nav class="flex gap-4">
                        <p class={` py-4 text-sm font-medium  ${activeScreen ==="productdescription" ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-900'}`} onClick={()=>handleScreenChange("productdescription")}>Product Description </p>

                        <p class={`inline-flex items-center text-sm font-medium  ${activeScreen ==="reviews" ? 'border-b-2 border-primary-color text-primary-color' : 'text-gray-900'}`} onClick={()=>handleScreenChange("reviews")}>
                        Reviews (19)
                        </p>
                    </nav>
                </div>
                {/* Display product description */}
                {activeScreen === "productdescription" && (

                    <div class="mt-8 flow-root sm:mt-12 text-start space-y-3">
                        <p lassName="text-[14px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                        <p lassName="text-[14px]">Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>

                        <h3  className='text-[14px] font-bold'>Living Room:</h3>
                        <p className="text-[14px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <h3 className='text-[14px] font-bold'>Dining Room:</h3>
                        <p className="text-[14px]">The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>

                        <h3 className='text-[14px] font-bold'>Office:</h3>
                        <p className="text-[14px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                )}
                {/* Display Reviews */}
                {activeScreen === "reviews" && (

                    <div className='h-10 md:h-80'>
                        <p>No Reviews yet</p>
                    </div>
                )}
            </div>
            </div>
        </div>
    </section>

  )
}

export default ProductPage