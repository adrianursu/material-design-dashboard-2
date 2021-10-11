/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

function ReportsBarChartItem({ color, icon, label, progress }) {
  const { size } = typography;

  return (
    <MDBox width="100%">
      <MDBox display="flex" alignItems="center" mb={2}>
        <MDBox
          backgroundColor={icon.color}
          width="1.25rem"
          height="1.25rem"
          borderRadius="sm"
          color="white"
          fontSize={size.xs}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="md"
          mr={1}
          backgroundGradient
        >
          <Icon>{icon.component}</Icon>
        </MDBox>
        <MDTypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          textColor="text"
        >
          {label}
        </MDTypography>
      </MDBox>
      <MDBox mt={1}>
        <MDTypography variant="h4" fontWeight="bold" textColor={color}>
          {progress.content}
        </MDTypography>
        <MDBox width="75%" mt={0.5}>
          <MDProgress value={progress.percentage} color={color} noLabel />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of ReportsBarChartItem
ReportsBarChartItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ReportsBarChartItem
ReportsBarChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.shape({
    content: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportsBarChartItem;
