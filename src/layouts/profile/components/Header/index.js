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

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Design Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Design Dashboard 2 PRO React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Material Design Dashboard 2 PRO React icons
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

// Material Design Dashboard 2 PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for Header
import styles from "layouts/profile/components/Header/styles";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const classes = styles();

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <>
      <DashboardNavbar />
      <MDBox position="relative" mt={3}>
        <MDBox customClass={classes.profileHeader_background} />
        <Card className={classes.profileHeader_profile}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <MDAvatar
                src={burceMars}
                alt="profile-image"
                variant="rounded"
                size="xl"
                customClass="shadow-sm"
              />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  Richard Davis
                </MDTypography>
                <MDTypography variant="button" textColor="text" fontWeight="regular">
                  CEO / Co-Founder
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className="ml-auto">
              <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                  <Tab label="App" icon={<HomeIcon fontSize="small" />} />
                  <Tab label="Messages" icon={<EmailIcon fontSize="small" />} />
                  <Tab label="Settings" icon={<SettingsIcon fontSize="small" />} />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <MDBox mt={5} mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={4}>
                <PlatformSettings />
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <ProfileInfoCard
                  title="profile information"
                  description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                  info={{
                    fullName: "Alec M. Thompson",
                    mobile: "(44) 123 1234 123",
                    email: "alecthompson@mail.com",
                    location: "USA",
                  }}
                  social={[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                    {
                      link: "https://twitter.com/creativetim",
                      icon: <TwitterIcon />,
                      color: "twitter",
                    },
                    {
                      link: "https://www.instagram.com/creativetimofficial/",
                      icon: <InstagramIcon />,
                      color: "instagram",
                    },
                  ]}
                  action={{ route: "", tooltip: "Edit Profile" }}
                />
              </Grid>
              <Grid item xs={12} xl={4}>
                <ProfilesList title="conversations" profiles={profilesListData} />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mb={3}>
            <Card style={{ boxShadow: "none" }}>
              <MDBox pt={2} px={2}>
                <MDBox mb={0.5}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Projects
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography variant="button" fontWeight="light" textColor="text">
                    Architects design houses
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={homeDecor1}
                      label="project #2"
                      title="modern"
                      description="As Uber works through a huge amount of internal management turmoil."
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "primary",
                        label: "view project",
                      }}
                      authors={[
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={homeDecor2}
                      label="project #1"
                      title="scandinavian"
                      description="Music is something that every person has his or her own specific opinion about."
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "primary",
                        label: "view project",
                      }}
                      authors={[
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={homeDecor3}
                      label="project #3"
                      title="minimalist"
                      description="Different people have different taste, and various types of music."
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "primary",
                        label: "view project",
                      }}
                      authors={[
                        { image: team4, name: "Peterson" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team1, name: "Elena Morison" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      image={homeDecor4}
                      label="project #4"
                      title="gothic"
                      description="Why would anyone pick blue over pink? Pink is obviously a better color."
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "primary",
                        label: "view project",
                      }}
                      authors={[
                        { image: team1, name: "Elena Morison" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                        { image: team2, name: "Ryan Milly" },
                      ]}
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </MDBox>
        </Card>
      </MDBox>
    </>
  );
}

export default Header;
