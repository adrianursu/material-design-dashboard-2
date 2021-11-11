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
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";

// Custom styles for MDInput
import styles from "components/MDInput/styles";

// Material Design 2 Dashboard PRO React contexts
import { useMaterialDesignController } from "context";

const MDInput = forwardRef(
  ({ size, withIcon, error, success, customClass, disabled, ...rest }, ref) => {
    let template;
    const [controller] = useMaterialDesignController();
    const { direction } = controller;
    const classes = styles({ size, error, success, withIcon, direction, disabled });

    if (withIcon.icon && withIcon.direction === "left") {
      template = (
        <MDBox ref={ref} customClass={clsx(classes.mdInputIcon, customClass)}>
          <MDBox customClass={classes.mdInputIcon_right}>
            <Icon className={classes.mdInputIcon_icon} fontSize="small">
              {withIcon.icon}
            </Icon>
          </MDBox>
          <TextField
            {...rest}
            className={clsx(classes.mdInput, classes.mdInputIcon_input, {
              [classes.mdInput_error]: error,
              [classes.mdInput_success]: success,
              [classes[`mdInput_${size}`]]: size,
            })}
            classes={{
              focused: classes.mdInput_focused,
              disabled: classes.mdInput_disabled,
              error: classes.mdInput_error,
              multiline: classes.mdInput_multiline,
            }}
          />
        </MDBox>
      );
    } else if (withIcon.icon && withIcon.direction === "right") {
      template = (
        <MDBox customClass={clsx(classes.mdInputIcon, customClass)}>
          <TextField
            {...rest}
            className={clsx(classes.mdInput, classes.mdInputIcon_input, {
              [classes.mdInput_error]: error,
              [classes.mdInput_success]: success,
              [classes[`mdInput_${size}`]]: size,
            })}
            classes={{
              focused: classes.mdInput_focused,
              disabled: classes.mdInput_disabled,
              error: classes.mdInput_error,
              multiline: classes.mdInput_multiline,
            }}
          />
          <MDBox customClass={classes.MDInputIcon_right}>
            <Icon className={classes.MDInputIcon_icon} fontSize="small">
              {withIcon.icon}
            </Icon>
          </MDBox>
        </MDBox>
      );
    } else {
      template = (
        <TextField
          {...rest}
          className={clsx(classes.mdInput, customClass, {
            [classes.mdInput_error]: error,
            [classes.mdInput_success]: success,
            [classes[`mdInput_${size}`]]: size,
          })}
          classes={{
            focused: classes.mdInput_focused,
            disabled: classes.mdInput_disabled,
            error: classes.mdInput_error,
            multiline: classes.mdInput_multiline,
          }}
        />
      );
    }

    return template;
  }
);

// Setting default values for the props of MDInput
MDInput.defaultProps = {
  size: "medium",
  withIcon: {
    icon: false,
    direction: "none",
  },
  error: false,
  success: false,
  customClass: "",
  disabled: false,
};

// Typechecking props for the MDInput
MDInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  withIcon: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MDInput;
