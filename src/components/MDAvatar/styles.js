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

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, functions, typography, boxShadows }) => {
  const { gradients, transparent } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size, fontWeightBold } = typography;

  return {
    mdAvatar: {
      backgroundImage: ({ backgroundColor }) =>
        backgroundColor === "transparent"
          ? transparent.main
          : linearGradient(gradients[backgroundColor].main, gradients[backgroundColor].state),
      fontWeight: fontWeightBold,
    },

    mdAvatar_xs: {
      width: pxToRem(24),
      height: pxToRem(24),
      fontSize: size.xs,
    },

    mdAvatar_sm: {
      width: pxToRem(36),
      height: pxToRem(36),
      fontSize: size.sm,
    },

    mdAvatar_md: {
      width: pxToRem(48),
      height: pxToRem(48),
      fontSize: size.regular,
    },

    mdAvatar_lg: {
      width: pxToRem(58),
      height: pxToRem(58),
      fontSize: size.sm,
    },

    mdAvatar_xl: {
      width: pxToRem(74),
      height: pxToRem(74),
      fontSize: size.regular,
    },

    mdAvatar_xxl: {
      width: pxToRem(110),
      height: pxToRem(110),
      fontSize: size.regular,
    },

    mdAvatar_boxShadow: {
      boxShadow: ({ boxShadow }) => boxShadows[boxShadow],
    },
  };
});
