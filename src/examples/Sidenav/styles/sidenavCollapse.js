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
  ({ palette, transitions, breakpoints, typography, boxShadows, borders, functions }) => {
    const { dark, white } = palette;
    const { fontWeightLight, fontWeightMedium, size } = typography;
    const { xxl } = boxShadows;
    const { borderRadius } = borders;
    const { pxToRem, rgba } = functions;

    return {
      collapse_item: {
        color: ({ active, darkSidenav }) => (active || darkSidenav ? white.main : dark.main),

        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: `${pxToRem(12)} ${pxToRem(16)}`,
        margin: `0 ${pxToRem(16)} ${pxToRem(6)}`,
        borderRadius: borderRadius.md,
        cursor: "pointer",
        userSelect: "none",
        whiteSpace: "nowrap",
        boxShadow: "none",
        [breakpoints.up("xl")]: {
          boxShadow: ({ active, transparentSidenav }) => {
            if (active) {
              return transparentSidenav ? xxl : "none";
            }

            return "none";
          },
          transition: transitions.create("box-shadow", {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.shorter,
          }),
        },
        "&:hover": {
          backgroundColor: rgba(white.main, 0.1),
        },
      },

      collapse_iconBox: {
        background: "transparent",
        minWidth: pxToRem(20),
        minHeight: pxToRem(20),
        borderRadius: borderRadius.md,
        display: "grid",
        placeItems: "center",
        transition: transitions.create("margin", {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),

        "& svg, svg g": {
          fill: ({ active, darkSidenav, darkMode, transparentSidenav }) =>
            active || darkSidenav || (darkMode && transparentSidenav) ? white.main : dark.main,
          marginRight: pxToRem(8),
        },
      },

      collapse_icon: {
        color: ({ active, darkSidenav }) => (active || darkSidenav ? white.main : dark.main),
      },

      collapse_text: {
        marginLeft: pxToRem(6),
        color: ({ active, darkSidenav }) => (active || darkSidenav ? white.main : dark.main),

        [breakpoints.up("xl")]: {
          opacity: ({ miniSidenav, transparentSidenav }) =>
            miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
          maxWidth: ({ miniSidenav, transparentSidenav }) =>
            miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
          marginLeft: ({ miniSidenav, transparentSidenav }) =>
            miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(6),
          transition: transitions.create(["opacity", "margin"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },

        "& span": {
          fontWeight: ({ active }) => (active ? fontWeightMedium : fontWeightLight),
          fontSize: size.sm,
          lineHeight: 0,
        },
      },
    };
  }
);
