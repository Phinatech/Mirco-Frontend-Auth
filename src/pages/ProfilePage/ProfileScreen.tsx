import React from "react";
import { Profile } from ".";
import Cards from "./Cards";

const ProfileScreen: React.FC = () => {
  return (
    <div>
      <Profile />
      <center>
        <Cards />
      </center>
    </div>
  );
};

export default ProfileScreen;
