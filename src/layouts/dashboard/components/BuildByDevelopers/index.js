/**
=========================================================
* Material Design 2 Dashboard PRO React
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the BuildByDevelopers
import styles from "layouts/dashboard/components/BuildByDevelopers/styles";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  const classes = styles();

  return (
    <Card>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MDBox display="flex" flexDirection="column" height="100%">
              <MDBox pt={1} mb={0.5}>
                <MDTypography variant="body2" textColor="text" fontWeight="medium">
                  Build by developers
                </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="bold" gutterBottom>
                Material Design 2 Dashboard
              </MDTypography>
              <MDBox mb={6}>
                <MDTypography variant="body2" textColor="text">
                  From colors, cards, typography to complex elements, you will find the full
                  documentation.
                </MDTypography>
              </MDBox>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                textColor="text"
                fontWeight="medium"
                customClass={classes.buildByDevelopers_button}
              >
                Read More
                <Icon className="font-bold">arrow_forward</Icon>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} lg={5} className="ml-auto relative">
            <MDBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              backgroundColor="info"
              borderRadius="lg"
              backgroundGradient
            >
              <MDBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <MDBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BuildByDevelopers;
