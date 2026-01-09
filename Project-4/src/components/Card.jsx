import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Card = ({ city }) => {
  return (
    <section>
      <div className="h-110 w-84 bg-white rounded-lg overflow-hidden p-2">
        <img
          className="h-64 w-full rounded-lg object-cover"
          src={city.image}
          alt=""
        />

        <div className="mt-3 px-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-[Ubuntu] font-medium">
              {city.city}, {city.country}
            </h1>
            <p className="border border-[#00000094] px-2 py-1 rounded-full text-sm font-[Mulish]">
              {city.tag}
            </p>
          </div>

          <p className="mt-3 text-base font-[Mulish] font-normal">{city.description}</p>

          <div className="flex items-center justify-between mt-3">
            <p className="font-[Ubuntu] font-medium text-xl">${city.price}/night</p>

            <p className="flex gap-2 items-center bg-black text-white px-3 py-2 rounded-full font-[Ubuntu] font-light">
              Book now
              <GoArrowUpRight className="bg-white text-2xl text-black p-1 rounded-full" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
