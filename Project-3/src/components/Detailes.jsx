import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Card from './smallcomponents/Card';
const Detailes = () => {
  return (
    <section className='grid  gap-3 text-white my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
     


        <Card 
        
        title='INDEPENDENCY'
        text='Explore the creativity of independent  designers from around  the globe.'
        />

        <Card 
        
        title=' UNIQUITY'
        text={<>
        Discover the charm of <br />  unique   pieces  that stand out effortlessly.
        </>}
        />

        <Card 
        
        title=' QUALITY'
        text='Experience unparalleled craftsmanship and attention to detail.'
        />

        <Card 
        
        title=' SUSTAINABILITY'
        text='Embrace eco-conscious fashion choices without compromising on style. '
        />
    </section>
  )
}

export default Detailes