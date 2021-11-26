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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Import boxShadow properties
import boxShadows from "assets/theme/base/boxShadows";
import { Divider } from "@mui/material";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";
import darkModeColors from "assets/theme/base/darkModeColors";

function MiniStatisticsCard({
  backgroundColor,
  title,
  count,
  percentage,
  icon,
  boxShadow,
  description,
}) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  const { background } = darkModeColors;
  return (
    <Card className="overflow-visible">
      <MDBox
        backgroundColor={
          darkMode && backgroundColor === "white" ? background.state : backgroundColor
        }
        backgroundGradient
        borderRadius="xl"
      >
        <MDBox>
          <Grid
            container
            alignItems="center"
            p={2}
            pt={1}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item>
              <MDBox
                backgroundColor={backgroundColor === "white" ? icon.color : "white"}
                width="4rem"
                height="4rem"
                borderRadius="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={backgroundColor === "white" ? "white" : "dark"}
                backgroundGradient
                mt={-5.5}
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
                justifyContent="space-between"
                pt={0.5}
              >
                <MDTypography
                  variant="button"
                  textColor={backgroundColor === "white" && !darkMode ? "text" : "white"}
                  opacity={backgroundColor === "white" && !darkMode ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight="light"
                >
                  {title.text}
                </MDTypography>
                <MDTypography
                  variant="h4"
                  fontWeight="bold"
                  textColor={backgroundColor === "white" && !darkMode ? "dark" : "white"}
                >
                  {count}{" "}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          <Divider style={{ margin: "0" }} />
          <MDBox p={2}>
            <MDTypography
              variant="body2"
              fontWeight="light"
              textColor={backgroundColor === "white" && !darkMode ? "dark" : "white"}
              opacity={backgroundColor === "white" && !darkMode ? 1 : 0.7}
            >
              <MDTypography variant="button" textColor={percentage.color} fontWeight="bold">
                {percentage.text}
              </MDTypography>
              {description}
            </MDTypography>
          </MDBox>
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
