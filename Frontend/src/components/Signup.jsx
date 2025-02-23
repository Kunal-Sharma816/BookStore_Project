import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault(); // Ensure default form submission is prevented
    console.log("Submitted Data:", data);
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
                <span>username</span>
                <br />
                <input
                  type="text"
                  placeholder="username"
                  className="w-80 px-3  h-8 border rounded-md mt-2 outline-none"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                {errors.username && (
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
