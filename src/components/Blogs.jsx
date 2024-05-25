import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Blog = () => {
  

  const [data,setData] = useState([]);

  useEffect(()=>{

     fetch('https://cms-for-course-and-authentification.vercel.app/blogs').then((res)=>{
     return res.json();
     }).then((res)=>{
    setData(res.blogs)
     })

    
   
  },[])
  console.log(data)
const naviagte = useNavigate();
  const handlego = (id)=>{
       
    naviagte(`/blogs/${id}`)
       
     
  }
  return (
    <div id='blog' className=' mt-10  align-element flex flex-col justify-center items-center  gap-10'>
        <div className='  flex flex-col justify-center items-center'>
               <h1 className=' text-3xl font-semibold'> Our Blogs</h1>
               <div className=' h-1 w-20 mt-1 bg-[#423383] rounded-lg'></div>
        </div>
               
        <div className=' flex flex-col md:flex-row flex-wrap  gap-6'>
             {
              data &&  data.map((val,index)=>{
                const date = new Date(val.createdAt);

                // Get the components of the date
                const day = String(date.getUTCDate()).padStart(2, '0');
                const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
                const year = date.getUTCFullYear();
                const formattedDate = `${day}-${month}-${year}`;
                    return <div key={val.id} className=" cursor-pointer card transition-all     hover:scale-90   duration-500 w-[350px]  md:w-96 bg-base-100 shadow-xl" onClick={()=>handlego(val._id)}>
                    <figure>
                      {
                         index ==0 ?  <img src={val.previewImage} alt="blogsImage" /> :<img src='/blog2.jpg' alt="blogsImage" />

                        
                      }
                      </figure>
                    <div className="card-body">
                    <h2 className="card-title text-md">
                        {val.title}
                                              </h2>
                      <p className=' text-md font-normal'>{
                            val.points.Introduction.text.substring(0,90)
                      } ...</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline font-normal p-2">TIA</div> 
                        <div className="badge badge-outline font-normal p-2">{formattedDate}</div>
                      </div>
                    </div>
                  </div>
                })
             }
        </div>
    </div>
  )
}

export default Blog