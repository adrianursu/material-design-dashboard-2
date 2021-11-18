/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ functions }) => {
  const { pxToRem } = functions;

  return {
    coverLayout: {
      minHeight: "100vh",
      margin: 0,
    },

    coverLayout_imageBox: {
      height: "100%",
      overflow: "hidden",
    },

    coverLayout_image: {
      backgroundImage: ({ image }) => `url(${image})`,
      backgroundSize: "cover",
      marginLeft: pxToRem(0),
      height: "100%",
    },
  };
});
