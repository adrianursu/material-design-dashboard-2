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

import { forwardRef } from "react";

// clsx is a utility for constructing className string conditionally
import clsx from "clsx";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Avatar from "@mui/material/Avatar";

// Custom styles for MuiAvatar
import styles from "components/MDAvatar/styles";

const MDAvatar = forwardRef(({ backgroundColor, size, boxShadow, customClass, ...rest }, ref) => {
  const classes = styles({ boxShadow, backgroundColor });

  return (
    <Avatar
      ref={ref}
      {...rest}
      className={clsx(classes.mdAvatar, customClass, {
        [classes[`mdAvatar_${size}`]]: size,
        [classes.mdAvatar_boxShadow]: boxShadow !== "none",
      })}
    />
  );
});

// Setting default values for the props of MDAvatar
MDAvatar.defaultProps = {
  backgroundColor: "transparent",
  size: "md",
  boxShadow: "none",
  customClass: "",
};

// Typechecking props for the MDAvatar
MDAvatar.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  boxShadow: PropTypes.oneOf(["none", "xs", "sm", "regular", "lg", "xl", "xxl", "inset"]),
  customClass: PropTypes.string,
};

export default MDAvatar;
