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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DefaultNavbarLink({ icon, name, route, light }) {
  return (
    <>
      <MDBox
        component={Link}
        to={route}
        mx={1}
        p={1}
        display="flex"
        alignItems="center"
        className="cursor-pointer user-select-none"
      >
        <Icon className={`vertical-middle ${light ? "text-white" : "text-secondary"}`}>{icon}</Icon>
        <MDTypography
          variant="button"
          fontWeight="regular"
          textColor={light ? "white" : "dark"}
          textTransform="capitalize"
          customClass="w-100 line-height-0"
        >
          &nbsp;{name}
        </MDTypography>
      </MDBox>
    </>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default DefaultNavbarLink;
