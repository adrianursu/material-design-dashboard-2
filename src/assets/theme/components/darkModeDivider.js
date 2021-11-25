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

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Design Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, transparent, white } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: "#ffffff94",
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${rgba(
        dark.main,
        0.5
      )}, ${rgba(dark.main, 0)}) !important`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: "#ffffff94",

      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${rgba(
          white.main,
          0.5
        )}, ${rgba(white.main, 0)}) !important`,
      },
    },
  },
};
