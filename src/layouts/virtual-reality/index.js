/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Design Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// VR dashboards components
import BaseLayout from "layouts/virtual-reality/components/BaseLayout";

// VRInfo dashboards components
import TodoList from "layouts/virtual-reality/components/TodoList";
import TodoCard from "layouts/virtual-reality/components/TodoCard";
import Emails from "layouts/virtual-reality/components/Emails";
import MediaPlayer from "layouts/virtual-reality/components/MediaPlayer";
import Messages from "layouts/virtual-reality/components/Messages";

// Custom styles for the VRDefault
import styles from "layouts/virtual-reality/styles";

// Images
import team1 from "assets/images/team-1.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function VirtualReality() {
  const { d1, h2, fontWeightMedium } = typography;
  const { white } = colors;
  const classes = styles();

  return (
    <BaseLayout>
      <MDBox
        minHeight="100vh"
        ml={{ xs: 0, md: 10 }}
        mt={{ xs: 0, md: 4 }}
        pt={{ xs: 16, md: 32 }}
        pb={{ xs: 0, md: 3 }}
        customClass={classes.vrInfo}
      >
        <Grid container>
          <Grid item xs={12} md={1}>
            <MDBox
              display="flex"
              flexDirection={{ xs: "row", md: "column" }}
              justifyContent="center"
              alignItems="center"
              px={2}
              mb={{ xs: 8, md: 0 }}
            >
              <Tooltip title="My Profile" placement="right">
                <MDAvatar
                  src={team1}
                  alt="Profile Picture"
                  size="lg"
                  variant="square"
                  customClass="cursor-pointer"
                />
              </Tooltip>

              <MDBox my={{ xs: 0, md: 2 }} mx={{ xs: 2, md: 0 }}>
                <Tooltip title="Home" placement="right">
                  <MDButton size="large" iconOnly customClass="text-dark radius-lg">
                    <Icon className="material-icons-round">home</Icon>
                  </MDButton>
                </Tooltip>
              </MDBox>
              <MDBox mb={{ xs: 0, md: 2 }} mr={{ xs: 2, md: 0 }}>
                <Tooltip title="Search" placement="right">
                  <MDButton size="large" iconOnly customClass="text-dark radius-lg">
                    <Icon className="material-icons-round">search</Icon>
                  </MDButton>
                </Tooltip>
              </MDBox>
              <Tooltip title="Minimize" placement="right">
                <MDButton size="large" iconOnly customClass="text-dark radius-lg">
                  <Icon className="material-icons-round">more_horiz</Icon>
                </MDButton>
              </Tooltip>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={11} lg={10} xl={9}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "center", md: "flex-start" }}
              ml={{ xs: 1, md: 4 }}
              mt={-1}
            >
              <MDBox>
                <MDBox
                  fontSize={{ xs: h2.fontSize, lg: d1.fontSize }}
                  fontWeight={fontWeightMedium}
                  lineHeight={1}
                  textColor={white}
                >
                  28&deg;C
                </MDBox>
                <MDTypography variant="h6" fontWeight="medium" textTransform="uppercase">
                  cloudy
                </MDTypography>
              </MDBox>
              <MDBox component="img" src={sunCloud} width="30%" />
            </MDBox>
            <MDBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TodoList />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MDBox mb={3}>
                    <TodoCard />
                  </MDBox>
                  <Emails />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MDBox mb={3}>
                    <MediaPlayer />
                  </MDBox>
                  <Messages />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default VirtualReality;
