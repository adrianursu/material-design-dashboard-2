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

// Images
import homeDecor1 from "assets/images/profile-projects/home-decor-1.jpg";
import homeDecor2 from "assets/images/profile-projects/home-decor-2.jpg";
import homeDecor3 from "assets/images/profile-projects/home-decor-3.jpg";
import homeDecor4 from "assets/images/profile-projects/home-decor-4.jpg";
import team1 from "assets/images/team/team-1.jpg";
import team2 from "assets/images/team/team-2.jpg";
import team3 from "assets/images/team/team-3.jpg";
import team4 from "assets/images/team/team-4.jpg";

// Material Design Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

// Material Design Dashboard 2 React examples
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Projects() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card style={{ boxShadow: "none" }}>
      <MDBox px={2}>
        <MDBox mb={0.5}>
          <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
            Projects
          </MDTypography>
        </MDBox>
        <MDBox mb={1}>
          <MDTypography
            variant="button"
            fontWeight="light"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.6 : 1}
          >
            Architects design houses
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2} py={0}>
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
  );
}

export default Projects;
