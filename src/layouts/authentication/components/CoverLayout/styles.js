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

export default makeStyles(({ functions, palette }) => {
  const { linearGradient, rgba } = functions;
  const { gradients } = palette;

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
      backgroundImage: ({ image }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  };
});
