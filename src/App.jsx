import React from 'react'



import Dashboard from './CMS/Dashboard'
import PointForm from './Points'



const App = () => {

   const router =  createBrowserRouter([
      {
         path:"/",
         element:<Home/>,   
         children:[
           {
              path:"/cms",
              element:<Dashboard/>
           },
           {
            path:"/points",
            element:<PointForm/>
         }
          
         ] 
      }])
  return (
     <RouterProvider router={router}/>
  )
}

export default App