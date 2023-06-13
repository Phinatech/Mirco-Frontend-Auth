import { Outlet } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 6016f567501295208cef91203ee9a651d04ec264
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
