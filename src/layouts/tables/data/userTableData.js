/* eslint-disable react/prop-types */
// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team1 from "assets/images/team/team-1.jpg";
import team2 from "assets/images/team/team-2.jpg";
import team3 from "assets/images/team/team-3.jpg";
import team4 from "assets/images/team/team-4.jpg";
import team5 from "assets/images/team/team-5.jpg";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Author({ image, name, email }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  return (
    <MDBox display="flex" alignItems="center" px={1} py={0.5}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} size="sm" variant="rounded" />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
          {name}
        </MDTypography>
        <MDTypography
          variant="caption"
          fontWeight="light"
          textColor={darkMode ? "white" : "secondary"}
          opacity={darkMode ? 0.7 : 1}
        >
          {email}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

function Function({ job, org }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <MDBox display="flex" flexDirection="column">
      <MDTypography
        variant="caption"
        fontWeight="medium"
        textColor={darkMode ? "white" : "text"}
        opacity={darkMode ? 0.6 : 1}
      >
        {job}
      </MDTypography>
      <MDTypography
        variant="caption"
        fontWeight="light"
        textColor={darkMode ? "white" : "secondary"}
        opacity={darkMode ? 0.8 : 1}
      >
        {org}
      </MDTypography>
    </MDBox>
  );
}

function Employed({ date }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  return (
    <MDTypography
      variant="caption"
      fontWeight="medium"
      textColor={darkMode ? "white" : "secondary"}
      opacity={darkMode ? 0.8 : 1}
    >
      {date}
    </MDTypography>
  );
}

function Action() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  return (
    <MDTypography
      component="a"
      href="#"
      variant="caption"
      textColor={darkMode ? "white" : "secondary"}
      opacity={darkMode ? 0.8 : 1}
      fontWeight="medium"
    >
      Edit
    </MDTypography>
  );
}

export default {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <MDBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
      employed: <Employed date="23/04/18" />,
      action: <Action />,
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: <Employed date="11/01/19" />,
      action: <Action />,
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <MDBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
      employed: <Employed date="19/09/17" />,
      action: <Action />,
    },
    {
      author: <Author image={team1} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
      employed: <Employed date="24/12/08" />,
      action: <Action />,
    },
    {
      author: <Author image={team5} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: <Employed date="04/10/21" />,
      action: <Action />,
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: <Employed date="14/09/20" />,
      action: <Action />,
    },
  ],
};
