import React from 'react'
const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" 
         className='h-[10rem]'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline py-1">${item.price}</div>
      <div className="hover:bg-pink-500 cursor-pointer duration-300 border rounded-full hover:text-white px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards