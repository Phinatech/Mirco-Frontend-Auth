import { Outlet } from "react-router-dom";
import AuthNavBar from "../blocks/homeblock/AuthNavBar";

const Authlayout = () => {
  return (
    <div className="flex w-full ">
      <AuthNavBar />
      <Outlet />
    </div>
  );
};

export default Authlayout;
