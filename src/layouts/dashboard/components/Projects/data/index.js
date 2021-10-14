// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const classes = styles();

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
          <MDTypography variant="caption" textColor="text" fontWeight="medium">
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
          <MDTypography variant="caption" textColor="text" fontWeight="medium">
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
          <MDTypography variant="caption" textColor="text" fontWeight="medium">
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
          <MDTypography variant="caption" textColor="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" gradient />
          </MDBox>
        ),
      },
    ],
  };
}
