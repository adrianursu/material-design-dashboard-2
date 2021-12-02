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
import boxShadows from "assets/theme/base/boxShadows";
import darkTypography from "assets/theme/base/darkModeTypography";
import darkColors from "assets/theme/base/darkModeColors";
import borders from "assets/theme/base/borders";

// Material Design Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { lg } = boxShadows;
const { size } = darkTypography;
const { text } = darkColors;
const { borderRadius } = borders;

export default {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: text,
      borderRadius: borderRadius.md,
      opacity: 1,
    },
  },
};