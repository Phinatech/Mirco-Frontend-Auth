import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

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
