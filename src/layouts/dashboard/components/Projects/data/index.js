// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import team1 from "assets/images/team/team-1.jpg";
import team2 from "assets/images/team/team-2.jpg";
import team3 from "assets/images/team/team-3.jpg";
import team4 from "assets/images/team/team-4.jpg";

export default function data() {
  const classes = styles();
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar src={image} alt="name" size="xs" customClass={classes.projects_tableAvatar} />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "companies", align: "left" },
      { name: "members", align: "left" },
      { name: "budget", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        companies: [logoXD, "Material Design 2 XD Version"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),

        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            $14,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" gradient />
          </MDBox>
        ),
      },
      {
        companies: [logoAtlassian, "Add Progress Track"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            $3,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" gradient />
          </MDBox>
        ),
      },
      {
        companies: [logoSlack, "Fix Platform Errors"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            Not set
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" gradient />
          </MDBox>
        ),
      },
      {
        companies: [logoSpotify, "Launch our Mobile App"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" gradient />
          </MDBox>
        ),
      },
      {
        companies: [logoInvesion, "Redesign New Online Shop"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            $2,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" gradient />
          </MDBox>
        ),
      },
      {
        companies: [logoJira, "Add the New Pricing Page"],
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        budget: (
          <MDTypography
            variant="caption"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
            fontWeight="medium"
          >
            $500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" gradient />
          </MDBox>
        ),
      },
    ],
  };
}
