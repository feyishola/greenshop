import React from 'react'

const InputFormWithButton = ({button="Join",label="enter your email address..."}) => {
  return (
    <div className="relative my-6">
      {/* Container for input and button */}
      <div className="flex">
        {/* Input Field */}
        <div className="relative flex-grow">
          <input 
            id="id-l01" 
            type="text" 
            name="id-l01" 
            placeholder="enter your email address..." 
            className="w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" 
          />
          <label 
            htmlFor="id-l01" 
            className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500  peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            {label}
          </label>
        </div>

        {/* Join Button */}
        <button 
          type="submit" 
          className="h-12 px-6 bg-primary-color text-white font-semibold rounded transition-colors duration-300 hover:bg-green-600 focus:bg-green-600"
        >
          {button}
        </button>
      </div>
    </div>
  )
}

export default InputFormWithButton;
