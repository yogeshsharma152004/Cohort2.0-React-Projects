import React from "react";
import AdvaImg from "../assets/adavantages.png";
import { GoArrowUpRight } from "react-icons/go";
const Adavantage = () => {
  return (
    <section className="my-6 lg:mt-14 ">
      <h1
        className="font-[chill]
        text-white text-2xl mx-10 lg:text-4xl"
      >
        OUR ADVANTAGES
      </h1>

      <section className="grid  gap-4 text-white md:grid-cols-2 lg:grid-cols-2 items-stretch my-5">
        <div className="h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-full ">
          <img
            className=" rounded-xl h-full w-full  object-cover object-top"
            src={AdvaImg}
            alt=""
          />
        </div>

        <div className=" grid gap-5 md:h-[65vh] md:auto-rows-fr">
          <div className="bg-[#1E1E1E] grid gap-4 rounded-xl p-5 md:p-3 md:gap-2 xl:grid-cols-4 xl:gap-10 lg:p-8">
            <div className=" xl:col-span-3">
              <h1 className="font-[chill] text-xl lg:text-3xl">INDEPENDENT DESIGNERS</h1>

              <p className="font-[robo] my-8 text-sm md:text-xs md:mt-3 md:my-0 lg:text-base font-light">Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.</p>
            </div>

            <div className="xl:flex xl:items-center">
              <p className="font-[robo] flex items-center text-xl gap-3 mt-10 md:mt-2 md:text-sm xl:mt-0  lg:text-lg font-light ">
                <span className="rounded-full border border-white p-2 md:p-1 bg-[#ffffff1f]">
                  <GoArrowUpRight className="text-lg md:text-xs lg:text-xl" />
                </span>
                EXPLORE
              </p>
            </div>
          </div>

          <div className="bg-[#1E1E1E] grid gap-4 rounded-xl p-5 md:p-3 md:gap-2 xl:grid-cols-4 xl:gap-10 lg:p-8">
            <div className=" xl:col-span-3">
              <h1 className="font-[chill] text-xl lg:text-3xl">EXCLUSIVE & UNIQUITY</h1>

              <p className="font-[robo] my-8 text-sm md:text-xs md:mt-3 md:my-0 lg:text-base font-light">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</p>
            </div>

            <div className=" xl:flex xl:items-center">
              <p className="font-[robo] flex items-center text-xl gap-3 mt-10 md:mt-2  md:text-sm xl:mt-0  lg:text-lg font-light ">
                <span className="rounded-full border border-white p-2 md:p-1 bg-[#ffffff1f]">
                  <GoArrowUpRight className="text-lg md:text-xs lg:text-xl" />
                </span>
                EXPLORE
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default Adavantage;
