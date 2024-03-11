import React from "react";
import Menu from "../Components/Menu";
import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
let Home = () => {
  return (
    <div className="home">
      <Menu></Menu>
      <div className="home-outlet">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Home;
