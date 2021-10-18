/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" textColor="text" fontWeight="medium">
        {value}%&nbsp;
      </MDTypography>
      <MDBox width="8rem">
        <MDProgress value={value} color={color} gradient noLabel />
      </MDBox>
    </MDBox>
  );
}

const action = (
  <Icon className="font-bold text-secondary cursor-pointer" fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $2,500
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $5,000
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          done
        </MDTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $3,400
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          canceled
        </MDTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $1,400
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          canceled
        </MDTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $14,000
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <MDTypography variant="button" textColor="text" fontWeight="medium">
          $2,300
        </MDTypography>
      ),
      status: (
        <MDTypography variant="caption" textColor="text" fontWeight="medium">
          done
        </MDTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};
