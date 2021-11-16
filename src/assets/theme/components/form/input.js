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

// Material UI Dashboard helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// Material UI Dashboard colors
import colors from "assets/theme/base/colors";

const { primary } = colors;

export default {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      borderRadius: "6px",
      fontSize: "14px",
      width: "100%",
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(0,0,0, 0.23) !important",
        },
      },
      "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: `${primary.main} !important`,
      },
    },

    input: {
      padding: `${pxToRem(10)} ${pxToRem(12)}`,
      fontSize: "14px",
      width: "100%",
    },
  },
};
