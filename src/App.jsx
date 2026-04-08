import React from 'react'
import Navbar from './components/navbars/Navbar'
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import CardsSection from './components/CardsSection/CardsSection';

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <CardsSection />
    </div>
  )
}

export default App