/**
=========================================================
* Material Design Dashboard 2 React
=========================================================

* Product Page: https://www.creative-tim.com/product/material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the materialware.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Material Design Dashboard 2 React main context
const MaterialDesign = createContext();

// Material Design Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "DARK_SIDENAV": {
      return { ...state, darkSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARK_MODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Design Dashboard 2 React context provider
function MaterialDesignControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    darkSidenav: true,
    sidenavColor: "primary",
    transparentNavbar: false,
    fixedNavbar: false,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  return (
    <MaterialDesign.Provider value={[controller, dispatch]}>{children}</MaterialDesign.Provider>
  );
}

// Material Design Dashboard 2 React custom hook for using context
function useMaterialDesignController() {
  return useContext(MaterialDesign);
}

// Typechecking props for the MaterialDesignControllerProvider
MaterialDesignControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MaterialDesignControllerProvider, useMaterialDesignController };
