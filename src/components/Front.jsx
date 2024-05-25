import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OurCourse from './OurCourse';
import Services from './Services';
import Enroll from './Enroll';
import AddressDetails from './AddressDetails';
import Contact from './Contact';
import Counter from './Counter';
import Apply from './Apply';
import HowToApply from './HowToApply';
import MoreAbout from './MoreAbout';
import Footer from './Footer';
import Blog from './Blogs';
import Review from './Review';
import Portfolio from './Portfolio';
import { MdEmail, MdOutlineLocationCity } from 'react-icons/md';
import { FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoMdText } from 'react-icons/io';
import { GiModernCity } from 'react-icons/gi';

const link=  [
  { name:"Home", link:"/" },
  { name:"About", link:"/about" },
  { name:"Blogs", link:"/blogs" },
  { name:"Gallary", link:"/gallary" },

  { name:"Courses", link:"/courses" },
  { name:"SignIn", link:"/Signin" },
  { name:"SignUp", link:"/Signup" },
]




const Front = () => {

const [modald , sem] =  useState(false);
  useEffect(()=>{
  const v =   setTimeout(() => {
         sem(true);
    }, 10000);

   return()=>clearTimeout(v);
},[])
console.log(modald)
  return (
    <section className=' relative'>{
          modald && <div className= '  h-[100vh] md:h-screen z-50  fixed bottom-0  left-[2%] right-[2%]  md:left-[20%] md:right-[20%]   bg-gray-100 rounded-lg   '> 
          
           
          {/* <Contact/> */}
          
          
          <div className=' relative  float-end right-2  top-2 cursor-pointer'>
          <RxCross2 size={25} onClick={()=>sem(false)}/>
          </div>
           
          
          
          <div  className='   mb-5 mt-5 p-5 md:p-0 w-full lg:p-1'>
       
       <div className=' w-full text-center'>
             
             <h1 className=' text-blue text-4xl font-semibold'><span className=' text-[#423383]'>Contact</span>  Us</h1>
           <form action="https://getform.io/f/7a31f66d-a2bb-47c8-a6a0-ae2a4517e322" method='POST'>
             <div className='w-full lg:w-1/2 m-auto mt-12  lg:mt-20 flex flex-col  gap-5'>
           
               
               <div className=' flex gap-2 items-center'>
               <FaUserAlt size={24}/>
                 <input type="text" name="name"  className=' rounded-lg  w-full  text-lg font-normal p-2 text-black ' placeholder='Enter your name' />
               </div>
               <div className=' flex gap-2 items-center'>
                 <MdEmail size={25}/>
                 <input type="email" name="email"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your email' />

               </div>
               <div className=' flex gap-2 items-center'>
                   <GiModernCity size={20}/>
                                    <input type="text" name="city"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your city' />

                </div><div className=' flex gap-2 items-center'>
                <FaPhoneAlt size={20}/>
                  <input type="number" name="phone"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your Phone no.' />

                </div>
<div className=' flex gap-2 '>
  <IoMdText className=' mt-4' size={20}/>
<input type='text'  placeholder='Enter your Message' className=' rounded-lg text-lg font-normal  p-3 w-full'></input>

</div>
                 <button  type='submit'  className=' p-2 rounded-lg duration-500 transition-all hover:text-sky-400 border  text-lg font-semibold hover:border-sky-400 hover:bg-slate-900   bg-[#423383] from-sky-400 to-sky-800  text-white'>submit</button>
             </div>
           </form>
         </div>

   </div>
          
          
          
          
          
          
          
          
          
          {/* <Contact/> */}








           
       </div>
       }
 <div className=' md:hidden flex   h-[40px] align-element  items-center mt-3'>
           <div className=' flex  gap-16  overflow-x-scroll  scrollbar-thumb-slate-200
               '>
           {
       link.map((val,  i)=>{
       return val.link.includes('#') ? <a href={val.link} > <p onClick={()=>setOpen(!open)} className=' text-base   text-black font-normal'>{val.name}</p> </a> :
       <Link key={i}  to={val.link}> <p onClick={()=>setOpen(!open)} className=' text-base   text-black font-normal'>{val.name}</p></Link>})
     }
           </div>
      </div>
    <div className='flex gap-24 h-[40rem]  items-center  justify-center bg   bg-cover    ' >
    {/* <div className='align-element'>
      <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-white  sm:text-6xl'>
      Start learning with our experts anywhere anytime
      </h1>
      <p className='mt-8 max-w-xl text-lg leading-8 text-white'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam consequatur eos inventore aliquam beatae illo ut libero aliquid cupiditate sapiente!
      </p>
      <div className='mt-10'>
        <a href='#courses' className='btn btn-primary'>
          Our Courses
        </a>
      </div>
    </div> */}
    
  </div>
    

  <div className=' border-b pb-8 md:pb-12 '>
   
    <Services/>
</div>
<div className=" align-element flex mt-20 flex-col md:flex-row  gap-24">
          <div className=" flex flex-col gap-8 flex-1">

          <div className="  ">
              <h1 className=" text-red-500 font-semibold text-sm ">
                   ABOUT TRADE INDIA WITH ATIN
              </h1>
          </div>
          <div className="">
              <h1 className="text-black text-4xl font-semibold">
              Welcome to TIA
Hybrid Center Indore
              </h1>
          </div>
          <div>
            <h1 className=" text-black text-lg  font-medium">TRADE INDIA WITH ATIN is an initiative for the young generation interested in making more, willing to step forward and be free from financial situations. We provide knowledge based on self-learning, experience, and theoretical implications on the market. We give you the path, exact system, and psychology needed to perform well and earn consistent profits in the stock market. With our concepts and with our experience in the market we have developed such a course which is easily understandable.
            </h1></div>
          </div>
          <div className="flex-1 flex justify-center">
              <img src="/ow.jpg" alt="" className=" h-[26rem] w-[20rem] object-cover  dd" />
          </div>
     </div>
<div className=' border-b pb-8 md:pb-12 mt-10 align-element '>
<div className=' flex flex-col justify-center items-center'>
<h1 className=' text-3xl font-semibold'>Founder of TIA</h1>
               <div className=' h-1 w-20 mt-1 bg-[#423383] rounded-lg'></div>
      </div>
   <Portfolio/>
</div>
<div className=' border-b pb-8 md:pb-12 '>

    <OurCourse/>
</div>
<div className=' border-b pb-8 md:pb-12'>
    <Enroll/>
</div>

<div className=' border-b pb-8 md:pb-12'>
     <Counter/>
</div>
<div className=' border-b pb-8 md:pb-12'>
     <Apply/>
</div>
<div className=' border-b pb-8 md:pb-12'>
     <HowToApply/>
</div>
<div className='border-b  mt-20 pb-8 md:pb-12'>
     <Blog/>
</div>
<div className='  mt-20 pb-8 md:pb-12'>
     <MoreAbout/>
</div>
<div className=' border-b  mt-20 pb-8 md:pb-12'>
      <Review/>
</div>
<div className='border-b pb-8 '>

<div
       
        className=" align-element w-full   mt-10 flex flex-col md:flex-row justify-between"
        >
        <AddressDetails />
        <Contact />
      </div>
</div>
<div>
    <Footer/>
</div>
    </section>
  )
}

export default Front





