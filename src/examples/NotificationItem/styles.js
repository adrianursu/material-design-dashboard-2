/**
=========================================================
* Material Design Dashboard 2 React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, borders, transitions, functions }) => {
  const { light, secondary, gradients, grey } = palette;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  return {
    notificationItem: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: secondary.main,
      padding: `${pxToRem(6)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      transition: transitions.create("background-color", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),

      "&:not(:last-child)": {
        marginBottom: pxToRem(10),
      },

      "&:hover": {
        backgroundColor: ({ darkMode }) => (darkMode ? grey[700] : light.main),
      },
    },

    notificationItem_img: {
      backgroundImage: ({ color }) => linearGradient(gradients[color].main, gradients[color].state),
      display: "grid",
      placeItems: "center",
      width: pxToRem(36),
      height: pxToRem(36),
      margin: `${pxToRem(2)} ${pxToRem(16)} ${pxToRem(2)} 0`,
      borderRadius: "50%",

      "& img": {
        width: "100%",
        borderRadius: "50%",
      },
    },

    notificationItem_date: {
      display: "flex",
      alignItems: "center",
      marginTop: pxToRem(4),
    },

    notificationItem_icon: {
      lineHeight: 1.2,
      marginRight: pxToRem(4),
    },
  };
});
