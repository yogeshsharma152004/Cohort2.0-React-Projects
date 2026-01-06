import React from 'react'
import HeroImg from '../assets/hero.png'
import { GoArrowDown } from "react-icons/go";

const Hero = () => {
  return (
     <section className='mt-5 overflow-hidden relative '>
          <img className=' w-full h-[60vh]  md:h-[75vh]  lg:h-[85vh] object-cover object-top rounded-xl ' src={HeroImg} alt="" />

        <div className=" absolute bottom-0 w-full text-white px-4  md:px-10 lg:px-15 ">
            <h1 className='font-[chill] text-4xl  md:text-7xl  lg:text-8xl '>DESIGN <br /> <span className='ml-10 md:ml-20 lg:ml-40' >& FREEDOM</span></h1>

            <div className=" flex items-end justify-between my-6">
                <p className='font-[satoshi] text-lg md:text-xl  md:w-sm lg:text-xl lg:ml-40 lg:w-lg lg:font-light  '>Explore independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel</p>

                <p className='font-[robo] flex items-center text-lg  text-center font-light md:text-xl lg:text-xl '><span className='p-1 border-2 border-white  border-solid rounded-full mx-2 bg-[#ffffff3c]'><GoArrowDown className=' text-xl md:text-2xl lg:text-2xl '/></span > LEARN MORE</p>
            </div>
        </div>
     </section>
  )
}

export default Hero