import logo from "../../../assets/newLogo.png";

const AuthNavBar = () => {
  return (
    <div className="w-[45%] hidden md:flex bg-red-300 justify-center items-center pb-[30px] ">
      <div className=" w-[90%] flex flex-col gap-5">
        <div className=" text-xl font-bold mt-[30px] text-white mb-[30px]">
          SkillLearn.
        </div>
        <img src={logo} className="mb-[20px]" />
        <div className=" text-[47px] text-white text-center font-bold ">
          Turn your ambition into a success story
        </div>
        <div className="text-white text-[20px] text-center">
          Choose from over 100,000 online video
        </div>
      </div>
    </div>
  );
};

export default AuthNavBar;
