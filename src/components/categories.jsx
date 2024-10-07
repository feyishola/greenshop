import React, { useState } from 'react'
import salesbanner from "../assets/SuperSaleBanner.svg"
import product1 from "../assets/01 3.svg";
import product2 from "../assets/image 2.svg";
import product3 from "../assets/image 1.svg";
import product4 from "../assets/image 7.svg";
import product5 from "../assets/image 8.svg";
import product6 from "../assets/image 9.svg";
import product7 from "../assets/product-20-320x320 1.svg";
import product8 from "../assets/product-21-320x320 1.svg";
import product9 from "../assets/image 10.svg";
import Productcard from './productcard';
import ProductNavbar from './productnavbar';


const products = [
    {img:product1,productname:"Barberton Daisy",price:"$119.00"},
    {img:product2,productname:"Angel Wing Begonia",price:"$169.00"},
    {img:product3,productname:"African Violet",price:"$199.00", oldprice:"$199.00"},
    {img:product4,productname:"Beach Spider Lily",price:"$129.00"},
    {img:product5,productname:"Blushing Bromeliad",price:"$139.00"},
    {img:product6,productname:"Aluminum Plant",price:"$179.00"},
    {img:product7,productname:"Bird's Nest Fern",price:"$99.00"},
    {img:product8,productname:"Broadleaf Lady Palm",price:"$59.00"},
    {img:product9,productname:"Chinese Evergreen",price:"$39.00"},
]

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState("House Plants");
    const categories = ["House Plants", "Potter Plants", "Seeds", "Small Plants", "Big Plants", "Succulents", "Trerrariums", "Gardening", "Accessories"];

  return (
    <div className='w-full flex flex-col md:flex-row gap-6 mt-7'>

        {/* Right Side Section */}
        <div className='w-full md:w-[310px] flex flex-col bg-secondary-color'>
            <div className="w-full flex flex-col p-3 space-y-6">

            {/* Categories Section */}
            <div className="w-full flex flex-col space-y-3">
                <p className="text-[18px] font-bold">Categories</p>
                {categories.map((category, index) => (
                    <div 
                    key={index} 
                    className="flex justify-between text-sm md:text-base cursor-pointer"
                    onClick={() => setActiveCategory(category)}  // Set active category on click
                    >
                    <p className={`${activeCategory === category ? 'text-green-500' : ''}`}>{category}</p>
                    <p className={`${activeCategory === category ? 'text-green-500' : ''}`}>(33)</p>
                    </div>
                ))}
                </div>

            {/* Price Range Section */}
            <div className="w-full flex flex-col space-y-2">
                <p className="text-[18px] font-bold">Price Range</p>
                <p>Price: <span className="text-primary-color text-[13px]">$39 - $1230</span></p>
                <input type="range" min={0} max={100} className="w-full h-2 rounded-full bg-green-200 accent-green-500" />
                <button className="text-white bg-primary-color py-2 rounded w-[90px]">Filter</button>
            </div>

            {/* Size Section */}
            <div className="w-full flex flex-col space-y-3 ">
                <p className="text-[18px] font-bold">Size</p>
                {["Small", "Medium", "Large"].map((size, index) => (
                <div key={index} className="flex justify-between text-sm md:text-base">
                    <p>{size}</p>
                    <p>(33)</p>
                </div>
                ))}
            </div>
            </div>

            {/* Sales Banner */}
            <div className="w-full h-auto bg-secondary-color mt-6">
            <img src={salesbanner} alt="Sales Banner" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Left Side - Product Section */}
        <div className='flex-1'>
            <ProductNavbar />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-5">
            {products.map((product, index) => (
                <Productcard
                key={index}
                img={product.img}
                productname={product.productname}
                price={product.price}
                oldprice={product.oldprice}
                />
            ))}
            </div>
        </div>
    </div>

  )
}

export default Categories