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
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the WorkWithTheRockets
import styles from "layouts/dashboard/components/WorkWithTheRockets/styles";

function WorkWithTheRockets() {
  const classes = styles();

  return (
    <Card className="h-100">
      <MDBox position="relative" height="100%" p={2}>
        <MDBox customClass={classes.workWithTheRockets_content}>
          <MDBox mb={3} pt={1}>
            <MDTypography variant="h5" textColor="white" fontWeight="bold">
              Work with the rockets
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="body2" textColor="white">
              Wealth creation is an evolutionarily recent positive-sum game. It is all about who
              take the opportunity first.
            </MDTypography>
          </MDBox>
          <MDTypography
            component="a"
            href="#"
            variant="button"
            textColor="white"
            fontWeight="medium"
            customClass={classes.workWithTheRockets_button}
          >
            Read More
            <Icon className="font-bold">arrow_forward</Icon>
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default WorkWithTheRockets;
