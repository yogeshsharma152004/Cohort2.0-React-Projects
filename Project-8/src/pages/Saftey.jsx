import React from 'react'
import Safety from '../assets/saftey.webp'
const Saftey = () => {
  return (
   <div className='relative'>
    <div className='h-screen w-full '>
       <img className='w-full h-full object-cover ' src={Safety} alt="" />
    </div>
    
    <div className="absolute inset-0 bg-black/30"></div>

    <div className='absolute top-52 left-36   '>
        <h1 className='text-[120px]  leading-none font-[zagma] text-white'>Redefining <br /> saftey.</h1>
    </div>
    </div>
  )
}

export default Saftey
