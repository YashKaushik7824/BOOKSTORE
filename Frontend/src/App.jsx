import Home from "./Home/Home"
import {Routes, Route, Navigate } from "react-router-dom"
import Courses from "./courses/Courses.jsx"
import SignUp from "./Components/SignUp.jsx"
import Contact from "./Components/Contact.jsx"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./Context/AuthProvider.jsx"
const App = () => {
  const [authUser,setAuthUser] = useAuth();
  return (
    <>
   {/* <Home /> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser?<Courses />:<Navigate to='/signup'/>} />
      {/* {/* <Route path="/" element={<Home />} /> */}
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
    <Toaster />

   </>
  )
}

export default App