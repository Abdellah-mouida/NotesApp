import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { base } from "../base/url";

let Sign = () => {
  let [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    Notes: [],
    Favorite: [],
    Saved: [],
    Trash: [],
    profile: "",
  });
  let nav = useNavigate();
  let handelSign = async () => {
    let cookie = new Cookies();
    await axios
      .post(base + "/user", form)
      .then((res) => cookie.set("Notes-User", res.data));
    window.location.pathname = "/";
  };
  let handlChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign">
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      <div className="sqr"></div>
      {/* ------------------------------- */}
      <div className="sign-container">
        <h2>Sign up</h2>
        <div className="inps">
          <div className="form-controle">
            <label htmlFor="">
              <i className="fas fa-user"></i> UserName
            </label>
            <input
              type="text"
              autoFocus
              name="name"
              placeholder="Username ..."
              autoComplete="none"
              onChange={handlChange}
            />
          </div>
          <div className="form-controle">
            <label htmlFor="">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="none"
              placeholder="Email ..."
              onChange={handlChange}
            />
          </div>
          <div className="form-controle">
            <label htmlFor="">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              autoComplete="none"
              type="password"
              name="password"
              placeholder="Password ..."
              onChange={handlChange}
            />
          </div>
        </div>
        <div className="form-controle">
          <button onClick={handelSign}>Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Sign;
