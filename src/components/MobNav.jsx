import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexts } from './context/Context'

const MobNav = () => {
    const link=  [
        { name:"Home", link:"/" },
        { name:"About", link:"/about" },
        { name:"Blogs", link:"/blogs"},
        { name:"Gallary", link:"/gallary" },

        { name:"Courses", link:"/courses" },
        { name:"SignIn", link:"/Signin" },
        { name:"SignUp", link:"/Signup" },
     ]
const {open,setOpen} = useContext(contexts)
    return (
    <div onClick={()=>setOpen(!open)} className={`   fade-in       w-[100%] md:hidden h-[calc(100vh-72px)]     duration-500  bg-slate-100   gap-5  p-4`} >
      <div className=' flex scroll-my-8 h-[7%]'>
           <div className=' flex gap-20 overflow-x-scroll    scrollbar-thumb-rose-400
               '>
           {
       link.map((val,  i)=><Link key={i} onClick={()=>setOpen(!open)}  to={val.link}> <p  className=' text-base   text-black  font-semibold'>{val.name}</p></Link>)
     }
           </div>
      </div>
      <div className=' flex flex-col items-center justify-center  gap-5  h-[70%]'>
      {
       link.map((val,  i)=><Link key={i}  onClick={()=>setOpen(!open)} to={val.link}> <p className=' text-base   text-black font-normal'>{val.name}</p></Link>)
     }
      </div>
    
 </div>
  )
}

export default MobNav