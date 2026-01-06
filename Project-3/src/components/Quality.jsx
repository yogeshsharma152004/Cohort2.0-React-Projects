import React from 'react'
import QuaImg from "../assets/quality.png";
import { GoArrowUpRight } from "react-icons/go";
const Quality = () => {
  return (
      
        <section className="grid  gap-4 text-white md:grid-cols-2 lg:grid-cols-2 items-stretch ">
                
        
                <div className=" grid gap-5 md:h-[65vh] md:auto-rows-fr">
                  <div className="bg-[#1E1E1E] grid gap-4 rounded-xl p-5 md:p-3 md:gap-2 xl:grid-cols-4 xl:gap-10 lg:p-8">
                    <div className=" xl:col-span-3">
                      <h1 className="font-[chill] text-xl lg:text-3xl">HIGH QUALITY</h1>
        
                      <p className="font-[robo] my-8 text-sm md:text-xs md:mt-3 md:my-0 lg:text-base font-light">Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.</p>
                    </div>
        
                    <div className=" xl:flex xl:items-center">
                      <p className="font-[robo] flex items-center text-xl gap-3 mt-10 md:mt-2 md:text-sm xl:mt-0 lg:text-lg  font-light ">
                        <span className="rounded-full border border-white p-2 md:p-1 bg-[#ffffff1f]">
                          <GoArrowUpRight className="text-lg md:text-xs lg:text-xl" />
                        </span>
                        EXPLORE
                      </p>
                    </div>
                  </div>
        
                  <div className="bg-[#1E1E1E] grid gap-4 rounded-xl p-5  md:p-3 md:gap-2 xl:grid-cols-4 xl:gap-10 lg:p-8">
                    <div className=" xl:col-span-3">
                      <h1 className="font-[chill] text-xl lg:text-3xl">ECO-FRIENDLY</h1>
        
                      <p className="font-[robo] my-8 text-sm md:text-xs md:mt-3 md:my-0 lg:text-base font-light">Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.</p>
                    </div>
        
                    <div className=" xl:flex xl:items-center">
                      <p className="font-[robo] flex items-center text-xl gap-3 mt-10 md:mt-2 md:text-sm xl:mt-0 lg:text-lg font-light ">
                        <span className="rounded-full border border-white p-2 md:p-1 bg-[#ffffff1f]">
                          <GoArrowUpRight className="text-lg md:text-xs lg:text-xl" />
                        </span>
                        EXPLORE
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-full ">
                  <img
                    className=" rounded-xl h-full w-full  object-cover object-top"
                    src={QuaImg}
                    alt=""
                  />
                </div>
         </section>
      
  )
}

export default Quality