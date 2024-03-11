import React from "react";
import { NavLink } from "react-router-dom";

let SmallMenu = () => {
  return (
    <menu className="menu small-menu">
      <div className="profile">
        <i className="fas fa-bars-staggered menu-icon"></i>
      </div>
      <div className="links">
        <NavLink to={"/"} className="Link">
          <i className="fas fa-list"></i>
        </NavLink>
        <NavLink to={"/mine"} className="Link">
          <i className="fa-regular fa-rectangle-list"></i>
        </NavLink>
        <NavLink to={"/add"} className="Link">
          <i className="fas fa-plus"></i>
        </NavLink>
        <NavLink to={"/favorite"} className="Link">
          <i className="fas fa-heart"></i>
        </NavLink>
        <NavLink to={"/saved"} className="Link">
          <i className="fas fa-bookmark"></i>
        </NavLink>
        <NavLink to={"/recycle"} className="Link">
          <i className="fas fa-trash"></i>
        </NavLink>
      </div>
      <button>
        <i className="fas fa-sign-out"></i>
      </button>
    </menu>
  );
};
export default SmallMenu;
