import React, { useEffect, useState } from 'react'
import { TiArrowRightThick } from "react-icons/ti";
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import AddressDetails from './AddressDetails';
import Contact from './Contact';
import Payment from './Payment';

const Courses = () => {
 const {id} = useParams();
  const [data,setData] = useState([]);
console.log(id)
useEffect(() => {
    fetch("https://cms-for-course-and-authentification.vercel.app/courses")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.courses);
      });
  }, []);

  const filter = data.filter((val)=>val._id == id);
  if(filter.length ==0){
    return <div className='  h-full w-full flex  items-center justify-center'>
       <span className="loading loading-dots loading-lg"></span>
    </div>
  }
  console.log(filter)
  return (
    filter.length > 0 && <div className=' mt-5  '>
      <div className='   gap-5 align-element  w-full '>
           <div>
              <img src={filter[0].previewImage} className=' object-cover h-[30rem] w-full' alt="" />
             
           </div>
   <div class=" mt-10 max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
    
           <div class="col-span-4 w-full h-full ">
               <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                   <h1 class="text-white text-xl font-medium py-2">Course name</h1>
                   <p class="text-gray-100 text-base">{filter[0].title}</p>
               </div>
           </div>
           <div class="relative col-span-1 w-full h-full flex justify-center items-center">
               <div class="h-full w-1 bg-indigo-300"></div>
               <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
           </div>
           <div class="col-span-4 w-full h-full"></div>
   
   
          
           <div class="col-span-4 w-full h-full"></div>
           <div class="relative col-span-1 w-full h-full flex justify-center items-center">
               <div class="h-full w-1 bg-indigo-300"></div>
               <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
           </div>
           <div class="col-span-4 w-full h-full ">
               <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                   <h1 class="text-white text-xl font-medium py-2">About Course</h1>
                   <p class="text-gray-100   text-base ">{filter[0].para}</p>
               </div>
           </div>
   
        
           <div class="col-span-4 w-full h-full ">
               <div class="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
                   <h1 class="text-white text-xl font-medium py-2">Duration</h1>
                   <p class="text-gray-100 text-base">{filter[0].duration} Days</p>
                   <h1 class="text-white text-xl font-medium py-2">Fees</h1>
                   <p class="text-gray-100 text-base">{filter[0].fee} INR</p>
                 
               </div>
           </div>

           <div class="relative col-span-1 w-full h-full flex justify-center items-center">
               <div class="h-full w-1 bg-indigo-300"></div>
               <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
           </div>
           <div class="col-span-4 w-full h-full"></div>
       </div>

        
                   <div className=' flex flex-col gap-10'>
             
 <div className=' mt-10 flex flex-col gap-5'>
     <h1 className=' text-2xl font-semibold text-center'>
         More About Course
     </h1>
    <div>
       { Object.keys(filter[0].description).map((key,index)=>{
             return <div className=' flex flex-col gap-5'>
                  <h1 className=' text-xl font-semibold mt-5'>{key}</h1>
                  <div className=' flex flex-col'>
                  {filter[0].description[key].map((vals)=>{
                                   return <div className=' flex gap-1'>
                                    <TiArrowRightThick className=' min-w-10'/>
                                   <h1 className=' text-base font-medium'>{vals}</h1>
                                   </div> 
 
                                   })}
                  </div>
             </div>
       }) }
    </div>
 </div>

            </div>

        </div>
        <div className=' align-element mt-11 mb-12'>
           <Payment/>
        </div>
        <div
        id="conts"
        className=" align-element w-full  md:pb-12 flex flex-col md:flex-row justify-between"
      >
        <AddressDetails />
        <Contact />
      </div>
        <div className=' mt-10 border-t-2' >
    <Footer/>
</div>

         </div>
  )
}

export default Courses