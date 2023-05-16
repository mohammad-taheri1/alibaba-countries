import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/css-reset.scss";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/DarkModeContext";
import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v3.1";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <AuthContextProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </AuthContextProvider>
);

reportWebVitals();
