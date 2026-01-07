import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const AdvantageCard = ({title,description}) => {
  return (
    <div className="bg-[#1E1E1E] grid gap-4 rounded-xl p-5 md:p-3 md:gap-2 xl:grid-cols-4 xl:gap-10 xl:p-8">
                <div className=" xl:col-span-3">
                  <h1 className="font-[chill] text-xl  xl:text-3xl">{title}</h1>
    
                  <p className="font-[robo] my-8 text-sm md:text-xs md:mt-3 md:my-0 xl:text-base font-light">{description}</p>
                </div>
    
                <div className="xl:flex xl:items-center">
                  <p className="font-[robo] flex items-center text-xl gap-3 mt-10 md:mt-2 md:text-sm xl:mt-0  xl:text-lg font-light ">
                    <span className="rounded-full border border-white p-2 md:p-1 bg-[#ffffff1f]">
                      <GoArrowUpRight className="text-lg md:text-xs lg:text-xl" />
                    </span>
                    EXPLORE
                  </p>
                </div>
              </div>
  )
}

export default AdvantageCard