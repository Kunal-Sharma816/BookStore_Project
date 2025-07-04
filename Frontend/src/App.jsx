import { useState, useEffect } from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Courses from "./courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthProvider.jsx";
import { Navigate } from "react-router-dom";
import  Cart  from "./cart/Cart.jsx"

function App() {
  const [authUser , setAuthUser] = useAuth();
    console.log(authUser)
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element= {authUser? <Courses /> : <Navigate to = "/signup"/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />     
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
