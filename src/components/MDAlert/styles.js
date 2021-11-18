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

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, typography, borders, functions, transitions }) => {
  const { white, alertColors } = palette;
  const { size, fontSizeRegular, fontWeightMedium } = typography;
  const { borderWidth, borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  return {
    alert: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: pxToRem(60),
      backgroundImage: ({ color }) =>
        linearGradient(alertColors[color].main, alertColors[color].state, 195),
      color: white.main,
      position: "relative",
      padding: pxToRem(16),
      marginBottom: pxToRem(16),
      border: ({ color }) => `${borderWidth[1]} solid ${alertColors[color].border}`,
      borderRadius: borderRadius.md,
      fontSize: fontSizeRegular,
      fontWeight: fontWeightMedium,
    },

    alert_closeIcon: {
      color: white.main,
      fontSize: size.xl,
      padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
      marginLeft: pxToRem(40),
      fontWeight: fontWeightMedium,
      opacity: 0.5,
      cursor: "pointer",
      lineHeight: 0,
      transition: transitions.create("opacity", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),

      "&:hover": {
        opacity: 1,
      },
    },
  };
});
