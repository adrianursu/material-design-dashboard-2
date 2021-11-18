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

export default makeStyles(({ palette, functions }) => {
  const { text, gradients } = palette;
  const { linearGradient } = functions;

  return {
    progress: {
      "& .MuiLinearProgress-bar": {
        backgroundColor: ({ color }) => palette[color].main,
        width: ({ value }) => `${value}%`,
        color: text.main,
      },
    },

    progress_gradient: {
      "& .MuiLinearProgress-bar": {
        background: ({ color }) => linearGradient(gradients[color].main, gradients[color].state),
      },
    },
  };
});
