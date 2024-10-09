import React from 'react'
import Carousel from '../components/carousel'
import Categories from '../components/categories'
import Offers from '../components/offers'
import BlogGrid from '../components/bloggrid'


const Home = () => {
  return (
    <div>
      <Carousel/>
      <Categories/>
      <Offers/>
      <BlogGrid/>
    </div>
  )
}

export default Home

