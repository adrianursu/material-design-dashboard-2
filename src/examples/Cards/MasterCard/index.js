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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the MasterCard
import styles from "examples/Cards/MasterCard/styles";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import patternTree from "assets/images/illustrations/pattern-tree.svg";

function MasterCard({ color, number, holder, expires }) {
  const classes = styles({ color });
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card className={classes.masterCard}>
      <MDBox
        component="img"
        src={patternTree}
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        opacity={0.2}
        zIndex={1}
      />
      <MDBox p={2} position="relative" zIndex={2}>
        <MDBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon className={classes.masterCard_icon} fontSize="medium">
            wifi
          </Icon>
        </MDBox>
        <MDTypography
          variant="h5"
          textColor="white"
          fontWeight="medium"
          customClass={classes.masterCard_number}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </MDTypography>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDBox display="flex" alignItems="center">
            <MDBox mr={3}>
              <MDTypography variant="button" textColor="white" fontWeight="regular" opacity={0.8}>
                Card Holder
              </MDTypography>
              <MDTypography
                variant="h6"
                textColor="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {holder}
              </MDTypography>
            </MDBox>
            <MDBox>
              <MDTypography variant="button" textColor="white" fontWeight="regular" opacity={0.8}>
                Expires
              </MDTypography>
              <MDTypography variant="h6" textColor="white" fontWeight="medium">
                {expires}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" justifyContent="flex-end" width="20%">
            <MDBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={2} />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};

export default MasterCard;
