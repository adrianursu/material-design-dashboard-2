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

export default makeStyles(({ palette, borders }) => {
  const { grey, transparent } = palette;
  const { borderWidth } = borders;

  return {
    placeholderCard: {
      height: "100%",
      border: ({ hasBorder }) => (hasBorder ? `${borderWidth[1]} solid ${grey[300]}` : "none"),
    },

    placeholderCard_outlined: {
      backgroundColor: transparent.main,
      border: `${borderWidth[1]} solid ${grey[300]} !important`,
      boxShadow: "none",
    },
  };
});
