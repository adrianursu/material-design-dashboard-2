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

export default makeStyles(
  ({ palette, typography, boxShadows, transitions, breakpoints, functions }) => {
    const sidebarWidth = 250;
    const { white, dark, gradients, transparent } = palette;
    const { fontWeightMedium } = typography;
    const { xxl } = boxShadows;
    const { pxToRem, linearGradient } = functions;

    return {
      sidenav: {
        boxShadow: xxl,
        border: "none",
        [breakpoints.up("xl")]: {
          background: ({ transparentSidenav, darkSidenav }) => {
            let finalValue;

            if (transparentSidenav) {
              finalValue = transparent.main;
            } else if (darkSidenav) {
              finalValue = linearGradient(gradients.dark.main, gradients.dark.state);
            } else {
              finalValue = white.main;
            }

            return finalValue;
          },

          boxShadow: ({ transparentSidenav }) => (transparentSidenav ? "none" : xxl),
          marginBottom: ({ transparentSidenav }) => (transparentSidenav ? 0 : "inherit"),
          left: "0",
        },
      },

      sidenav_header: {
        padding: `${pxToRem(24)} ${pxToRem(32)}`,
        textAlign: "center",

        "& a": {
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        },
      },

      sidenav_logo: {
        width: pxToRem(32),
      },

      sidenav_footer: {
        margin: `auto ${pxToRem(16)} ${pxToRem(16)}`,
        paddingTop: pxToRem(16),
      },

      sidenav_logoLabel: {
        marginLeft: pxToRem(4),
        fontWeight: fontWeightMedium,
        wordSpacing: pxToRem(-1),
        transition: transitions.create("opacity", {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
        color: ({ darkSidenav }) => {
          let titleColor;
          if (darkSidenav) {
            titleColor = white.main;
          } else {
            titleColor = dark.main;
          }
          return titleColor;
        },

        [breakpoints.up("xl")]: {
          opacity: ({ miniSidenav }) => (miniSidenav ? 0 : 1),
        },
      },

      sidenav_title: {
        display: "block",
        opacity: 0.8,
        paddingLeft: pxToRem(24),
        margin: `${pxToRem(16)} 0 ${pxToRem(8)} ${pxToRem(8)}`,
      },

      marginTopNone: {
        marginTop: 0,
      },

      sidenav_open: {
        transform: "translateX(0)",
        transition: transitions.create("transform", {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter,
        }),

        [breakpoints.up("xl")]: {
          width: sidebarWidth,
          transform: "translateX(0)",
          transition: transitions.create(["width", "background-color"], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.enteringScreen,
          }),
        },
      },

      sidenav_close: {
        transform: `translateX(${pxToRem(-320)})`,
        transition: transitions.create("transform", {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter,
        }),

        [breakpoints.up("xl")]: {
          width: pxToRem(96),
          overflowX: "hidden",
          transform: "translateX(0)",
          transition: transitions.create(["width", "background-color"], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
          }),
        },
      },

      sidenav_navlink: {
        textDecoration: "none",
      },
    };
  }
);
