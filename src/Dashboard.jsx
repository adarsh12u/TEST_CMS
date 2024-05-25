import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'

import Seminar from './Seminar';
import Course from './Course';
import Blog from './Blog';
import DashSlidebar from './DashSlidebar'

const Dashboard = () => {
  const location = useLocation();
  const[tab , settab] = useState('');
  
useEffect(()=>{
   const url = new URLSearchParams(location.search);
   const taburl = url.get('tab');
   if(taburl != null){
    settab(taburl)
   }

},[location.search])
  return (
    <div className=' flex flex-col md:flex-row gap-5'>
  
      <div className=' w-full md:w-[15%]'>
         <DashSlidebar/>
      </div>
{
    console.log(tab)
}
  
<div className=' w-screen md:w-[85%] '>

  {
    tab==="blog" && <Blog/>
  }
  {
    tab ==="course" && <Course/>
  }
  {
    tab ==="seminar" && <Seminar/>
  }

  </div>
    </div>
  )
}

export default Dashboard