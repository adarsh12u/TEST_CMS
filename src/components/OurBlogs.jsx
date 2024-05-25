import React, { useContext, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { MdOutlineLocationCity } from "react-icons/md";
import Footer from './Footer';
import { contexts } from './context/Context';
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdText } from 'react-icons/io';
import Commentcreate from './Comments/Commentcreate';
import ShowComment from './Comments/ShowComment';
import { BsFillSendFill } from 'react-icons/bs';
import moment from 'moment';
import { useSelector } from 'react-redux';
const OurBlogs = () => {

const {user} = useSelector((state)=>state.user)

  const {modalopen ,setmodalopen } =  useContext(contexts);
  console.log(modalopen)
          const {id} = useParams();
          const [data,setData] = useState([]);
          const[content , setcomment] = useState('')
const[click,setclick] = useState(true);

const handleDel = (blogid,commentId)=>{
  
     
     fetch(`https://cms-for-course-and-authentification.vercel.app/blogs/${blogid}/${commentId}`,{
      method:"DELETE"
     }).then((res)=>{
      console.log(res)
                  return res.json();
                  console.log(res)
              }).then((res)=>{
                   console.log(res)
                   setcomment('')
                   setclick(!click)
              })
}
          const handle = (blogid)=>{
      
            const option = {
                method:"POST",
                headers :{
                  "Content-type" : "application/json"
                },
                body:JSON.stringify({
                    text:content,
                    author:"atin agrawal"
                })
            }
              fetch(`https://cms-for-course-and-authentification.vercel.app/blogs/${blogid}`,option).then((res)=>{
                  return res.json();
              }).then((res)=>{
                   console.log(res)
                   setcomment('')
                   setclick(!click)
              })
             
      
             
          }
          useEffect(()=>{

            fetch('https://cms-for-course-and-authentification.onrender.com/blogs').then((res)=>{
            return res.json();
            }).then((res)=>{
           setData(res.blogs)
            })
       
           
         },[click])

          const filter = data.filter((val)=>val._id == id);
          console.log(filter)

console.log(filter)
if(filter.length ==0){
  return <div className='  h-auto w-full flex  items-center justify-center'>
     <span className="loading loading-dots loading-lg"></span>
  </div>
}
const date = new Date(filter[0].createdAt);

// Get the components of the date
const day = String(date.getUTCDate()).padStart(2, '0');
const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = date.getUTCFullYear();
const formattedDate = `${day}-${month}-${year}`;
  return (
  filter.length > 0 && <div className='  mt-10'>

    
       <div className='   align-element flex flex-col-reverse gap-5 md:flex-row'>
           <div className=' flex flex-col gap-5 w-full md:flex-1'>
               <h1 className=' text-2xl  md:text-3xl'>{filter[0].title}</h1>
               <h1>{filter[0].para}</h1>
               <div className=' flex gap-5 md:items-center flex-col md:flex-row'>
                <div className=' flex gap-5 justify-center items-center'>
                   <img src="/founder.jpg" className=' w-10 h-10 rounded-badge object-cover' alt="" />
                   <h1 className=' text-base font-bold'>Atin Agrawal</h1>

                </div>
                   <h1 className=' text-center bg-slate-200 px-3 p-1 rounded-xl'> {filter[0].tags[0]} </h1>
                   <h1 className=' text-center bg-slate-200 px-3 p-1 rounded-xl'>{filter[0].tags[1]}</h1>
                   <h1 className='text-center bg-slate-200 px-3 p-1 rounded-xl'>{filter[0].tags[2]}</h1>

               </div>
               <h1 className=' text-base font-bold'>Posted at :  {formattedDate} </h1>
           </div>
           <div className='  '>
               <img src={filter[0].previewImage} alt="" className=' w-fullobject-cover md:flex-1   rounded-lg' />
           </div>
       </div>
     

<div className='flex flex-col mt-10    md:flex-row-reverse gap-5   align-element'>
  <div className='  bg-slate-100 h-[40rem]  md:sticky md:top-0 flex flex-col gap-5 p-5  w-full md:w-1/3 overflow-y-scroll'>
    <h1 className=' text-2xl font-semibold'>OUR LATEST BLOGS</h1>
    

      {
           data.length > 0 && data.map((val)=>{
      return <Link to={`/blogs/${val._id}`}>
       <div className=' flex flex-col  gap-5 cursor-pointer  items-center '>
                  
              <div className=' w-full flex  justify-center'>
                 <img src={ val.previewImage } className='   w-[80%]  object-fill rounded-lg' alt="" /></div>       
              <div>
                  <h1 className=' text-lg font-semibold'>{val.title}</h1>
                </div>       
                  
      </div>
      </Link>
           }) 
      }
            
  </div>
<div className=' align-element flex flex-col  w-full  md:w-2/3  gap-10'>
      {
        filter.length>0 &&  Object.keys(filter[0].points).map((val,key)=>{
              return <div className=' flex flex-col gap-2'>
  
                     <div>
                         <h1 className=' text-lg md:text-2xl font-semibold'>{val}</h1>
                     </div>
                     <div>
                      <p className=' text-base '>

                         {
                            filter[0].points[val].text
                         }
                      </p>
              {
                  filter[0].points[val].image && <img src={filter[0].points[val].image} className=' mt-5 w-full  h-80 object-cover' alt="" />
              }
                      
                     </div>
                   
              </div>
        })
      }
       <div className='  mt-10'>
        <h1 className=' text-center mb-5 text-2xl font-semibold'>
            Comments
        </h1>
        <div className=' flex justify-around gap-5 items-center
   '>
     
       
     
           <input minLength={5} maxLength={200} type="text" className=' w-full rounded-lg ' placeholder='write you comment here.......' required value={content} onChange={(e)=>setcomment(e.target.value)}/>
          
        <div>
        <BsFillSendFill color={'blue'} size={25} onClick={()=>handle(filter[0]._id)}    className=' cursor-pointer'/>
        </div>
   </div>

   
    {
       filter[0].comments.length > 0 &&
      <div className=" align-element mt-4 flex flex-col gap-5 bg-slate-100 rounded-lg  p-1 md:p-5"> 
         {
           filter[0].comments.map((val)=>{
             return <div className=" flex  flex-col md:flex-row justify-between gap-4 md:gap-10 items-center bg-white rounded-xl md:p-2">
                       <div className=' ml-3'>

                         <h1 className=' text-base font-medium'>
                             {val.text}
                         </h1>
                         <h1 className=' text-sm mt-1'>
                            {moment(val.createdAt).fromNow()}
                         </h1>
                       </div>
          <div> 

              <h1 className=" cursor-pointer text-red-600 font-medium  text-base" onClick={()=>handleDel(filter[0]._id , val._id)}>Delete </h1>
              </div>                      
                   </div>
             })
         }
    </div>
       
            } 
        
     
      
      
  </div>
   </div>
</div>
   
   
      
  
    
         
         
<div className=' mt-10 border-t-2' >
  
    <Footer/>
</div>


         </div>
  )
}
export default OurBlogs

