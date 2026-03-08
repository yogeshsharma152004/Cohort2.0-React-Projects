import React from 'react'
import Hero from '../assets/main.mp4'
const Home = () => {
  return (
    <div>
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <video className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover" muted loop autoPlay playsInline src={Hero}></video>
    </div>

    <div className='absolute bottom-28 left-36 '>
        <h1 className='text-[140px]  leading-none font-[zagma] text-white'>Built to think. <br /> Born to haul.</h1>
    </div>
    </div>
  )
}

export default Home

