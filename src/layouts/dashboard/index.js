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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design 2 Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

// Dashboard layout components
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SalesTable from "examples/Tables/SalesTable";

import boxShadows from "assets/theme/base/boxShadows";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import salesTableData from "./data/salesTableData";

function Dashboard() {
  const { chart } = reportsBarChartData;
  const { chart1: lineChart } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={5}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "bookings" }}
                  count="53k"
                  percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "dark", component: "weekend" }}
                  boxShadow={boxShadows.coloredShadows.dark}
                  description=" than last week"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "today's users" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "primary", component: "leaderboard" }}
                  boxShadow={boxShadows.coloredShadows.primary}
                  description=" than last month"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "Revenue" }}
                  count="34K"
                  percentage={{ color: "success", text: "+1%" }}
                  icon={{ color: "success", component: "store" }}
                  boxShadow={boxShadows.coloredShadows.success}
                  description=" than yesterday"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "followers" }}
                  count="+91"
                  icon={{
                    color: "info",
                    component: "person_add",
                  }}
                  boxShadow={boxShadows.coloredShadows.info}
                  description="Just updated"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3} pt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  title="website views"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      Last Campaign Performance
                    </MDTypography>
                  }
                  chart={chart}
                  bgColor="primary"
                  boxShadow={boxShadows.coloredShadows.primary}
                  subtitle="campaign sent 2 days ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  title="Daily Sales"
                  bgColor="success"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      <MDTypography variant="button" textColor="secondary" fontWeight="bold">
                        (+15%)
                      </MDTypography>
                      &nbsp;increase in today sales.
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.success}
                  subtitle="updated 4min ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  title="completed tasks"
                  bgColor="dark"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      Last Campaign Performance
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.dark}
                  subtitle="just updated"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container>
          <Grid item xs={12}>
            <MDBox mb={3} position="relative">
              <SalesTable
                title="Sales by Country"
                rows={salesTableData}
                icon={{ color: "success", component: "language" }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
