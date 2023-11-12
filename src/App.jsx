import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import NotFound from "./Components/NotFound/NotFound"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"


function App() {


  return (
    <>
     <Navbar/>
      <Routes>
       
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
