import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between '>
        <div className="right">
            <h1 className='font-[chill] text-3xl text-white'>DVSY</h1>
        </div>
        <div className="flex items-center gap-14 ">
            <ul className='hidden lg:font-[robo] lg:flex  lg:item-center lg:gap-4 lg:font-light lg:text-white   lg:block'>
                <li className='bg-[#1E1E1E] p-2 rounded-lg'>DESIGNERS</li>
                <li className='bg-[#1E1E1E] p-2 rounded-lg'>COLLABS</li>
                <li className='bg-[#1E1E1E] p-2 rounded-lg'>EVENTS</li>
                <li className='bg-[#1E1E1E] p-2 rounded-lg'>BLOG</li>
                <li className='bg-[#1E1E1E] p-2 rounded-lg'>CARD</li>
            </ul>

            <button className='font-[robo] bg-[#EC6B51] p-2 font-medium text-xl rounded-md'>GET IN TOUCH</button>
        </div>
    </nav>
  )
}

export default Navbar