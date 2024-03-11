import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { base } from "../base/url";
import Cookies from "universal-cookie";

let Add = () => {
  let [value, setValue] = useState("");

  let ref = useRef(null);
  useEffect(() => {
    ref?.current?.focus();
  }, []);

  let nav = useNavigate();

  return (
    <div className="add">
      <textarea
        placeholder="Enter Your Note ...."
        value={value}
        ref={ref}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <div
        className="form-controle"
        style={{ flexDirection: "row", padding: "1rem", justifyContent: "end" }}
      >
        <button
          style={{ width: "fit-content", padding: "0.8rem 2rem" }}
          onClick={async () => {
            let cookie = new Cookies();
            let id = cookie.get("Notes-User").ID;
            let note = {
              content: value,
              date: new Date().toDateString(),
              user: cookie.get("Notes-User").name,
              idInFavorite: -1,
              idInSaved: -1,
            };
            await axios
              .post(base + "/notes/" + id, note)
              .then((res) => console.log(res));
            nav("/");
          }}
        >
          <i className="fas fa-plus"></i> Add
        </button>
      </div>
    </div>
  );
};
export default Add;
