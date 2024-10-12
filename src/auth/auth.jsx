import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { ReactComponent as Facebook } from "../assets/facebook 1.svg";
import { ReactComponent as Google } from "../assets/google 1.svg";
import { BiHide } from "react-icons/bi";
import { GrView } from "react-icons/gr";

const AuthModal = ({ isOpen, onClose }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false); 

  const handlePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  if (!isOpen) return null;

  return (
    <main className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 z-50">
      <div className="max-w-[500px] w-full text-gray-600 space-y-8 bg-white relative" style={{ borderBottom: "10px solid #46A358" }}>
        <div className='w-[300px] mx-auto'>
          <IoMdClose size={25} className='absolute right-4 cursor-pointer text-[#46A358] top-3' onClick={onClose} />
          <div className="text-center">
            <div className="mt-6 md:mt-12 mb-3 md:mb-[53px] space-y-2">
              <p>
                <span
                  className={`text-xl font-medium sm:text-xl cursor-pointer ${!isRegister ? 'text-[#46A358]' : 'text-gray-800'}`}
                  onClick={() => setIsRegister(false)}
                >
                  Login
                </span>
                <span className='text-[18px]'> | </span>
                <span
                  className={`text-xl font-medium sm:text-xl cursor-pointer ${isRegister ? 'text-[#46A358]' : 'text-gray-800'}`}
                  onClick={() => setIsRegister(true)}
                >
                  Register
                </span>
              </p>
              <p className="text-[13px]">
                {isRegister ? "Enter your details to create an account." : "Enter your username and password to login."}
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            {isRegister && (
              <>
                
                <div>
                  <input
                    type="email"
                    name='email'
                    placeholder='Enter your email address'
                    required
                    className="w-full mt-4 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-color shadow-sm rounded-md"
                  />
                </div>
              </>
            )}

            <div>
                <input
                type="text"
                name='username'
                placeholder='Username'
                required
                className="w-full mt-4 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-color shadow-sm rounded-md"
                />
            </div>

            {/* Password Input */}
            <div className='relative'>
              <input
                type={viewPassword ? "text" : "password"}
                name='password'
                placeholder={isRegister ? 'Password' : 'Password'}
                required
                className="w-full mt-4 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-color shadow-sm rounded-md"
              />
              <BiHide size={25} className={`${viewPassword ? 'hidden' : 'absolute bottom-2 right-2 cursor-pointer'}`} onClick={handlePasswordView} />
              <GrView size={25} className={`${viewPassword ? 'absolute bottom-2 right-2 cursor-pointer' : 'hidden'}`} onClick={handlePasswordView} />
            </div>

            {/* Confirm Password input for Register mode */}
            {isRegister && (
              <div className='relative mb-10'>
                <input
                  type={viewPassword ? "text" : "password"}
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  required
                  className="w-full mt-4 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-color shadow-sm rounded-md"
                />
              </div>
            )}

            {/* Forgot Password link for Login mode */}
            {!isRegister && (
              <p className='text-[14px] text-primary-color text-right mt-[14px] mb-7'>
                Forgot Password?
              </p>
            )}

            {/* Submit Button */}
            <button className="w-full px-4 py-2 text-white font-medium bg-primary-color rounded-lg duration-150">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          <div className="relative mt-11 mb-7">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or {isRegister ? "register" : "login"} with
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4 text-sm font-medium">
            <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <Google />
              Continue with Google
            </button>
          </div>

          <div className="space-y-4 text-sm font-medium mt-4 mb-14">
            <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <Facebook />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthModal;
