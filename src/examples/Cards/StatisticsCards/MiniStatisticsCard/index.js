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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function MiniStatisticsCard({ backgroundColor, title, count, percentage, icon }) {
  return (
    <Card className="overflow-visible">
      <MDBox backgroundColor={backgroundColor} backgroundGradient borderRadius="xl">
        <MDBox p={2}>
          <Grid container alignItems="center">
            <Grid item>
              <MDBox
                backgroundColor={backgroundColor === "white" ? icon.color : "white"}
                width="4rem"
                height="4rem"
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={backgroundColor === "white" ? "white" : "dark"}
                boxShadow="md"
                backgroundGradient
                mt={-7.5}
              >
                <Icon fontSize="medium" color="inherit">
                  {icon.component}
                </Icon>
              </MDBox>
            </Grid>

            <Grid item xs={8}>
              <MDBox style={{ float: "right", lineHeight: "0.5" }}>
                <MDTypography
                  variant="button"
                  textColor={backgroundColor === "white" ? "text" : "white"}
                  opacity={backgroundColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight="regular"
                >
                  {title.text}
                </MDTypography>
                <MDTypography
                  variant="h5"
                  fontWeight="bold"
                  textColor={backgroundColor === "white" ? "dark" : "white"}
                >
                  {count}{" "}
                  <MDTypography variant="button" textColor={percentage.color} fontWeight="bold">
                    {percentage.text}
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  backgroundColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
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
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
};

export default MiniStatisticsCard;
