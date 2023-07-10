// import React from 'react'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import {useRecoilState} from "recoil"
import { CreateUser } from "../../Global/RecoilManagement";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../ApiCalls/ApiCalls";
import Swal from "sweetalert2";
import { IUser } from "../../Types/Types";

const SignUp = () => {
//Recoil State management
const [newuser, setNewUser] = useRecoilState(CreateUser)


//navigate to page
const  navigate =  useNavigate()

//Cosuming the Api using Tanstack
const schema = yup
.object({
  name:yup.string().required("Name is required"),
  email:yup.string().required("Email is required"),
  password:yup.string().required("Password is required"),
})

.required()
type formData = yup.InferType<typeof schema>

const {
  handleSubmit,
  formState:{ errors },
  reset,
  register,
} = useForm<formData>({
  resolver: yupResolver(schema),
});

const posting = useMutation({
  mutationKey:["user"],
  mutationFn: createUser,


  //if Successfully
onSuccess:(data:IUser) =>{
console.log("this  si", data)

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500,
  willClose: () =>{
    navigate("/AuthurPage");
  }
});
},

//if error occurs 
onError:(error: any)=>{
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Something went wrong",
    showConfirmButton: false,
    timer: 1500,
  });
}

})

const Submit = handleSubmit(async (data) =>{
  posting.mutate(data)
  setNewUser(data)

  reset()
})

console.log(`this is user`, newuser);



  return (
    <form onSubmit={Submit} className="flex-1 flex justify-center items-center h-fit">
      <div className=" relative w-[75%] justify-center gap-12 flex flex-col ">
        <div className=" flex justify-end items-center gap-3 mt-[20px] mb-[30px] ">
          <p className=" flex md:hidden absolute left-0">SkillLearn</p>
          <p className="hidden md:flex">Already Have an account?</p>
          <NavLink to="/signin">
            <button className="bg-red-400 w-[80px] h-12 rounded  text-white outline-none border-none hover:outline-none">
              log in
            </button>
          </NavLink>
        </div>

        <div>
          <h1 className=" font-bold pb-[5px] text-[25px] text-[#6c6b6b] md:text-[37px]">
            Create Your Free account
          </h1>
          <p className="text-[grey] mb-[20px] text-[16px] md:text-[18px]">
            See how the world's best user experiences are created
          </p>

          <div className="flex  flex-col gap-8">
            <div>
              <p className="text-[grey] font-semibold ">Full name</p>
              <input
                className=" border-[1px] border-[lightgrey] w-full p-[15px] rounded outline-none focus:border-[1px] focus:border-[darkgrey]"
                placeholder="Your name"
                type="text"
                {...register("name")}
              />
          
            </div>
            <div>
              {" "}
              <p className="text-[grey] font-semibold ">Email address</p>
              <input
                className=" border-[1px] border-[lightgrey] w-full p-[15px] rounded outline-none focus:border-[1px] focus:border-[darkgrey]"
                placeholder="Example@email.com"
                type="email"
                {...register("email")}
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
                  {...register("password")}
                />
                <div className="flex flex-1 items-center">
                  <AiOutlineEyeInvisible />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="bg-red-300 p-[15px]  rounded-md hover:translate-x-2 hover:bg-transparent hover:border-[2px] hover:border-[#FCA5A5] hover:text-[#FCA5A5] hover:outline-none mb-[10px]">
          Start Now
        </button>

        <div className="">
          By signing up, you agree to our communications and usage terms Already
          have an account?{" "}
          <NavLink to="/signin">
            <span className="text-red-600">Sign in</span>
          </NavLink>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
