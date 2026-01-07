import React from 'react'
import Arrow from './Arrow'

const Card = ({title , text}) => {
  return (
     <div className='bg-[#1E1E1E] min-h-[18rem]  py-10 px-6  rounded-xl'>
                <h3 className='font-[chill] text-xl'>
                    {title}
                </h3>
                <p className='font-[robo] mt-6 text-sm text-gray-300  font-light '>
                    {text} </p>
    
                <Arrow/>
            </div>
  )
}

export default Card