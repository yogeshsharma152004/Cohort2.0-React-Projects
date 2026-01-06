import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Detailes from '../components/Detailes'
import Data from '../components/Data'
import About from '../components/About'
import Adavantage from '../components/Adavantage'
import Quality from '../components/Quality'
const Landing = () => {
  return (
    <div className='p-4 md:py-5 md:px-6 lg:py-5 lg:px-10 '>
        <Navbar/>
        <Hero/>
        <Detailes/>
        <Data/>
        <About/>
        <Adavantage/>
        <Quality/>
    </div>
  )
}

export default Landing