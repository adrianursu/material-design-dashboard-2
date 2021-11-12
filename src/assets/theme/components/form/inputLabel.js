/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// Material UI Dashboard PRO helper functions
import typography from "assets/theme/base/typography";
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      fontSize: `${size.sm} !important`,
      lineHeight: 1,
      top: "-2px",

      "&.MuiInputLabel-shrink": {
        transform: "translate(12.5px, -3.5px) scale(0.85)",
      },
    },

    focused: {
      transform: "translate(12.5px, -3.5px) scale(0.85)",
    },
  },
};
