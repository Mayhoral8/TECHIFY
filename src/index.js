import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./Techify/context";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-gray-50">
    <React.StrictMode>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
