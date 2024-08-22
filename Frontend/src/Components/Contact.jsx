import React from 'react'
import Navbar from './Navbar'
import Footer  from './Footer'
import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <div className='flex justify-center items-center h-screen'>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w"
              {...register("name", { required: true })}
            />
            {errors.name && <span className='text-red-500 '>This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-500 '>This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <input
              type="text"
              placeholder="Enter your message"
              className="input input-bordered w-full max-w"
              {...register("message", { required: true })}
            />
            {errors.message && <span className='text-red-500 '>This field is required</span>}
          </div>

          {/* Button */}
          <div className=" mt-10">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Send
            </button>
           
          </div>
          </form>
    </div>
    </div>
    <Footer />
</>
  )
}

export default Contact