import React from "react";
import Datacard from "./smallcomponents/Datacard";

const Data = () => {
  return (
    <section
      className="grid grid-rows-2 grid-cols-2 gap-8 text-center lg:grid-cols-4 
    text-white font-[chill] py-5 "
    >
      <Datacard title="DESIGNERS" number="150+" />

      <Datacard title="CLIENTS" number="500+" />

      <Datacard title="MASTERPICES" number="20k" />

      <Datacard title="EVENTS" number="50+" />
    </section>
  );
};

export default Data;
