import React from "react";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from "./Login";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post('http://localhost:4001/user/signup',userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("SignUp Successfull 😎");
        navigate(from, {replace:true})
      }
      localStorage.setItem("USers",JSON.stringify(res.data.user)) // to store user data only im the local storage
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error(err.response.data.message);
      }
    })
  }

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">SignUp</h3>
          <div className="mt-4 space-y-2">
            <span>FullName</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className='text-red-500 '>This field is required</span>}
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
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-500 '>This field is required</span>}
          </div>

          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              SignUp
            </button>
            <p className="text-xl">
              Have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
