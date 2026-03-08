

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Poke from "./assets/poke.png"



const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')



    const list = response.data.results

    // console.log(list);
    

      const details = await  Promise.all(
        list.map(async (elem) => {
           const results = await axios.get(elem.url)
           
           
           
           return results.data
           
           
           
        })
      )


      setAllData(details)   

      // console.log(details);
      
  }

  useEffect( () => {
    getData()
  },[])

  return (
    <div className="bg-black h-auto flex flex-col items-center">
      <img className="w-40 " src={Poke} alt="" />
      <div className=" p-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6   md:gap-14 items-center justify-center gap-10  text-white ">
          
          

        {allData.map((elem,index) => {
         return <Card key={index} elem={elem} />
          
        })}
    </div>
    </div>
    
  )
}

export default App
