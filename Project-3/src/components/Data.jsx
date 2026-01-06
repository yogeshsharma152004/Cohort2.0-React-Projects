import React from 'react'

const Data = () => {
  return (
    <section className='grid grid-rows-2 grid-cols-2 gap-8 text-center lg:grid-cols-4 
    text-white font-[chill] py-5 '>
        <div className='flex flex-col gap-3 '>
            <h3 className='text-xl text-[#ffffffba]'>DESIGNERS</h3>
            <h2 className='text-5xl'>150+</h2>
        </div>

        <div className='flex flex-col gap-3'>
            <h3 className='text-xl text-[#ffffffba]'>CLIENTS</h3>
            <h2 className='text-5xl'>500+</h2>
        </div>

        <div className='flex flex-col gap-3'>
            <h3 className='text-xl text-[#ffffffba]'>MASTERPICES</h3>
            <h2 className='text-5xl'>20k+</h2>
        </div>

        <div className='flex flex-col gap-3'>
            <h3 className='text-xl text-[#ffffffba]'>EVENTS</h3>
            <h2 className='text-5xl'>50+</h2>
        </div>
    </section>
  )
}

export default Data