/**
=========================================================
* Material Design Dashboard 2 React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// Material Design Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/darkModeColors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { background } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      background: background.state,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.lg,
    },
  },
};
