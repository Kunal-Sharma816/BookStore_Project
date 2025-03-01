import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {         
               
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user)); // it stores data into the local storage of browser so that we can use it further for checking
            // whether user is sigup or not
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},1000)
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-6">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 h-8 border rounded-md mt-2 outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mt-6">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 h-8 border rounded-md mt-2 outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button and sign-up link */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 border rounded-md w-20 h-10 text-white px-3 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <Link to="/signup">
                Not registered?{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  Signup
                </span>
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
