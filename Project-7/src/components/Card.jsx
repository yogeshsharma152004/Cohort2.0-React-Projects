


// import React from "react";

// const Card = ({ pokemon }) => {
//   return (
//     <div className="card">

//       <img
//         src={pokemon.sprites.front_default}
//         alt={pokemon.name}
//       />

//       <h2>{pokemon.name}</h2>



//       <p>
//         <b>Type:</b> {pokemon.types[0].type.name}
//       </p>

//       <p>
//         <b>Height:</b> {pokemon.height}
//       </p>

//       <p>
//         <b>Weight:</b> {pokemon.weight}
//       </p>

//     </div>
//   );
// };

// export default Card;

import React from 'react'
import { CiDumbbell } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { GiLindenLeaf } from "react-icons/gi";
import { IoBug } from "react-icons/io5";


const Card = (promise) => {

  const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  bug: "bg-lime-500",

};

const typeIcons = {
  fire: <FaFire size={20}/>,
  water: <MdWaterDrop size={20} />,
  grass: <GiLindenLeaf size={20} />,
  bug:  < IoBug size={20} />
};

const typeGradient = {
    grass: "from-green-500/70 to-green-800",
  fire: "from-orange-500/70 to-red-800",
  water: "from-blue-500/70 to-blue-800",
  bug: "from-lime-400/70 to-lime-700"
  
};

const type = promise.elem.types[0].type.name;

  return (
    <div className={`card h-[350px] w-[300px] capitalize bg-amber-300 rounded-lg font-mono  flex flex-col items-center bg-gradient-to-b ${typeGradient[type]}`}> 
    <img className='h-40 w-40  ' src={promise.elem.sprites.front_default} alt="" />
   
         <h1 className='font-semibold text-3xl text-black '>  {promise.elem.name} </h1> 

         <p className={`flex items-center gap-2 capitalize mt-2  text-2xl  font-semibold  px-5 py-1 rounded-lg ${typeColors[promise.elem.types[0].type.name]}`}> {typeIcons[type]}
  {type}</p>

         

         <div className='flex gap-5 items-center mt-6'>
            
            <p className='bg-[#00000069] px-5 py-1 rounded-lg text-xl'> <i className="ri-ruler-line"></i>  {promise.elem.height /10}M    </p>

         <p className='flex  items-center gap-2 bg-[#00000069] px-5 py-1 rounded-lg text-xl '> <CiDumbbell />{promise.elem.weight / 10}Kg</p>
          
         </div>
    </div>
  )
}

export default Card
