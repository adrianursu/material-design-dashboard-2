/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Design 2 Dashboard PRO React Context Provider
import { MaterialDesignControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <MaterialDesignControllerProvider>
      <App />
    </MaterialDesignControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
