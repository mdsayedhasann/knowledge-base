/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../../assets/images/profile.png"

const Header = () => {
  return (
     <div className="flex justify-between border-b py-2 items-center">
          <h1 className="text-2xl font-bold">Knowledge Base</h1>
          <img src={Profile} alt="" />
     </div>
  );
};

export default Header;
