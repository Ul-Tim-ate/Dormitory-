import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import "./reset.sass";
import App from "./components/App/app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
