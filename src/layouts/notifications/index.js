/**
=========================================================
* Material Design Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Design Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="button" textColor="white" fontWeight="regular">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="button" fontWeight="medium" textColor="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      type="success"
      icon="check"
      title="Material Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      type="warning"
      icon="star"
      title="Material Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      type="error"
      icon="warning"
      title="Material Dashboard 2"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="primary" dismissible>
                  {alertContent("primary")}
                </MDAlert>
                <MDAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent("success")}
                </MDAlert>
                <MDAlert color="error" dismissible>
                  {alertContent("error")}
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  {alertContent("warning")}
                </MDAlert>
                <MDAlert color="info" dismissible>
                  {alertContent("info")}
                </MDAlert>
                <MDAlert color="light" dismissible>
                  {alertContent("light")}
                </MDAlert>
                <MDAlert color="dark" dismissible>
                  {alertContent("dark")}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">Notifications</MDTypography>
                <MDTypography variant="button" textColor="text" fontWeight="light">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      buttonColor="success"
                      onClick={openSuccessSB}
                      fullWidth
                      boxShadow={boxShadows.coloredShadows.success}
                    >
                      success
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      buttonColor="info"
                      onClick={openInfoSB}
                      fullWidth
                      boxShadow={boxShadows.coloredShadows.info}
                    >
                      info
                    </MDButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      buttonColor="warning"
                      onClick={openWarningSB}
                      fullWidth
                      boxShadow={boxShadows.coloredShadows.warning}
                    >
                      warning
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton
                      variant="gradient"
                      buttonColor="error"
                      onClick={openErrorSB}
                      fullWidth
                      boxShadow={boxShadows.coloredShadows.error}
                    >
                      error
                    </MDButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
