import React from 'react'

const Card = (props) => {
  return (
    <div   className='bg-white w-fit px-20 py-10 m-5 rounded-md flex flex-col items-center text-black'>
        <img className='h-20 w-20 rounded-full object-cover object-center' src={props.elem.userImage} alt="" />

        <h1 className='text-2xl mt-6 font-semibold'>{props.elem.userName}</h1>

        <h3 className='text-blue-700 text-xl font-semibold mt-2'>{props.elem.userRole}</h3>

        <p className='font-medium mt-5'>{props.elem.userDesc}</p>

        <button onClick={() => {
          props.deletHandler(props.index)

        }} className='bg-red-500 text-white px-6 py-2 mt-5 font-semibold text-xl rounded-sm active:scale-95'>Remove</button>
    </div>
  )
}

export default Card
