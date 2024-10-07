import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[1400px] justify-center mx-auto my-0 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout