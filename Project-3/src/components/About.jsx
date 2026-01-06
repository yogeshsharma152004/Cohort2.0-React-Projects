import React from 'react'
import AboutImg from '../assets/about.png'
const About = () => {
  return (
    <section className='grid  gap-4 text-white md:grid-cols-2 lg:grid-cols-2 items-stretch'>

        <div className='bg-[#1E1E1E] rounded-xl p-8'>
               <h3 className='font-[robo] text-xl'>ABOUT</h3>

               <p className='font-chill text-3xl my-8 md:my-4 lg:text-5xl lg:my-6'>
                WHERE FASHION MEETS FREEDOM
               </p>

               <div className='font-[satoshi]  text-lg  md:text-sm lg:grid lg:grid-cols-2 lg:gap-4 lg:text-xl'>
                     <span>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers.
                     With a commitment to fostering a community of creativity and innovation,</span> <span>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</span>
               </div>
        </div>

        <div className='h-[50vh] sm:h-[55vh] md:h-[65vh]  lg:h-full '>
             <img className=' rounded-xl h-full w-full  object-cover object-top' src={AboutImg} alt="" />
        </div>

    </section>
  )
}

export default About