//the bridge between app.js and the browser

//react
import React, { StrictMode } from "react";
//library to talk with web browser
import { createRoot } from "react-dom/client";
//stylesheet 
import "./styles.css";

//brings access to app.js
import App from "./App";

//injects everything into public/index.html
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);