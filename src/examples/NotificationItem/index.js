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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the NotificationItem
import styles from "examples/NotificationItem/styles";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

const NotificationItem = forwardRef(({ color, image, title, date, ...rest }, ref) => {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const classes = styles({ color, darkMode });

  return (
    <MenuItem {...rest} ref={ref} className={classes.notificationItem}>
      <MDBox customClass={classes.notificationItem_img}>{image}</MDBox>
      <MDBox>
        <MDTypography
          variant="button"
          textTransform="capitalize"
          fontWeight="regular"
          textColor={darkMode ? "white" : "dark"}
        >
          <strong>{title[0]}</strong> {title[1]}
        </MDTypography>
        <MDTypography
          variant="caption"
          textColor={darkMode ? "white" : "secondary"}
          customClass={classes.notificationItem_date}
        >
          <MDTypography variant="button" textColor={darkMode ? "white" : "secondary"}>
            <Icon className={classes.notificationItem_icon}>watch_later</Icon>
          </MDTypography>
          {date}
        </MDTypography>
      </MDBox>
    </MenuItem>
  );
});

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
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
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationItem;
