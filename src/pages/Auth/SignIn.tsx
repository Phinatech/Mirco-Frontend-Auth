import { AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-fit">
      <div className=" relative w-[75%] justify-center gap-12 flex flex-col ">
        <div className=" flex justify-end items-center gap-3 mt-[20px] mb-[30px] ">
          <p className=" flex md:hidden absolute left-0">SkillLearn</p>
          <p className="hidden md:flex">Don't have an account?</p>
          <NavLink to="/">
            <button className="bg-red-400 w-[80px] h-12 rounded  text-white outline-none border-none hover:outline-none">
              Register
            </button>
          </NavLink>
        </div>

        <div>
          <h1 className=" font-bold pb-[5px] text-[25px] text-[#6c6b6b] md:text-[37px]">
            Hello ! Welcome back.
          </h1>
          <p className="text-[grey] mb-[20px] text-[16px] md:text-[18px]">
            Log in with your data that you entered during your registration.
          </p>

          <div className="flex  flex-col gap-8">
            <div>
              {" "}
              <p className="text-[grey] font-semibold ">Email address</p>
              <input
                className=" border-[1px] border-[lightgrey] w-full p-[15px] rounded outline-none focus:border-[1px] focus:border-[darkgrey]"
                placeholder="Example@email.com"
                type="email"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[grey] font-semibold ">Password</p>
                <p className="text-[#6C63FF] font-semibold">Forget Password</p>
              </div>

              <div className="flex w-full border-[1px] border-[lightgrey] p-[15px] rounded focus:border-[2px] focus:border-[darkgrey]">
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

        <button className="bg-red-300 p-[15px]  rounded-md hover:translate-x-2 hover:bg-transparent hover:border-[2px] hover:border-[#FCA5A5] hover:text-[#FCA5A5] hover:outline-none mb-[10px]">
          Start Now
        </button>

        <div className="">
          Don't have an account?
          <NavLink to="/">
            <span className="text-red-600">Sign up</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
