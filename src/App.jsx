import React from 'react'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import Front from './components/Front'
import About from './components/About'
import Courses from './components/Courses'
import SignIn from './components/SignIn'
import Sign from './components/Sign'
import OurBlogs from './components/OurBlogs'
import MobNav from './components/MobNav'
import CoursePage from './components/CoursePage'
import BlogPage from './components/BlogPage'
import Condition from './components/Condition'
import Privacy from './components/Privacy'
import Gallary from './components/Gallary'
import Dashboard from './CMS/Dashboard'
import { useSelector } from 'react-redux'
import Points from './CMS/Points'



const App = () => {
const {user} = useSelector((state)=>state.user)

   const router =  createBrowserRouter([
      {
         path:"/",
         element:<Home/>,   
         children:[
           {
              path:"/",
              element:<Front/>
           }
           ,
           {
            path:'/navi',
            element:<MobNav/>
           },
            {
              path:"/about",
              element:<About/>
           }
           ,
           
            {
              path:"/blogs/:id",
              element:<OurBlogs/>
           }
           
          
          ,
          
          {
            path:"/blogs",
            element:<BlogPage/>
         }
         
        
        ,
           
            {
              path:"/courses/:id",
              element:<Courses/>
           } ,
           {
            path:"/courses",
            element:<CoursePage/>
         } ,
           
          {
            path:"/privacyPolicy",
            element:<Privacy/>
         },
         {
            path:"/gallary",
            element:<Gallary/>
         },
          {
            path:"/termsandconditions",
            element:<Condition/>
         },
          {
            path:"/signin",
            element:<Sign/>
         },
           
         {
           path:"/signup",
           element:<SignIn/>
        },
       
         ] 
      }])
  return (
     <RouterProvider router={router}/>
  )
}

export default App