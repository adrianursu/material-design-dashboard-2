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

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 boxShadows
import boxShadows from "assets/theme/base/boxShadows";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function TableHeader({ text, backgroundColor, boxShadow }) {
  return (
    <MDBox
      backgroundColor={backgroundColor}
      width="100%"
      height="4.5rem"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      boxShadow="md"
      backgroundGradient
      mt={-5.5}
      px={2}
      style={{ boxShadow: `${boxShadow}` }}
    >
      <MDTypography variant="body2" fontWeight="bold" textColor="white" textTransform="capitalize">
        {text}
      </MDTypography>
    </MDBox>
  );
}

TableHeader.defaultProps = {
  backgroundColor: "primary",
  boxShadow: boxShadows.coloredShadows.primary,
  text: "",
};

TableHeader.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  text: PropTypes.string,
  boxShadow: PropTypes.node,
};

export default TableHeader;
