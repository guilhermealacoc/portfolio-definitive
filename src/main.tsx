import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.tsx";
import Unicesumar from "./pages/unicesumar.tsx";

import "./index.css";

const unicesumarPath = "/Unicesumar=1644190886-0193";
const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const ActivePage = normalizedPath === unicesumarPath ? Unicesumar : Home;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActivePage />
  </React.StrictMode>
);
