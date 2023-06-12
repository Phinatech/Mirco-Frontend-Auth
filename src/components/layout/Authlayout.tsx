import Header from "../blocks/homeblock/Header";
import Footer from "../blocks/homeblock/Footer";
import { Outlet } from "react-router-dom";

const Authlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Authlayout;
