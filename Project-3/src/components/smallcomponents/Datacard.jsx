import React from 'react'

const Datacard = ({title, number}) => {
  return (
    <div className='flex flex-col gap-3 '>
            <h3 className='text-xl text-[#ffffffba]'>{title}</h3>
            <h2 className='text-5xl'>{number}</h2>
        </div>
  )
}

export default Datacard