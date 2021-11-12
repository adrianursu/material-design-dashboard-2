/**
=========================================================
* Material Design Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Divider from "@mui/material/Divider";

// Material Design Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Separator() {
  return (
    <MDBox position="relative" py={0.25}>
      <Divider />
      <MDBox
        backgroundColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        style={{ transform: "translate(-50%, -60%)" }}
      >
        <MDTypography variant="button" fontWeight="medium" textColor="secondary">
          or
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default Separator;
