import React from 'react'
import InfoImg from '../assets/careerinfo.webp'
const CareerInfo = () => {
  return (
    <div className='bg-[#ded59c28]  px-40 py-10'>

        
        <div className='flex items-center justify-center h-screen w-full py-10'>
            <img className='w-5xl object-cover rounded-2xl ' src={InfoImg} alt="" />
        </div>

        <div className='flex justify-between '>
            <h1 className='font-[zagma] text-7xl  '>Pioneering <br /> tomorrow, <br /> together.</h1>

            <p className='font-[zagma] text-2xl  whitespace-nowrap'>We wake up each day with a clear mission that goes far <br /> beyond technology—we're empowering humanity to build a <br /> better tomorrow. Our team pours their expertise into <br /> pioneering a groundbreaking approach that no one else has <br /> dared to imagine. This bold vision has propelled Waabi into <br /> a global force with every achievement reflecting the <br /> unwavering commitment of the Waabi team.</p>
        </div>
    </div>
  )
}

export default CareerInfo
