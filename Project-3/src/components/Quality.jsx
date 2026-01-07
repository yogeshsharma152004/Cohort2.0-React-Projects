import React from "react";
import QuaImg from "../assets/quality.png";
import { GoArrowUpRight } from "react-icons/go";
import AdvantageCard from "./smallcomponents/AdvantageCard";
const Quality = () => {
  return (
    <section className="grid  gap-4 text-white md:grid-cols-2 lg:grid-cols-2 items-stretch ">
      <div className=" grid gap-5 md:h-[65vh] md:auto-rows-fr">
        

        <AdvantageCard
          title="HIGH QUALITY"
          description="Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style."
        />
        <AdvantageCard
          title="ECO-FRIENDLY"
          description="Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."
        />
      </div>

      <div className="h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-full ">
        <img
          className=" rounded-xl h-full w-full  object-cover object-top"
          src={QuaImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Quality;