//                         //modal
// modalopen &&
//        <div className=' h-auto  absolute bottom-0  left-[2%] right-[2%]  md:left-[20%] md:right-[20%]   bg-gray-100 rounded-lg   '> 
          
           
//            {/* <Contact/> */}
           
           
//            <div className=' relative  float-end right-2  top-2 cursor-pointer'>
//            <RxCross2 size={25} onClick={()=>setmodalopen(false)}/>
//            </div>
            
           
           
//            <div  className='   mb-5 mt-5 p-5 md:p-0 w-full lg:p-1'>
        
//         <div className=' w-full text-center'>
              
//               <h1 className=' text-blue text-4xl font-semibold'><span className=' text-[#423383]'>Contact</span>  Us</h1>
//             <form action="https://getform.io/f/7a31f66d-a2bb-47c8-a6a0-ae2a4517e322" method='POST'>
//               <div className='w-full lg:w-1/2 m-auto mt-12  lg:mt-20 flex flex-col  gap-5'>
            
                
//                 <div className=' flex gap-2 items-center'>
//                 <FaUserAlt size={24}/>
//                   <input type="text" name="name"  className=' rounded-lg  w-full  text-lg font-normal p-2 text-black ' placeholder='Enter your name' />
//                 </div>
//                 <div className=' flex gap-2 items-center'>
//                   <MdEmail size={25}/>
//                   <input type="email" name="email"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your email' />

//                 </div>
//                 <div className=' flex gap-2 items-center'>
//                   <MdOutlineLocationCity size={25}/>
//                   <input type="text" name="city"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your city' />

//                 </div>
// <div className=' flex gap-2 '>
//   <IoMdText className=' mt-4' size={25}/>
// <textarea name="message" id="" cols="5" rows="5" placeholder='Enter your Message' className=' rounded-lg text-lg font-normal  p-3 w-full'></textarea>

// </div>
//                   <button  type='submit'  className=' p-2 rounded-lg duration-500 transition-all hover:text-sky-400 border  text-lg font-semibold hover:border-sky-400 hover:bg-slate-900   bg-[#423383] from-sky-400 to-sky-800  text-white'>submit</button>
//               </div>
//             </form>
//           </div>

//     </div>
           
           
           
           
           
           
           
           
           
//            {/* <Contact/> */}








            
//         </div>