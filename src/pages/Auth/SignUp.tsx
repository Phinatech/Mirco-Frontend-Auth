// import React from 'react'
import { AiOutlineEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-fit">
      <div className=" relative w-[70%] justify-center gap-12 flex flex-col ">
        <div className=" flex justify-end items-center gap-3 mt-[20px] ">
          <p className=" flex md:hidden absolute left-0">SkillLearn</p>
          <p className="hidden md:flex">Already Have an account?</p>
          <button className="bg-red-400 w-[80px] h-12 rounded hover:bg-slate-400 text-white">
            log in
          </button>
        </div>

        <div>
          <h1 className=" font-bold text-[37px] text-[#6c6b6b]">
            Create Your Free account
          </h1>
          <p className="text-[grey] mb-[20px] text-xl">
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

        <button className="bg-red-300 p-[15px]">Start Now</button>
      </div>
    </div>
  );
};

export default SignUp;
