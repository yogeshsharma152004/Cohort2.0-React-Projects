import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const Detailes = () => {
  return (
    <section className='grid  gap-3 text-white my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-[#1E1E1E] min-h-[18rem]  py-10 px-6  rounded-xl'>
            <h3 className='font-[chill] text-xl'>
                INDEPENDENCY
            </h3>
            <p className='font-[robo] mt-6 text-sm text-gray-300  font-light '>Explore the creativity of independent  designers from around  the globe. </p>

            <p className='font-[robo] flex items-center gap-3 mt-10 text-sm font-light '>
                <span className='rounded-full border border-white p-2 bg-[#ffffff1f]'><GoArrowUpRight className='text-lg' /></span> LEARN MORE</p>
        </div>

        <div className='bg-[#1E1E1E] min-h-[18rem] py-10 px-6  rounded-xl'>
            <h3 className='font-[chill] text-xl'>
                UNIQUITY
            </h3>
            <p className='font-[robo] mt-6 text-sm text-gray-300  font-light '>Discover the charm of <br /> unique   pieces  that stand out effortlessly. </p>

            <p className='font-[robo] flex items-center gap-3 mt-10 text-sm font-light '>
                <span className='rounded-full border border-white p-2 bg-[#ffffff1f]  '><GoArrowUpRight className='text-lg' /></span> LEARN MORE</p>
        </div>

        <div className='bg-[#1E1E1E] min-h-[18rem] py-10 px-6  rounded-xl'>
            <h3 className='font-[chill] text-xl'>
                QUALITY
            </h3>
            <p className='font-[robo] mt-6 text-sm text-gray-300  font-light '>Experience unparalleled craftsmanship and attention to detail. </p>

            <p className='font-[robo] flex items-center gap-3 mt-10 text-sm font-light '>
                <span className='rounded-full border border-white p-2 bg-[#ffffff1f]'><GoArrowUpRight className='text-lg' /></span> LEARN MORE</p>
        </div>

        <div className='bg-[#1E1E1E] min-h-[18rem] py-10 px-6  rounded-xl'>
            <h3 className='font-[chill] text-xl'>
                SUSTAINABILITY
            </h3>
            <p className='font-[robo] mt-6 text-sm text-gray-300  font-light '>Embrace eco-conscious fashion choices without compromising on style. </p>

            <p className='font-[robo] flex items-center gap-3 mt-10 text-sm font-light '>
                <span className='rounded-full border border-white p-2 bg-[#ffffff1f]'><GoArrowUpRight className='text-lg' /></span> LEARN MORE</p>
        </div>


    </section>
  )
}

export default Detailes