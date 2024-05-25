import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const OurCourse = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{

     fetch('https://cms-for-course-and-authentification.vercel.app/courses',{headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }}).then((res)=>{
     return res.json();
     }).then((res)=>{
    setData(res.courses)
     })
   
  },[])
  console.log(data)
  return (
    <div id='courses' className=' mt-10 align-element flex flex-col justify-center items-center  gap-10'>
        <div className='  flex flex-col justify-center items-center'>
               <h1 className=' text-3xl font-semibold'> Our Courses</h1>
               <div className=' h-1 w-20 mt-1 bg-[#423383] rounded-lg'></div>
        </div>
               
        <div className=' flex flex-col md:flex-row flex-wrap  gap-6'>
             {
              data.length > 0 &&  data.map((val)=>{
                    return <div className="card w-[350px] transition-all     hover:scale-90    duration-500  md:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={val.previewImage} alt="Shoes" className="rounded-xl w-full  h-[10rem]  object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{val.title}</h2>
                      <p className='  font-normal text-lg'>Duration : {val.duration} Days</p>
                      <p className='  font-normal text-lg'>Fees : {val.fee} INR</p>
                      <div className="card-actions">
                        <button className="btn bg-[#423383] text-sm text-white"><a href="#contact">Enroll Now</a></button>
                        <Link  to={`/courses/${val._id}`}>   <button className="btn bg-[#423383] text-sm text-white">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                })
             }
        </div>
    </div>
  )
}

export default OurCourse