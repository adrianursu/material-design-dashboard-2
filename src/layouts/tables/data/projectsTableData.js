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

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Completion({ value, color }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDBox display="flex" alignItems="center">
      <MDTypography
        variant="caption"
        textColor={darkMode ? "white" : "text"}
        opacity={darkMode ? 0.6 : 1}
        fontWeight="medium"
      >
        {value}%&nbsp;
      </MDTypography>
      <MDBox width="8rem">
        <MDProgress value={value} color={color} gradient noLabel />
      </MDBox>
    </MDBox>
  );
}

function Action() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDTypography variant="body2" textColor={darkMode ? "white" : "text"} display="inline">
      <Icon fontSize="small">more_vert</Icon>
    </MDTypography>
  );
}

function Budget({ amount }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDTypography
      variant="button"
      fontWeight="medium"
      textColor={darkMode ? "white" : "text"}
      opacity={darkMode ? 0.6 : 1}
    >
      {amount}
    </MDTypography>
  );
}

function Status({ status }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDTypography
      variant="caption"
      textColor={darkMode ? "white" : "text"}
      opacity={darkMode ? 0.6 : 1}
      fontWeight="medium"
      textTransform="capitalize"
    >
      {status}
    </MDTypography>
  );
}

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
      project: [logoSpotify, "Spotify"],
      budget: <Budget amount="$2,500" />,
      status: <Status status="working" />,
      completion: <Completion value={60} color="primary" />,
      action: <Action />,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: <Budget amount="$5,000" />,
      status: <Status status="Done" />,
      completion: <Completion value={100} color="success" />,
      action: <Action />,
    },
    {
      project: [logoJira, "Jira"],
      budget: <Budget amount="$3,400" />,
      status: <Status status="cancelled" />,
      completion: <Completion value={30} color="error" />,
      action: <Action />,
    },
    {
      project: [logoSlack, "Slack"],
      budget: <Budget amount="$1,400" />,
      status: <Status status="cancelled" />,
      completion: <Completion value={0} color="error" />,
      action: <Action />,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: <Budget amount="$14,000" />,
      status: <Status status="working" />,
      completion: <Completion value={80} color="info" />,
      action: <Action />,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: <Budget amount="$2,300" />,
      status: <Status status="done" />,
      completion: <Completion value={100} color="success" />,
      action: <Action />,
    },
  ],
};
