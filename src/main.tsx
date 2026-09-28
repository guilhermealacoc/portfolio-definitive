import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.tsx";

import "./index.css";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

if (normalizedPath !== "/" && normalizedPath !== "/en") {
  window.history.replaceState(null, "", "/");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
