import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import AllNotes from "./Pages/AllNotes.jsx";
import Sign from "./Pages/Sign.tsx";
import Log from "./Pages/Login.tsx";
import Add from "./Pages/Add.jsx";
import RequireAuth from "./Pages/RequireAuth.jsx";
import { base } from "./base/url.jsx";
import axios from "axios";
import Trash from "./Pages/Trash.jsx";
import MyNotes from "./Pages/MyNotes.jsx";
import Favorite from "./Pages/Favorite.jsx";
import Saved from "./Pages/Saved.jsx";

let App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Sign></Sign>} path="/sign"></Route>
        <Route element={<Log></Log>} path="/log"></Route>
        <Route element={<RequireAuth></RequireAuth>}>
          {" "}
          <Route path="/" element={<Home></Home>}>
            <Route path="/" element={<AllNotes></AllNotes>}></Route>
            <Route path="/saved" element={<Saved></Saved>}></Route>
            <Route path="/favorite" element={<Favorite></Favorite>}></Route>
            <Route path="/add" element={<Add></Add>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
