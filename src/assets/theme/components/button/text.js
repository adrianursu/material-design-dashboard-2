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

// Material Design 2 Dashboard PRO React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Design 2 Dashboard PRO React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, primary, secondary, grey } = colors;
const { size } = typography;

export default {
  base: {
    backgroundColor: transparent.main,
    height: "max-content",
    color: primary.main,
    boxShadow: "none",
    padding: `${pxToRem(6)} ${pxToRem(12)}`,

    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
      color: primary.focus,
    },

    "&:focus": {
      boxShadow: "none",
      color: primary.focus,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      color: grey[600],
      boxShadow: "none",
    },

    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    fontSize: size.xs,

    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    fontSize: size.sm,

    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    color: primary.main,
    backgroundColor: transparent.main,

    "&:hover": {
      color: primary.focus,
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      color: primary.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none",
    },
  },

  secondary: {
    color: secondary.focus,
    backgroundColor: transparent.main,

    "&:hover": {
      color: secondary.focus,
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      color: secondary.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none",
    },
  },
};
