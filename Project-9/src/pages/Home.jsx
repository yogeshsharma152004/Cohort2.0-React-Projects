import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate =  useNavigate()

  return (
    <div className=' h-screen w-screen bg-black'>
        <div className='absolute top-1/2 left-1/2 -translate-1/2 text-center text-amber-50'>
             <h1 className='text-4xl md:text-6xl lg:text-7xl text-white'>This is Home Page</h1>
       <button onClick={() => {
            navigate('/products')
       }
        
        } className='bg-blue-500 text-lg md:text-2xl px-6 md:px-10 py-3 md:py-4 rounded-lg font-semibold mt-6 active:scale-95 cursor-pointer'>All Products</button>
        </div>
      
    </div>
  )
}

export default Home
