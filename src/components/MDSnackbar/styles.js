/**
=========================================================
* Material Dashboard Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, functions, typography }) => {
  const { white, text, dark, transparent, gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size } = typography;

  return {
    mdSnackbar_icon: {
      backgroundImage: ({ type }) =>
        type === "info" ? white.main : linearGradient(gradients[type].main, gradients[type].state),
      WebkitTextFillColor: ({ type }) => (type === "info" ? white.main : transparent.main),
      WebkitBackgroundClip: "text",
      marginRight: pxToRem(8),
      fontSize: size.lg,
      transform: `translateY(${pxToRem(-2)})`,
    },

    mdSnackbar_divider: {
      margin: 0,
    },

    mdSnackbar_content: {
      color: ({ type }) => (type === "info" ? white.main : text.main),
      fontSize: size.sm,
    },

    mdSnackbar_close: {
      color: ({ type }) => (type === "info" ? white.main : dark.main),
      cursor: "pointer",
      marginLeft: pxToRem(16),
      transform: `translateY(${pxToRem(-1)})`,
    },
  };
});
