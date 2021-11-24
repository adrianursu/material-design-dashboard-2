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

// Material Design Dashboard 2 React Base Styles
import colors from "assets/theme/base/darkModeColors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard 2 React Helper Function
import rgba from "assets/theme/functions/rgba";

const { black, background } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

export default {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: background.state,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: xxl,
    },
  },
};
