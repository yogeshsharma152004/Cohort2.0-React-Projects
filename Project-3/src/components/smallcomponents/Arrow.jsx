import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Arrow = () => {
  return (
    <p className="font-[robo] flex items-center gap-3 mt-15 text-sm font-light ">
      <span className="rounded-full border border-white p-2 bg-[#ffffff1f]">
        <GoArrowUpRight className="text-lg" />
      </span>
      LEARN MORE
    </p>
  );
};

export default Arrow;
