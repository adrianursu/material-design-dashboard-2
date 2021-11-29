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

// Material UI Components
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import TableHeader from "layouts/tables/components/TableHeader";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

// Data
import userTableData from "layouts/tables/data/userTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const classes = styles();
  const { columns, rows } = userTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} pt={6}>
        <MDBox mb={6}>
          <Card className="overflow-visible">
            <MDBox display="flex" justifyContent="space-between" alignItems="center" p={2}>
              <TableHeader text="authors table" backgroundColor="primary" />
            </MDBox>
            <MDBox customClass={classes.tables_table} backgroundColor="transparent">
              <Table columns={columns} rows={rows} />
            </MDBox>
          </Card>
        </MDBox>
        <Card className="overflow-visible">
          <MDBox display="flex" justifyContent="space-between" alignItems="center" p={2}>
            <TableHeader text="projects table" backgroundColor="primary" />
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
