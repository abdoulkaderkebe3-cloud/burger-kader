import React from 'react'
import HeroTop from '../components/marketing/pagesections/HeroTop.jsx'
import LastProducts from '../components/marketing/pagesections/LastProducts.jsx'
import Products from '../components/marketing/pagesections/Products.jsx'
import ContenuePro from '../components/marketing/pagesections/ContenuePro.jsx'
import Event from '../components/marketing/pagesections/Event.jsx'
import Booking from '../components/marketing/pagesections/booking.jsx'
import Footer from '../components/marketing/pagesections/Footer.jsx'
export default function HomePage() {
  return (
    <div className="">
      <HeroTop/>
                    <div className="bg-red-500 w-full h-20 sm:bg-blue-500 md:bg-yellow-600 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-500"></div>

      <LastProducts/>
      <Products/>
      <ContenuePro/>
      <Event/>
      <Booking/>
      <Footer/>
    </div>
  )
}
