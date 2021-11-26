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

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Invoice({ date, id, price, noGutter }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <MDBox lineHeight={1}>
        <MDTypography
          display="block"
          variant="button"
          fontWeight="bold"
          textColor={darkMode ? "white" : "dark"}
        >
          {date}
        </MDTypography>
        <MDTypography
          variant="caption"
          fontWeight="regular"
          textColor={darkMode ? "white" : "text"}
        >
          {id}
        </MDTypography>
      </MDBox>
      <MDBox display="flex" alignItems="center">
        <MDTypography variant="button" fontWeight="regular" textColor={darkMode ? "white" : "text"}>
          {price}
        </MDTypography>
        <MDBox
          display="flex"
          alignItems="center"
          lineHeight={0}
          ml={3}
          customClass="cursor-pointer"
          color={darkMode ? "white" : "dark"}
        >
          <Icon fontSize="small" color="red">
            picture_as_pdf
          </Icon>
          <MDTypography variant="button" fontWeight="bold" textColor={darkMode ? "white" : "dark"}>
            &nbsp;PDF
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
