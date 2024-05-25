import React from 'react'

import { createContext, useState } from "react";


export const contexts = createContext();
const Context = ({children}) => {
  const[open,setOpen] = useState(false)
  const[modalopen,setmodalopen] = useState(false);

  return (
    <contexts.Provider value={{open ,setOpen,modalopen,setmodalopen}}>
            

    {children}                    

    
</contexts.Provider>
  )
}

export default Context


