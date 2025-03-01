import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
// import { Navigate } from "react-router-dom";

function Signup() {
  const location = useLocation()
  const navigate  = useNavigate()
  const from = location.state?.from?.pathname || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // event.preventDefault(); // Ensure default form submission is prevented
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          navigate(from , {replace:true});
          
        } 
        localStorage.setItem("User", JSON.stringify(res.data.user)); // it stores data into the local storage of browser so that we can use it further for checking
        // whether user is sigup or not 
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " +err.response.data.message);
         
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="">
          <div className="modal-box w-[60rem] h-[30rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* username */}
              <div className="mt-6">
                <span>Fullname</span>
                <br />
                <input
                  type="text"
                  placeholder="fullname"
                  className="w-80 px-3  h-8 border rounded-md mt-2 outline-none"
                  {...register("fullname", {
                    required: "fullname is required",
                  })}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* email */}
              <div className="mt-6">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3  h-8 border rounded-md mt-2 outline-none"
                  {...register("email", { required: "eamil is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="mt-6">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3  h-8 border rounded-md mt-2 outline-none"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Button and sign-in */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 border rounded-md w-20 h-10 text-white px-3 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-lg">
                  Already registered?{" "}
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
