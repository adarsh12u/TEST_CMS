import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footers from './Footer';
import Review from './Review';
import MoreAbout from './MoreAbout';
import AddressDetails from './AddressDetails';
import Contact from './Contact';




const link=  [
  { name:"Home", link:"/" },
  { name:"About", link:"/about" },
  { name:"Blogs", link:"/blogs" },
 
  { name:"Courses", link:"/courses" },
  { name:"SignIn", link:"/Signin" },
  { name:"SignUp", link:"/Signup" },
]
  
const Gallary = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch("https://cms-for-course-and-authentification.vercel.app/seminars")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res)
        setData(res.seminars);
      });
  }, []);
  console.log(data)
  return (
    data.length > 0 &&
<div className=' '>
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


    <div className=''>
    <div className=" bg-[#423383] h-52   flex  flex-col  items-center justify-center ">
        <h1 className=" text-2xl font-bold text-white">Our Gallary</h1>
      </div>
        

        <div className=' align-element flex gap-10 flex-wrap justify-center mt-10'>
             {
                 data.map((val,ind)=>{

                    return <div className=' flex flex-col gap-4'>

                      <img src={val.previewImage} className='  h-72 w-72 object-cover rounded-lg' key={ind} alt="" />
                       <h1 className=' text-xl font-semibold'>Location : {val.place}</h1>
                    </div>  
                     
                  })
             }
        </div>
        </div>
        <div className='  mt-20 pb-8 md:pb-12'>
     <MoreAbout/>
</div>
<div className=' border-b  mt-20 pb-8 md:pb-12'>
      <Review/>
</div>
<div className=' '>

<div className='align-element mt-10   md:pb-12 flex flex-col md:flex-row  items-center justify-center'>
    <AddressDetails/>
    <Contact/>
</div>
</div>
        <div className=' mt-10'>
            <Footers/>
        </div>
</div>

  )
}

export default Gallary