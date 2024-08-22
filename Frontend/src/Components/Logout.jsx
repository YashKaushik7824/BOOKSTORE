import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser,setAuthUser] = useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({...authUser,user:null})
            localStorage.removeItem('USers')
            toast.success("Logout Successfully")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }catch(err){
            console.log("Logout Error " + err)
            setTimeout(() => {}, 3000);
            toast.error("Error: " + error.message)
        }
    }
  return (
    <div>
        <button className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer'
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default Logout