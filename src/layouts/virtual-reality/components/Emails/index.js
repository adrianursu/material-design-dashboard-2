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

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Emails() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3} lineHeight={1}>
        <MDTypography variant="body2" textColor="text">
          Emails (21)
        </MDTypography>
        <Tooltip title="Check your emails" placement="top">
          <MDTypography
            component="a"
            href="#"
            variant="body2"
            fontWeight="regular"
            textColor={darkMode ? "white" : "dark"}
          >
            Check
          </MDTypography>
        </Tooltip>
      </MDBox>
    </Card>
  );
}

export default Emails;
