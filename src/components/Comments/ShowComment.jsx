
import React, { useEffect, useState } from "react";
import moment from 'moment';

const ShowComment = ({comment}) => {
  


  
  return (
    <div className=" align-element mt-4 flex flex-col gap-5 bg-slate-100 rounded-lg  p-5"> 
         {
             comment.map((val)=>{
                   return <div className=" flex justify-between gap-10 items-center bg-white rounded-xl p-2">
                       <div>

                         <h1>
                             {val.text}
                         </h1>
                         <h1>
                            {moment(val.createdAt).fromNow()}
                         </h1>
                       </div>
          <div> 
              <h1 className=" text-red-600 font-medium  text-base" onClick={handle}>Delete </h1>
              </div>                      
                   </div>
             })
         }
    </div>
  );
};

export default ShowComment;
