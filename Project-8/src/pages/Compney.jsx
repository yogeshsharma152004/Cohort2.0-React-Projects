import React from 'react'
import ComImg from '../assets/compney.webp'
const Compney = () => {
  return (
    <div className='relative'>
   <div className='h-screen w-full '>
          <img className='w-full h-full object-cover' src={ComImg} alt="" />
   </div>

   <div className="absolute inset-0 bg-black/30"></div>

    <div className='absolute top-52 left-36   '>
        <h1 className='text-[120px]  leading-none font-[zagma] text-white'>We built our <br /> own road.</h1>
    </div>

    </div>
  )
}

export default Compney
