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

function User({ image, name, count }) {
  return (
    <MDBox display="flex" alignItems="center" px={1} py={0.5}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} size="md" variant="rounded" />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography fontWeight="normal" textColor="secondary" variant="body">
          <MDTypography variant="button" textColor="success" fontWeight="bold">
            {count}
          </MDTypography>
          &nbsp;orders
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

function Value({ value }) {
  return (
    <MDTypography variant="caption" fontWeight="medium" textColor="secondary">
      {value}
    </MDTypography>
  );
}

export default {
  columns: [
    { name: "user", align: "left" },
    { name: "value", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      user: <User image={team1} name="Alice Vingent" count="8.232" />,
      value: <Value value="$130.992" />,
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
      user: <User image={team2} name="John Alura" count="12.821" />,
      value: <Value value="$80.250" />,
      status: <MDBadge variant="gradient" badgeContent="offline" color="dark" size="extra-small" />,
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
      user: <User image={team4} name="Laurent Perrier" count="2.241" />,
      value: <Value value="$40.600" />,
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
      user: <User image={team3} name="Michael Levi" count="5.921" />,
      value: (
        <Value
          value="	
      $91.300"
        />
      ),
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
      user: <User image={team5} name="Richard Gran" count="921" />,
      value: <Value value="$140.925" />,
      status: (
        <MDBadge variant="gradient" badgeContent="offline" color="secondary" size="extra-small" />
      ),
      employed: (
        <MDTypography variant="caption" textColor="secondary" fontWeight="medium">
          04/10/21
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" textColor="dark" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    },
  ],
};
