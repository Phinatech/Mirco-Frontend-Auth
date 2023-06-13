import React from "react";
import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";

const ProfileLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProfileLayout;
