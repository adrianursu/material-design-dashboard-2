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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function DefaultInfoCard({ color, icon, title, description, value }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card>
      <MDBox p={2} mx={3} display="flex" justifyContent="center">
        <MDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          backgroundColor={color}
          color="white"
          width="4rem"
          height="4rem"
          style={{ boxShadow: boxShadows.coloredShadows.primary }}
          borderRadius="lg"
          backgroundGradient
        >
          <Icon fontSize="medium">{icon}</Icon>
        </MDBox>
      </MDBox>
      <MDBox pb={2} px={2} textAlign="center" lineHeight={1}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
          textColor={darkMode ? "white" : "dark"}
        >
          {title}
        </MDTypography>
        {description && (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            fontWeight="regular"
            opacity={darkMode ? 0.8 : 1}
          >
            {description}
          </MDTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <MDTypography variant="h5" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
            {value}
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "primary",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
