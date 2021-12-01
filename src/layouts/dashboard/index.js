/**
=========================================================
* Material Design Dashboard 2 React
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

// Dashboard layout components
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

import boxShadows from "assets/theme/base/boxShadows";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

function Dashboard() {
  const { chart } = reportsBarChartData;
  const { chart1: lineChart } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={2}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "Today's Money" }}
                  count="$53k"
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
                  title={{ text: "New Clients" }}
                  count="3,462"
                  percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "success", component: "store" }}
                  boxShadow={boxShadows.coloredShadows.success}
                  description=" than yesterday"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "Sales" }}
                  count="$103,430"
                  percentage={{ color: "success", text: "+5%" }}
                  icon={{
                    color: "info",
                    component: "person_add",
                  }}
                  boxShadow={boxShadows.coloredShadows.info}
                  description=" than yesterday"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3} pt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} md={6}>
              <MDBox mb={1}>
                <ReportsBarChart
                  title="website views"
                  description="Last Campaign Performance"
                  chart={chart}
                  bgColor="primary"
                  boxShadow={boxShadows.coloredShadows.primary}
                  subtitle="campaign sent 2 days ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <MDBox mb={1}>
                <ReportsLineChart
                  title="Daily Sales"
                  bgColor="success"
                  percentage="(+15%)"
                  description=" increase in today sales."
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.success}
                  subtitle="updated 4 min ago"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4} md={12}>
              <MDBox>
                <ReportsLineChart
                  title="completed tasks"
                  bgColor="dark"
                  description="Last Campaign Performance"
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.dark}
                  subtitle="just updated"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrderOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
