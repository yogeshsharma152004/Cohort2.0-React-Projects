import React from 'react'
import CarImg from '../assets/careers.webp'
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Careers = () => {

    const navigate = useNavigate()

  return (
    <div>

    <div className='h-screen w-full '>
              <img className='w-full h-full object-cover' src={CarImg} alt="" />
    </div>

    <div className="absolute inset-0 bg-black/30"></div>

    <div className='absolute top-52 left-36   '>
        <h1 className='text-[120px]  leading-none font-[zagma] text-white'>Find your <br /> place in <br /> Physical AI.</h1>


        <p onClick={() => {
            navigate('/careerinfo')
        }} className='bg-pink-500 text-xl cursor-pointer text-white p-3 rounded-full w-fit mt-10' ><FaArrowDown/></p>
    </div>

     
    </div>
    
  )
}

export default Careers
