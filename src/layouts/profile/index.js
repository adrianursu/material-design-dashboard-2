/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

import ProfilesList from "examples/ProfilesList";

// Overview page components
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

import Grid from "@mui/material/Grid";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox position="relative" mt={3}>
        <Header>
          <MDBox mt={3} mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={4}>
                <PlatformSettings />
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <ProfileInformation />
              </Grid>
              <Grid item xs={12} xl={4}>
                <ProfilesList title="conversations" profiles={profilesListData} />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mb={3}>
            <Projects />
          </MDBox>
        </Header>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
