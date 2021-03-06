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

// import darkModeColors from "../../assets/theme/base/darkModeColors";

export default makeStyles(
  ({ palette, borders, boxShadows, functions, transitions, typography }) => {
    const configuratorWidth = 360;
    const { dark, white, gradients, background, transparent } = palette;
    const { borderWidth } = borders;
    const { lg, buttonBoxShadow } = boxShadows;
    const { pxToRem, linearGradient } = functions;
    const { size } = typography;

    return {
      configurator: {
        height: "100vh",
        margin: 0,
        padding: `0 ${pxToRem(10)}`,
        borderRadius: 0,
        boxShadow: lg,
        overflowY: "auto",
        background: ({ darkMode }) => (darkMode ? background.state : white.main),
        "& *": {
          color: ({ darkMode }) => darkMode && `${white.main} !important`,
          borderColor: ({ darkMode }) => darkMode && `${white.main} !important`,
        },

        "& .MuiTypography-body2, & .MuiTypography-button": {
          opacity: ({ darkMode }) => darkMode && 0.6,
        },
      },

      configurator_close_icon: {
        fontSize: `${size.regular} !important`,
        stroke: dark.main,
        strokeWidth: pxToRem(2),
        marginTop: pxToRem(16),
        cursor: "pointer",
        color: ({ darkMode }) => (darkMode ? white.main : dark.main),
      },

      configurator_sidenav_color: {
        width: pxToRem(24.5),
        height: pxToRem(24),
        padding: 0,
        border: `${borderWidth[1]} solid ${white.main}`,
        transition: transitions.create("border-color", {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter,
        }),

        "&:not(:last-child)": {
          marginRight: pxToRem(8),
        },

        "&:hover, &:focus, &:active": {
          borderColor: dark.main,
        },
      },

      configurator_sidenav_types: {
        display: "flex",
        marginTop: pxToRem(16),
        justifyContent: "space-between",
        padding: "0 3px",

        "& .MuiButton-root": {
          height: pxToRem(42),
          boxShadow: buttonBoxShadow.main,
          background: transparent.main,

          "&:hover, &:focus": {
            opacity: 1,
          },
        },

        "& .MuiButton-contained": {
          background: ({ darkMode }) =>
            darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
          color: ({ darkMode }) => (darkMode ? background.main : white.main),

          "&:hover, &:focus": {
            background: ({ darkMode }) =>
              darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
            color: ({ darkMode }) => (darkMode ? `${dark.main} !important` : white.main),
          },
        },
      },

      configurator_open: {
        width: configuratorWidth,
        left: "initial",
        right: 0,
        transition: transitions.create("right", {
          easing: transitions.easing.sharp,
          duration: transitions.duration.short,
        }),
      },

      configurator_close: {
        left: "initial",
        right: pxToRem(-350),
        transition: transitions.create("all", {
          easing: transitions.easing.sharp,
          duration: transitions.duration.short,
        }),
      },

      primary: {
        backgroundImage: linearGradient(gradients.primary.main, gradients.primary.state),
      },

      dark: {
        backgroundImage: linearGradient(gradients.dark.main, gradients.dark.state),
      },

      info: {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },

      success: {
        backgroundImage: linearGradient(gradients.success.main, gradients.success.state),
      },

      warning: {
        backgroundImage: linearGradient(gradients.warning.main, gradients.warning.state),
      },

      error: {
        backgroundImage: linearGradient(gradients.error.main, gradients.error.state),
      },

      active_color: {
        borderColor: dark.main,
      },
    };
  }
);
