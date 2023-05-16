import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/css-reset.scss";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

reportWebVitals();
