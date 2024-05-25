import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Counter = () => {
    const[counter , setcounter] = useState(false)
  return (
   <ScrollTrigger onEnter={()=>setcounter(true)} onExit={()=>setcounter(false)}>

   <div className=' align-element flex flex-col md:flex-row justify-between items-center gap-10 mt-6 bg-white p-10'>
           <div className=' text-center'>
                <h1 className=' text-[#423383] font-bold text-4xl'>{ counter && <CountUp start={0} end={40} duration={2} delay={0} />}+ </h1>
              <h1 className='text-[#423383] font-semibold text-xl'> Courses </h1>
           </div>
           <div className=' text-center'>
                <h1 className=' text-[#423383] font-bold text-4xl'>{ counter && <CountUp start={0} end={4000} duration={2} delay={0} />}+ </h1>
              <h1 className='text-[#423383] font-semibold text-xl'> Student Mentored </h1>
           </div><div className=' text-center'>
                <h1 className=' text-[#423383] font-bold text-4xl'>{ counter && <CountUp start={0} end={4.2} duration={3} delay={0} />}.6 </h1>
              <h1 className='text-[#423383] font-semibold text-xl'> Google Rating </h1>
           </div>
           <div className=' text-center'>
                <h1 className=' text-[#423383] font-bold text-4xl'>{ counter && <CountUp start={0} end={10000} duration={3} delay={0} />}+</h1>
              <h1 className='text-[#423383] font-semibold text-xl'> Session Finished </h1>
           </div>
           
    </div>
   </ScrollTrigger>
  )
}

export default Counter