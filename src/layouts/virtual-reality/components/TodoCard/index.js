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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function TodoCard() {
  return (
    <Card>
      <MDBox backgroundColor="dark" backgroundGradient>
        <MDBox p={3}>
          <MDBox display="flex" justifyContent="space-between">
            <MDTypography variant="h5" textColor="white">
              To Do
            </MDTypography>
            <MDBox textAlign="center" lineHeight={1}>
              <MDTypography variant="h1" textColor="white" fontWeight="bold">
                7
              </MDTypography>
              <MDTypography variant="button" textColor="white" fontWeight="regular">
                items
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDTypography variant="body2" textColor="white" fontWeight="regular">
            Shopping
          </MDTypography>
          <MDTypography variant="body2" textColor="white" fontWeight="regular">
            Meeting
          </MDTypography>
        </MDBox>
        <Tooltip title="Show More" placement="top" className="cursor-pointer">
          <MDBox textAlign="center" py={0.5} lineHeight={0}>
            <Icon className="font-bold text-white" fontSize="medium">
              keyboard_arrow_down
            </Icon>
          </MDBox>
        </Tooltip>
      </MDBox>
    </Card>
  );
}

export default TodoCard;
