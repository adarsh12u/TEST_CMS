import React, { useContext, useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";

import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { contexts } from './context/Context';
const Nav = () => {
 const {open , setOpen}  = useContext(contexts)
  
  
    const links=  [
        { name:"Home", link:"/" },
        { name:"About", link:"/about" },
        { name:"Blogs", link:"/blogs" },
        { name:"Gallary", link:"/gallary" },
        
        { name:"Courses", link:"/courses" }
      ]
     const navigate = useNavigate();

     const handleopen = (val)=>{
      setOpen(!open)
         val =="cross" ? navigate('/') : navigate('/navi')

     }
    
      return (
       
           <header className='  z-50    bg-white '>
    
            <nav className='md:sticky md:top-0 flex justify-between align-element  bg-white items-center p-3  md:py-4  '>
                <div className=' flex justify-between items-center '>
                  
                  <div className=' flex gap-2 items-center'>

                    <img src="/tia.jpg"  className= ' w-14 h-12 md:w-18 md:h-18' alt="" />
                     <h1 className=' text-2xl  text-[#423383] font-bold'>
                        
                         ATIN
                        </h1>
                  </div>
               
                  
    
                </div>
                <div className='hidden  md:flex justify-between w-[50%]'>
                     {
                        links.map((val,  i)=>{ return val.link.includes('#') ? <a href={val.link} > <p onClick={()=>setOpen(!open)} className=' text-lg   text-black font-normal'>{val.name}</p> </a> :
       <NavLink key={i}   to={val.link} onClick={()=>setOpen(!open)} >  {val.name}</NavLink>})
     
                      }
                  </div>
                <div className=' flex gap-8'>
                <Link to={'/signin'}>  <button className=' hidden md:block bg-[#423383] hover:bg-slate-300 transition-all duration-300 px-4   text-white  rounded-md py-2   ' type="button">Sign in</button></Link>
                   
                     <Link to={'/signup'}><button className=' hidden md:block    bg-purple-900 px-2 hover:bg-slate-300 transition-all duration-300  py-2 text-white md:px-4 md:py-2  rounded-md'>Sign up</button></Link>
                   { open === false ? <IoMenu size={30} onClick={()=>handleopen("menu")} className=' md:hidden cursor-pointer' />  :<RxCross1 size={30} onClick={()=>handleopen("cross")} className=' md:hidden cursor-pointer'/> } 
                </div>
              
                
            </nav>
           
                      </header>
       )
}

export default Nav