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
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Custom styles for the Messages
import styles from "layouts/virtual-reality/components/Messages/styles";

// Images
import team1 from "assets/images/team/team-1.jpg";
import team2 from "assets/images/team/team-2.jpg";
import team3 from "assets/images/team/team-3.jpg";
import team4 from "assets/images/team/team-4.jpg";

function Messages() {
  const classes = styles();

  return (
    <Card>
      <MDBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <MDTypography variant="body2" textColor="text">
          Messages
        </MDTypography>
        <MDBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <MDAvatar src={team1} alt="team-1" size="sm" customClass={classes.messages_avatar} />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <MDAvatar src={team2} alt="team-2" size="sm" customClass={classes.messages_avatar} />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <MDAvatar src={team3} alt="team-3" size="sm" customClass={classes.messages_avatar} />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <MDAvatar src={team4} alt="team-4" size="sm" customClass={classes.messages_avatar} />
          </Tooltip>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Messages;
