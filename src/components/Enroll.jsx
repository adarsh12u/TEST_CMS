import React from 'react'
import { Link } from 'react-router-dom'
const Enroll = () => {
  return (
    <section className='align-element w-7xl mt-10  gap-5 flex  flex-col md:flex-row  justify-between'>
          <div className=' flex flex-col gap-10 w-full md:w-1/2'>
                 <div>
<h1 className=' text-3xl md:text-4xl font-semibold'>Elite Traders Live Mentorship Program</h1>
                 </div>
                 <div className=''>
                       <p className='  text-base md:text-lg font-semibold md:font-medium'> The Elite Traders Live Mentorship Program aims to help you learn and apply the knowledge and skills of a professional trader, with the potential for profitable outcomes. It encompasses numerous strategies and price action techniques suitable for various financial markets and trading styles, including Indian stocks, futures & options, the foreign exchange market, and commodities, covering intraday and swing trading.</p>
                 </div>
               <div>
               <button className='block bg-[#423383] px-4 hover:bg-slate-300 transition-all duration-150   text-white  rounded-md py-2   ' type="button"><a href='#contact'>Enroll now</a></button>
                    </div>
          </div>
     <div className='w-full    flex justify-center items-center md:w-1/2'>
        <div className=' flex justify-center'>

          <img className='  w-3/4 h-3/4 ' src="/tia.jpg" alt="" />
        </div>
     </div>
    </section>
  )
}

export default Enroll