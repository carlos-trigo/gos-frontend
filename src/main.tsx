import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0 } from "./service/auth0";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0>
        <App />
      </Auth0>
    </BrowserRouter>
  </React.StrictMode>
);
