import React from "react";
import banner from "../../assets/login_banner.png";
import google from '../../assets/Google.png'

const Login = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={banner}
          alt="Login"
          className="max-w-full h-auto rounded-lg "
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center rounded-lg  p-8 text-center ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Login App
        </h2>
        <p className="w-full text-gray-600 mb-6  text-center text-[1rem]">
          please signUp First
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              required
              className=" w-[30rem] border border-gray-300 rounded-3xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="UserName or email"
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-[30rem] border border-gray-300 rounded-3xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="password"
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <button
              type="button"
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-3xl"
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-3xl"
            >
              Sign In
            </button>
          </div>
          <div className=""></div>

          <button
            type="button"
            className="w-full mt-4 bg-white hover:bg-stone-500 text-zinc-900 text-sm font-normal py-2 px-4 rounded-3xl shadow-md flex justify-center gap-4"
          >
            <img src={google} alt="" />
            Sign Up with Google
          </button>

          <div className="flex items-center mt-4 max-w-full justify-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
