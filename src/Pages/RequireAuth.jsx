import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { base } from "../base/url";
import Cookies from "universal-cookie";

let RequireAuth = () => {
  let cookie = new Cookies();
  let user = cookie.get("Notes-User");
  return user ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={"/sign"} replace={true}></Navigate>
  );
};
export default RequireAuth;
