import React, { useState } from 'react';
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { PiSlidersHorizontal } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home"); 
  const navigate = useNavigate();

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    
    if (menuItem === "Home") {
      navigate("/");
    } else if (menuItem === "Plant Care") {
      navigate("/plantcare"); 
    } else {
      navigate(`/${menuItem.toLowerCase()}`);
    }
  };

  return (
    <nav className="w-full md:border-b md:border-gray-300">
      <div className="hidden md:flex items-center justify-between h-[53px] px-4 lg:px-8 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 relative">
          <ul className="flex gap-[90px]">
            {["Home", "Shop", "Plant Care", "Blog"].map((menuItem) => (
              <li
                key={menuItem}
                onClick={() => handleMenuClick(menuItem)}
                className={`text-gray-700 hover:text-green-600 pb-2 cursor-pointer relative ${
                  activeMenu === menuItem ? "text-green-600" : ""
                }`}
              >
                {menuItem}
                {/* Active border bottom */}
                {activeMenu === menuItem && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-green-600"></div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Icons and Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <CiSearch aria-label="Search" size={24} className="cursor-pointer" />
          <CiShoppingCart aria-label="Shopping Cart" size={24} className="cursor-pointer" />
          <button className="flex items-center space-x-1 bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700">
            <IoIosLogOut size={20} />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        {/* <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* Mobile View - Only Search Bar and Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white ">
        {/* Mobile search bar */}
        <input
          type="text"
          placeholder="Find your plants"
          className="flex-grow border border-gray-300 p-2 rounded-md focus:outline-none"
        />
        {/* Search Button */}
        <button className="ml-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
          {/* <CiSearch size={20} /> */}
          <PiSlidersHorizontal size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
