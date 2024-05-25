import React from 'react'

const Card = ({img , data , button}) => {
  return (
    <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl mt-7">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Ssssss</h2>
      <p className=' font-semibold'>{data}</p>
      <div className="card-actions justify-end">
        <button className="btn text-white bg-[#423383]  font-normal">{button}</button>
      </div>
    </div>
  </div>
  )
}

export default Card