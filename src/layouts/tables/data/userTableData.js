/* eslint-disable react/prop-types */
// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

function Author({ image, name, email }) {
  return (
    <MDBox display="flex" alignItems="center" px={1} py={0.5}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} size="sm" variant="rounded" />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" textColor="secondary" fontWeight="light">
          {email}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

function Function({ job, org }) {
  return (
    <MDBox display="flex" flexDirection="column">
      <MDTypography variant="caption" fontWeight="medium" textColor="text">
        {job}
      </MDTypography>
      <MDTypography variant="caption" textColor="secondary" fontWeight="light">
        {org}
      </MDTypography>
    </MDBox>
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
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          11/01/19
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <MDBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          19/09/17
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
    {
      author: <Author image={team1} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="online" color="success" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          24/12/08
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
    {
      author: <Author image={team5} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          04/10/21
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          14/09/20
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    },
  ],
};
