import React from 'react'

const Review = () => {
  return (
    <div className=' align-element mt-5'>
 
 <div className='  flex flex-col justify-center items-center'>
               <h1 className=' text-xl md:text-3xl font-semibold'>What people say's about us</h1>
               <div className=' h-1 w-20 mt-1 bg-[#423383] rounded-lg'></div>
        </div>
        <div className=' flex flex-wrap gap-10 justify-center mt-10'>
               <video controls   loop width={"300"} >
                  <source src='/v1.mp4' type='video/mp4'/>
               </video>
               <video controls   loop width={"300"}  >
                  <source src='/v2.mp4' type='video/mp4'/>
               </video>
               <video controls   loop width={"300"}  >
                  <source src='/v3.mp4' type='video/mp4'/>
               </video>
        </div>

    </div>
  )
}

export default Review