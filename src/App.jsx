import React from 'react'



import PointForm from './Points'
import Blog from './Blog'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const App = () => {

   const router =  createBrowserRouter([
      {
         path:"/",
         element:<Blog/>,   
      },  {
            path:"/points",
            element:<PointForm/>
         }
          
       
      ])
  return (
     <RouterProvider router={router}/>
  )
}

export default App