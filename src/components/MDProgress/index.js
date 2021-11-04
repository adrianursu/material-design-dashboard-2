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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import LinearProgress from "@mui/material/LinearProgress";

// Material Design 2 Dashboard PRO React components
import MDTypography from "components/MDTypography";

// Custom styles for MDProgress
import styles from "components/MDProgress/styles";

const MDProgress = forwardRef(({ color, value, gradient, noLabel, ...rest }, ref) => {
  const classes = styles({ color, value });

  return (
    <>
      {!noLabel && (
        <MDTypography variant="caption" fontWeight="regular" textColor="text">
          {value}%
        </MDTypography>
      )}
      <LinearProgress
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        className={clsx(classes.progress, {
          [classes.progress_gradient]: gradient,
        })}
      />
    </>
  );
});

// Setting default values for the props of MDProgress
MDProgress.defaultProps = {
  color: "info",
  value: 0,
  gradient: false,
  noLabel: false,
};

// Typechecking props for the MDProgress
MDProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  gradient: PropTypes.bool,
  noLabel: PropTypes.bool,
};

export default MDProgress;
