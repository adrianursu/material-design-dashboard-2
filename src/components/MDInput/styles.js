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

export default makeStyles(({ palette, functions, typography, borders }) => {
  const { inputColors, grey, light, dark, transparent } = palette;
  const { pxToRem } = functions;
  const { size: fontSize, fontWeightBold } = typography;
  const { borderRadius } = borders;

  return {
    mdInput: {
      backgroundColor: ({ disabled }) => (disabled ? grey[200] : transparent.main),
      width: "100% !important",
    },

    mdInput_small: {
      fontSize: fontSize.xs,

      "& input": {
        fontSize: fontSize.xs,
        padding: `${pxToRem(8)} ${pxToRem(12)}`,
      },

      "& .MuiInputLabel-root": {
        fontSize: `${fontSize.xs} !important`,
        top: "-5px",
        left: "-2px",

        "&.MuiInputLabel-shrink": {
          transform: "translate(15px, -1px) scale(0.95)",
        },
      },
    },

    mdInput_large: {
      "& input": {
        padding: `${pxToRem(14)} ${pxToRem(14)}`,
      },

      "& .MuiInputLabel-root": {
        top: "1px",

        "&.MuiInputLabel-shrink": {
          transform: "translate(12.625px, -7px) scale(0.85)",
        },
      },
    },

    mdInput_disabled: {
      backgroundColor: light.main,
      color: grey[700],
      opacity: 1,
    },

    mdInput_error: {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
      borderColor: inputColors.error,
    },

    mdInput_success: {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
      borderColor: inputColors.success,
    },

    mdInput_multiline: {
      padding: `${pxToRem(10)} ${pxToRem(12)}`,
    },

    mdInputIcon_right: {
      lineHeight: 0,
      padding: ({ size }) =>
        size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
      width: pxToRem(39),
      height: "100%",
      color: dark.main,
    },

    mdInputIcon_input: {
      borderColor: transparent.main,
      borderRadius: ({ direction, withIcon }) => {
        let borderRadiusValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          borderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          borderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          borderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
        } else {
          borderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
        }

        return borderRadiusValue;
      },
      paddingLeft: ({ direction, withIcon }) => {
        let paddingLeftValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingLeftValue = pxToRem(12);
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingLeftValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingLeftValue = pxToRem(12);
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingLeftValue = 0;
        }

        return paddingLeftValue;
      },
      paddingRight: ({ direction, withIcon }) => {
        let paddingRightValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingRightValue = 0;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingRightValue = pxToRem(12);
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingRightValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingRightValue = pxToRem(12);
        }

        return paddingRightValue;
      },
    },

    mdInputIcon_icon: {
      fontWeight: fontWeightBold,
      fontSize: ({ size }) => size === "small" && `${fontSize.regular} !important`,
    },
  };
});
