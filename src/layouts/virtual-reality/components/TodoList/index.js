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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function TodoList() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card className="h-100">
      <MDBox p={3}>
        <MDBox display="flex">
          <MDBox mr={2}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              08:00
            </MDTypography>
          </MDBox>
          <MDBox lineHeight={1}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              Synk up with Mark
            </MDTypography>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "secondary"}
              opacity={darkMode ? 0.6 : 1}
            >
              Hangouts
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox display="flex">
          <MDBox mr={2}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              09:30
            </MDTypography>
          </MDBox>
          <MDBox lineHeight={1}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              Gym
            </MDTypography>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "secondary"}
              opacity={darkMode ? 0.6 : 1}
            >
              World Class
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox display="flex">
          <MDBox mr={2}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              11:00
            </MDTypography>
          </MDBox>
          <MDBox lineHeight={1}>
            <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
              Design Review
            </MDTypography>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "secondary"}
              opacity={darkMode ? 0.6 : 1}
            >
              Zoom
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox backgroundColor={darkMode ? "grey-600" : "grey-100"} mt="auto">
        <Tooltip title="Show More" placement="top" className="cursor-pointer">
          <MDBox textAlign="center" py={0.5} lineHeight={0}>
            <Icon className="font-bold text-primary" fontSize="medium">
              keyboard_arrow_down
            </Icon>
          </MDBox>
        </Tooltip>
      </MDBox>
    </Card>
  );
}

export default TodoList;
