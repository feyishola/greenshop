import React from 'react'
import Navbar from '../components/navbar'

const LayoutWithoutFooter = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[1400px] justify-center mx-auto my-0 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default LayoutWithoutFooter