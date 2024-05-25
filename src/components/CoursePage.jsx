import React, { useContext, useEffect, useState } from "react";
import { contexts } from "./context/Context";

import AddressDetails from "./AddressDetails";
import Contact from "./Contact";
import MoreAbout from "./MoreAbout";
import Footers from "./Footer";
import { Link } from "react-router-dom";
import Payment from "./Payment";
const link=  [
  { name:"Home", link:"/" },
  { name:"About", link:"/about" },
  { name:"Blogs", link:"/blogs" },
 
  { name:"Courses", link:"/courses" },
  { name:"SignIn", link:"/Signin" },
  { name:"SignUp", link:"/Signup" },
]
const CoursePage = () => {
  const [data, setData] = useState([]);

  const { modalopen, setmodalopen } = useContext(contexts);
  useEffect(() => {
    fetch("https://cms-for-course-and-authentification.vercel.app/courses")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.courses);
      });
  }, []);

  if(data.length ==0){
    return <div className='  h-auto w-full flex  items-center justify-center'>
       <span className="loading loading-dots loading-lg"></span>
    </div>
  }
  console.log(data)
  return (
 <div>
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
   
  <div>
       <div className="  h-screen w-screen bgs bg-cover gap-10 flex flex-col justify-center items-center">
             <h1 className="align-element text-white text-6xl font-semibold">
             Learn Trading Offline In Indore
             </h1>
             <h1 className="align-element text-white text-3xl font-semibold">
             We are now in your City!! Get the offline learning experience and learn to trade in the most simplified way with India’s most loved trading mentor Anish Singh Thakur!
             </h1>
             <button className="align-element text-lg font-medium px-4 p-2 rounded-lg bg-red-500 text-white"><a href="#conts">Enroll Now</a> </button>
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


       <div
      id="courses"
      className=" mt-10  flex flex-col justify-center items-center  gap-10"
      >
      <div className="  mt-10 flex flex-col justify-center items-center">
        <h1 className=" text-3xl font-semibold"> Our Courses</h1>
        <div className=" h-1 w-20 mt-1 bg-[#423383] rounded-lg"></div>
      </div>

   <div className=" flex  gap-10   flex-col w-full justify-center relative ">
        {data.length > 0 &&
          data.map((val) => {
            return (
              <div className="border-b-2 pb-5">
                <div className=" flex flex-col align-element  gap-10 ">
                  <div className="flex flex-col justify-center items-center ">
                    <h1 className=" text-2xl font-semibold text-center text-red-500">
                      Course - {val.title}
                    </h1>
                  
                  </div>
                  <div className=" flex flex-col md:flex-row">
                    <div className=" flex-1">
                         <h1 className=" text-lg font-medium">{val.para}</h1>
                         <div className=" flex  gap-5 mt-5">

                      {" "}
                      <h1 className=" bg-[#423383] hover:bg-slate-300 transition-all duration-300  inline p-2 px-3 rounded-lg text-white text-base md:text-lg font-medium">
                        Duration - {val.duration} Days
                      </h1>{" "}
                      <h1 className="  bg-[#423383] hover:bg-slate-300 transition-all duration-300 inline p-2 px-4 rounded-lg text-white text-base md:text-lg  font-medium">
                         Fees - {val.fee} INR
                      </h1>{" "}
                    </div>

                    <Link  to={`/courses/${val._id}`}>   <button className=" mt-5 btn mb-5 bg-[#423383] text-sm text-white">View Details</button></Link>
                    </div>
                  <div className=" flex-1 flex flex-col  items-center">
                    <div>
                        <img src={val.previewImage} alt="" className=" w-[32rem] rounded-xl h-[20rem] object-cover" />
                    </div>
                    
                  </div>

                  </div>
                  
                  
                </div>
              </div>
            );
          })}
       
      </div>
     
    </div>
 
     <div className=" align-element  mt-32">
         <MoreAbout/>
     </div>
          
       <div
        id="conts"
        className=" align-element mt-20 w-full  md:pb-12 flex flex-col md:flex-row justify-between"
        >
        <AddressDetails />
        <Contact />
      </div>

      <div>
          <Footers/>
      </div>
  </div>

        </div>
);
};

export default CoursePage;
