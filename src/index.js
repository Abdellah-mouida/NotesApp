import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//Font Awsome
import "./Style/all.css";
import "./Style/all.min.css";
//Style
import "./Style/home.css";
import "./Style/menu.css";
import "./Style/note.css";
import "./Style/sign.css";
import "./Style/add.css";
import "./Style/media.css";
import "./Style/small-menu.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
