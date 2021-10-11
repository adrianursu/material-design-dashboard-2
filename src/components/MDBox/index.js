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
import Box from "@mui/material/Box";

// Custom styles for MDBox
import styles from "components/MDBox/styles";

const MDBox = forwardRef(
  (
    {
      backgroundColor,
      backgroundGradient,
      color,
      opacity,
      borderRadius,
      boxShadow,
      customClass,
      ...rest
    },
    ref
  ) => {
    const classes = styles({ backgroundColor, color, opacity, borderRadius, boxShadow });

    return (
      <Box
        ref={ref}
        className={clsx(classes.mdBox, customClass, {
          [classes.mdBox_backgroundGradient]: backgroundGradient,
        })}
        {...rest}
      />
    );
  }
);

// Setting default values for the props of MDBox
MDBox.defaultProps = {
  backgroundColor: "transparent",
  backgroundGradient: false,
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  boxShadow: "none",
  customClass: "",
};

// Typechecking props for the MDBox
MDBox.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  backgroundGradient: PropTypes.bool,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  customClass: PropTypes.string,
};

export default MDBox;
