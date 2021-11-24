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

export default makeStyles(({ palette, typography, functions }) => {
  const { gradients, transparent, white } = palette;
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
  const { linearGradient } = functions;

  return {
    mdTypography: {
      color: ({ textColor, darkMode }) => {
        let colorValue;
        if (darkMode) {
          colorValue = white.main;
        } else if (textColor === "inherit") {
          colorValue = "inherit";
        } else {
          colorValue = palette[textColor].main;
        }
        return colorValue;
      },
      opacity: ({ opacity }) => opacity,
      textDecoration: "none",
    },

    mdTypography_light: {
      fontWeight: fontWeightLight,
    },

    mdTypography_regular: {
      fontWeight: fontWeightRegular,
    },

    mdTypography_medium: {
      fontWeight: fontWeightMedium,
    },

    mdTypography_bold: {
      fontWeight: fontWeightBold,
    },

    mdTypography_textTransform: {
      textTransform: ({ textTransform }) => textTransform,
    },

    mdTypography_verticalAlign: {
      verticalAlign: ({ verticalAlign }) => verticalAlign,
    },

    mdTypography_textGradient: {
      backgroundImage: ({ textColor }) =>
        textColor !== "inherit" &&
        textColor !== "text" &&
        textColor !== "white" &&
        linearGradient(gradients[textColor].main, gradients[textColor].state),
      display: "inline-block",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: transparent.main,
      position: "relative",
      zIndex: 1,
    },
  };
});
