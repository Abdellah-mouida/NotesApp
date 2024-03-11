import axios from "axios";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { base } from "../base/url";

// interface MenuProps {
//   name: string;
// }

let Menu = () => {
  let cookie = new Cookies();
  let refImg = useRef(null);
  let user = cookie.get("Notes-User");
  let [closed, setClosed] = useState(false);
  let [picture, setPicture] = useState(user.profile);

  return (
    <>
      <div
        className="container-menu"
        onDoubleClick={() => setClosed(true)}
        style={{
          left: closed ? "-100%" : "0",
          backgroundColor: !closed ? "#00000072" : "transparent",
          display: "flex",
        }}
      >
        <menu className="menu">
          <i className="fas fa-xmark close" onClick={() => setClosed(true)}></i>
          <div className="profile">
            <div className="profile-wrapper">
              <div
                className="profile-img"
                onClick={() => {
                  refImg.current.click();
                  setClosed(false);
                }}
                style={{
                  backgroundImage: `url(${
                    cookie.get("Notes-User").profile?.length !== 0
                      ? cookie.get("Notes-User").profile
                      : picture
                  })`,
                }}
              ></div>
              <input
                type="file"
                hidden
                ref={refImg}
                onChange={(e) => {
                  let reader = new FileReader();
                  reader.readAsDataURL(e.target.files[0]);
                  reader.addEventListener("load", async () => {
                    setPicture(reader.result);

                    await axios
                      .post(base + "/user/profile/" + user.ID, reader.result)
                      .then((res) => {
                        console.log(res);
                        console.log(picture);
                      });
                  });
                }}
              />
              <p>{user.name} </p>
            </div>
          </div>
          <div className="menu-links">
            <NavLink to={"/"} className="Link">
              <i className="fas fa-list"></i>All Notes
            </NavLink>
            <NavLink to={"/add"} className="Link">
              <i className="fas fa-plus"></i>Add Note
            </NavLink>
            <NavLink to={"/favorite"} className="Link">
              <i className="fas fa-heart"></i>Favorite
            </NavLink>
            <NavLink to={"/saved"} className="Link">
              <i className="fas fa-bookmark"></i>Seved
            </NavLink>
          </div>
          <button
            onClick={() => {
              window.location.pathname = "/sign";
              new Cookies().remove("Notes-User");
            }}
          >
            {" "}
            <i className="fas fa-sign-out"></i> Sing Out
          </button>
          <small style={{ fontSize: "0.6rem", padding: "0 0.5rem 0.5rem" }}>
            Copyright &copy; 2023-2007 , All right reversed to Abdellah Mouida{" "}
          </small>
        </menu>
        <div
          className="closer"
          style={{
            flex: "1",
          }}
          onClick={() => setClosed(true)}
        ></div>
      </div>
      <menu className="menu small-menu">
        <div className="profile">
          <i
            className="fas fa-bars menu-icon"
            onClick={() => setClosed(false)}
          ></i>
        </div>
        <div className="links">
          <NavLink to={"/"} className="Link">
            <i className="fas fa-list"></i>
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
        </div>
        <button>
          <i className="fas fa-sign-out"></i>
        </button>
      </menu>
    </>
  );
};
export default Menu;
