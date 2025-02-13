import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
 

function Courses() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-screen min-h-screen flex flex-col">
          <Course />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Courses;
