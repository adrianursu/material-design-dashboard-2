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

// Images
import patternTree from "assets/images/illustrations/pattern-tree.svg";
import pxToRem from "assets/theme/functions/pxToRem";

export default makeStyles(({ functions, palette, boxShadows }) => {
  const { linearGradient } = functions;
  const { gradients } = palette;
  const { sm } = boxShadows;

  return {
    masterCard: {
      background: ({ color }) =>
        `${linearGradient(
          gradients[color].main,
          gradients[color].state,
          195
        )}, url(${patternTree})`,
      boxShadow: sm,
    },

    masterCard_number: {
      marginTop: pxToRem(24),
      marginBottom: pxToRem(40),
      paddingBottom: pxToRem(8),
    },
  };
});
