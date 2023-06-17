import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./components/App";
import ArticlePage from "./components/ArticlePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
