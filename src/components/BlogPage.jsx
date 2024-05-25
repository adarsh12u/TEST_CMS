import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Footers from './Footer';
import AddressDetails from './AddressDetails';
import Contact from './Contact';

const link=  [
  { name:"Home", link:"/" },
  { name:"About", link:"/about" },
  { name:"Blogs", link:"/blogs" },
  { name:"Gallary", link:"/gallary" },

  { name:"Courses", link:"/courses" },
  { name:"SignIn", link:"/Signin" },
  { name:"SignUp", link:"/Signup" },
]
const BlogPage = () => {
  

  const [data,setData] = useState([]);
  const[original,set] = useState([]);

  useEffect(()=>{

     fetch('https://cms-for-course-and-authentification.vercel.app/blogs').then((res)=>{
     return res.json();
     }).then((res)=>{
    setData(res.blogs)
    set(res.blogs);
     })

    
   
  },[])
  const [inputval , setinput] = useState(' ');
  
const naviagte = useNavigate();
  const handlego = (id)=>{
       
    naviagte(`/blogs/${id}`)
       
     
  }
  
if(data.length ==0){
    return <div className='  h-auto w-full flex  items-center justify-center'>
       <span className="loading loading-dots loading-lg"></span>
    </div>
  }
  const handledata = ()=>{
    const vals = inputval;
    console.log(vals)
    console.log(data)
     const datas = data.filter((val)=>{
      return val.title.includes(vals)
     })
     if(datas.length == 0){
      let array = [0];  
      setData(array)
     }else{

       setData(datas)
     }
     console.log(datas)
  }
  
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
    {  data.length > 0 && <div id='blog' className='    flex flex-col  gap-10'>
       <div className=" bg-[#423383] h-52   flex  flex-col  items-center justify-center ">
        <h1 className=" text-2xl font-bold text-white">Blogs</h1>
      </div>

<div className=' flex gap-2 justify-center items-center'>
      <input type="text" className=' rounded-lg' value={inputval} onChange={(e)=>setinput(e.target.value)} />
      <button className=' p-2 bg-[#423383] hover:bg-slate-300 transition-all duration-150  rounded-lg text-white text-sm md:text-base font-normal' onClick={handledata}>Search</button>
      <button className=' p-2 bg-[#423383] rounded-lg text-white text-sm hover:bg-slate-300 transition-all duration-150  md:text-base font-normal' onClick={()=>setData(original)}>Show All</button>

</div>

{
  data[0] == 0 ? <h1 className=' text-center'>not found</h1> :<div className=' flex flex-col md:flex-row align-element flex-wrap  gap-6'>
  {
   data && data.map((val,index)=>{
     const date = new Date(val.createdAt);

     // Get the components of the date
     const day = String(date.getUTCDate()).padStart(2, '0');
     const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
     const year = date.getUTCFullYear();
     const formattedDate = `${day}-${month}-${year}`;
         return <div key={val.id} className="card cursor-pointer card transition-all     hover:scale-90   duration-500 w-[350px]  md:w-96 bg-base-100 shadow-xl" onClick={()=>handlego(val._id)}>
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
}
        
        <div
        id="conts"
        className=" align-element w-full  md:pb-12 flex flex-col md:flex-row justify-between"
      >
        <AddressDetails />
        <Contact />
      </div>
        <div className=' '>
                         <Footers/>
                    </div>
    </div>}

</div>


  
  )
}

export default BlogPage