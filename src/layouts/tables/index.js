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

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import CardHeader from "examples/Cards/CardHeader";

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Table";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import boxShadows from "assets/theme/base/boxShadows";

function Tables() {
  const classes = styles();
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={6}>
          <Card className="overflow-visible">
            <MDBox display="flex" alignItems="center" p={2}>
              <CardHeader
                icon="group"
                backgroundColor="warning"
                boxShadow={boxShadows.coloredShadows.warning}
              />
            </MDBox>
            <MDBox customClass={classes.tables_table} backgroundColor="transparent">
              <Table columns={columns} rows={rows} />
            </MDBox>
          </Card>
        </MDBox>
        <Card className="overflow-visible">
          <MDBox display="flex" alignItems="center" p={3}>
            <CardHeader
              icon="workspaces"
              backgroundColor="dark"
              boxShadow={boxShadows.coloredShadows.info}
            />
          </MDBox>
          <MDBox customClass={classes.tables_table}>
            <Table columns={prCols} rows={prRows} />
          </MDBox>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
