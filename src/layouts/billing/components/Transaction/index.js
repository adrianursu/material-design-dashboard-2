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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Transaction({ color, icon, name, description, value }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDBox key={name} component="li" py={1} pr={2} mb={1}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center">
          <MDBox mr={2}>
            <MDButton variant="outlined" buttonColor={color} size="small" iconOnly circular>
              <Icon className="font-bold">{icon}</Icon>
            </MDButton>
          </MDBox>
          <MDBox display="flex" flexDirection="column">
            <MDTypography
              variant="button"
              fontWeight="medium"
              gutterBottom
              textColor={darkMode ? "white" : "dark"}
            >
              {name}
            </MDTypography>
            <MDTypography variant="caption" textColor={darkMode ? "white" : "text"}>
              {description}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDTypography variant="button" textColor={color} fontWeight="medium">
          {value}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
