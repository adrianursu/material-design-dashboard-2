/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

const { white, gradients, grey } = colors;
const { regular } = boxShadows;

export default {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: pxToRem(30),
      height: pxToRem(15),
      margin: `${pxToRem(4)} 0`,
      padding: 0,
      borderRadius: pxToRem(160),
      overflow: "visible",
      cursor: "pointer",
      transition: "transform 250ms ease-in",
    },

    switchBase: {
      padding: 0,
      top: "50%",
      transform: `translate(0, -50%)`,
      transition: `transform 250ms ease-in-out`,

      "&.Mui-checked": {
        transform: `translate(${pxToRem(22)}, -50%)`,

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      width: pxToRem(20),
      height: pxToRem(20),
      backgroundColor: white.main,
      border: `1px solid ${grey[400]}`,
      boxShadow: regular,
      transform: "translate(-5px, -0.5px)",
    },

    track: {
      backgroundColor: grey[400],
      border: "none",
      borderRadius: pxToRem(160),
      opacity: 1,
      transition: `background-color 250ms ease, border-color 200ms ease`,
    },

    checked: {},
  },
};
