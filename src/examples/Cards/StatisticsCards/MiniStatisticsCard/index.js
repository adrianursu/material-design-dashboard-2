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

// Import boxShadow properties
import boxShadows from "assets/theme/base/boxShadows";
import { Divider } from "@mui/material";

function MiniStatisticsCard({
  backgroundColor,
  title,
  count,
  percentage,
  icon,
  boxShadow,
  description,
}) {
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
                borderRadius="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={backgroundColor === "white" ? "white" : "dark"}
                backgroundGradient
                mt={-7.5}
                style={{ boxShadow: `${boxShadow}` }}
              >
                <Icon fontSize="medium" color="inherit">
                  {icon.component}
                </Icon>
              </MDBox>
            </Grid>

            <Grid item xs={8}>
              <MDBox
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                style={{
                  lineHeight: "0.5",
                }}
              >
                <MDTypography
                  variant="button"
                  textColor={backgroundColor === "white" ? "text" : "white"}
                  opacity={backgroundColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight="light"
                >
                  {title.text}
                </MDTypography>
                <MDTypography
                  variant="h4"
                  fontWeight="bold"
                  textColor={backgroundColor === "white" ? "dark" : "white"}
                >
                  {count}{" "}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          <Divider style={{ margin: "0.7rem 0" }} />
          <MDTypography variant="body2" fontWeight="light" textColor="text">
            <MDTypography variant="button" textColor={percentage.color} fontWeight="bold">
              {percentage.text}
            </MDTypography>
            {description}
          </MDTypography>
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
  boxShadow: boxShadows.coloredShadows.primary,
  description: "",
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
  boxShadow: PropTypes.node,
  description: PropTypes.string,
};

export default MiniStatisticsCard;
