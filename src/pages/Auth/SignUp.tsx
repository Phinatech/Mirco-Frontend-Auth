// import React from 'react'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-fit">
      <div className=" relative w-[70%] justify-center gap-12 flex flex-col ">
        <div className=" flex justify-end items-center gap-3 mt-[20px] ">
          <p className=" flex md:hidden absolute left-0">SkillLearn</p>
          <p className="hidden md:flex">Already Have an account?</p>
          <button className="bg-red-500 w-[80px] h-12 rounded hover:bg-slate-400 text-white shadow-[0_50px_25px_-24px_rgb(0,0,0,0.3)]">
            log in
          </button>
        </div>

        <div>
          <h1 className=" font-bold pb-[5px] text-[20px] text-[#6c6b6b] md:text-[37px]">
            Create Your Free account
          </h1>
          <p className="text-[grey] mb-[20px] text-[14px] md:text-[18px]">
            See how the world's best user experiences are created
          </p>

          <div className="flex  flex-col gap-10">
            <div>
              <p>Full name</p>
              <input
                className=" border-[1px] border-[lightgrey] w-full p-[15px] rounded outline-none focus:border-[1px] focus:border-[darkgrey]"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div>
              {" "}
              <p>Email address</p>
              <input
                className=" border-[1px] border-[lightgrey] w-full p-[15px] rounded"
                placeholder="Example@email.com"
                type="email"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <p>Password</p>
                <p className="text-[#6C63FF]">Forget Password</p>
              </div>

              <div className="flex w-full border-[1px] border-[lightgrey] p-[15px] rounded">
                <input
                  type="password"
                  placeholder="Enter password "
                  className="w-[90%] outline-none"
                />
                <div className="flex flex-1 items-center">
                  <AiOutlineEyeInvisible />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-red-300 p-[15px] outline-none rounded-md hover:translate-x-2 hover:bg-transparent hover:border-[2px] hover:border-[#FCA5A5] hover:text-[#FCA5A5]">
          Start Now
        </button>

        <div>
          By signing up, you agree to our communications and usage terms Already
          have an account?{" "}
          <NavLink to="/signin">
            <span className="text-red-600">Sign in</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
