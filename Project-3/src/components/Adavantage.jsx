import React from "react";
import AdvaImg from "../assets/adavantages.png";
import { GoArrowUpRight } from "react-icons/go";
import AdvantageCard from "./smallcomponents/AdvantageCard";
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
          

          <AdvantageCard
            title="INDEPENDENT DESIGNERS"
            description="Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers."
          />

          <AdvantageCard
            title="EXCLUSIVE & UNIQUITY"
            description="ndulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity."
          />
        </div>
      </section>
    </section>
  );
};

export default Adavantage;
