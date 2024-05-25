
import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";


const Commentcreate = ({id}) => {
  
   
    const[content , setcomment] = useState('')


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
        })
       

       
    }
  return (
    <>
  
   
     
       
  


   <div className=' flex justify-around gap-5 items-center
   '>
     
       
     
           <input minLength={5} maxLength={200} type="text" className=' w-full rounded-lg ' placeholder='write you comment here.......' required value={content} onChange={(e)=>setcomment(e.target.value)}/>
          
        <div>
        <BsFillSendFill color={'blue'} size={25} onClick={()=>handle(id)}    className=' cursor-pointer'/>
        </div>
   </div>
    
       
        
     
      
          
 
         
    </>
  )
}

export default Commentcreate