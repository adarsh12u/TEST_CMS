import React from 'react'
const services = [{
     img:"T.png"
    },
{
  img:"Ex.png"
   },
{
  img:"Y.png"
    },
]
const Services = () => {
  return (
     <div className='align-element mt-10 align-element flex flex-col justify-center items-center  gap-10'>
<div className='  flex flex-col justify-center items-center'>
               <h1 className=' text-3xl font-semibold'> Our Services</h1>
               <div className=' h-1 w-20 mt-1 bg-[#423383] rounded-lg'></div>
        </div>
<div className=' flex flex-col md:flex-row gap-7'>

{
    services.map((vl)=>{
        
        
        return  <div className=" w-[350px]  md:w-96 bg-base-100 shadow-xl rounded-xl image-full">
  <img src={vl.img} alt="Shoes" className=' rounded-2xl' />
  
</div>
    })
}
    </div>
     </div>
  )
}

export default Services