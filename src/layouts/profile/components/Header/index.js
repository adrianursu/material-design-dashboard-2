/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
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

// Material Design Dashboard 2 PRO React icons
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

// Material Design Dashboard 2 PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for Header
import styles from "layouts/profile/components/Header/styles";

// Images
import burceMars from "assets/images/team/bruce-mars.jpg";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Header(props) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

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
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textColor={darkMode ? "white" : "dark"}
              >
                Richard Davis
              </MDTypography>
              <MDTypography
                variant="button"
                textColor={darkMode ? "white" : "text"}
                fontWeight="regular"
                opacity={darkMode ? 0.6 : 1}
              >
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
        {props.children}
      </Card>
    </>
  );
}

export default Header;
