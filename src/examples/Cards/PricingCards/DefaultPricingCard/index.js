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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <MDBox key={label} display="flex" alignItems="center" p={1}>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        boxShadow="regular"
        backgroundColor={includes ? "success" : "secondary"}
        backgroundGradient
        mr={2}
      >
        <MDTypography variant="button" textColor="white" customClass="line-height-0">
          <Icon className="font-bold">{includes ? "done" : "remove"}</Icon>
        </MDTypography>
      </MDBox>
      <MDTypography variant="body2" textColor="text">
        {label}
      </MDTypography>
    </MDBox>
  ));

  return (
    <Card>
      <MDBox pt={3} pb={2} px={2} textAlign="center">
        <MDBadge
          variant="contained"
          color={badge.color}
          badgeContent={badge.label}
          circular
          container
        />
        <MDBox my={1}>
          <MDTypography variant="h1">
            <MDTypography display="inline" component="small" variant="h2">
              {price.currency}
            </MDTypography>
            {price.value}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <MDBox mt={3}>
            <MDButton
              component={Link}
              to={action.route}
              variant="gradient"
              buttonColor={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon className="font-bold">arrow_forward</Icon>
            </MDButton>
          </MDBox>
        ) : (
          <MDBox mt={3}>
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              buttonColor={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon className="font-bold">arrow_forward</Icon>
            </MDButton>
          </MDBox>
        )}
      </MDBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
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
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default DefaultPricingCard;
