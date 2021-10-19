/**
=========================================================
* Material Design 2 Dashboard PRO React
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import DashboardLayout from "examples/LayoutContainers/DashboardLayout/index";
import DashboardNavbar from "examples/Navbars/DashboardNavbar/index";
import Footer from "examples/Footer";

import CardHeader from "examples/Cards/CardHeader";
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";

function Typography() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={5}>
        <Card className="overflow-visible">
          <MDBox display="flex" justifyContent="center" alignItems="center" p={2}>
            <CardHeader icon="assignment" backgroundColor="primary" />
          </MDBox>
          <MDTypography variant="h1" fontWeight="regular" textColor="text">
            This is a h1
          </MDTypography>
          <MDTypography variant="h2" fontWeight="regular" textColor="text">
            This is a h2
          </MDTypography>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Typography;
