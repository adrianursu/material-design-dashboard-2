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

// Material Design 2 Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { dark } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: dark.main,
      },

      "&.Mui-completed": {
        color: dark.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
    },
  },
};
