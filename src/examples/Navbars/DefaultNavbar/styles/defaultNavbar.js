/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, boxShadows, functions, borders }) => {
  const { dark, white, transparent: transparentColor } = palette;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;
  const { regular } = boxShadows;

  return {
    defaultNavbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: ({ transparent }) =>
        transparent ? transparentColor.main : rgba(white.main, 0.8),
      color: ({ light }) => (light ? white.main : dark.main),
      backdropFilter: ({ transparent }) =>
        transparent ? "none" : `saturate(200%) blur(${pxToRem(30)})`,
      borderRadius: ({ signIn }) => {
        let radius;
        if (signIn) {
          radius = borderRadius.xl;
        } else {
          radius = borderRadius.lg;
        }
        return radius;
      },
      boxShadow: regular,
      margin: ({ signIn }) => {
        let marginNavbar;
        if (signIn) {
          marginNavbar = `${pxToRem(16)} ${pxToRem(24)}`;
        } else {
          marginNavbar = `${pxToRem(24)} ${pxToRem(24)} ${pxToRem(0)}`;
        }
        return marginNavbar;
      },
      width: `calc(100% - ${pxToRem(48)})`,
      position: "absolute",
      left: 0,
      zIndex: 3,
    },
  };
});
