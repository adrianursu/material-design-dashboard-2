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
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design 2 Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Material Design 2 Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
// import Projects from "layouts/dashboard/components/Projects";
// import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SalesTable from "examples/Tables/SalesTable";

import boxShadows from "assets/theme/base/boxShadows";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "./data/salesTableData";

function Dashboard() {
  const { size } = typography;
  const { chart } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={5}>
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
        <MDBox mb={3}>
          <Grid container spacing={3} py={1.2} pt={5.5}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "bookings" }}
                count="281"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "dark", component: "weekend" }}
                boxShadow={boxShadows.coloredShadows.dark}
                description=" than last week"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "primary", component: "leaderboard" }}
                boxShadow={boxShadows.coloredShadows.primary}
                description=" than last month"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Revenue" }}
                count="34K"
                percentage={{ color: "success", text: "+1%" }}
                icon={{ color: "success", component: "store" }}
                boxShadow={boxShadows.coloredShadows.success}
                description=" than yesterday"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
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
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3} pt={2.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    <MDTypography variant="button" textColor="success">
                      +23%
                    </MDTypography>
                    &nbsp;than previous week
                  </>
                }
                chart={chart}
                bgColor="success"
                boxShadow={boxShadows.coloredShadows.success}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ReportsBarChart
                title="active users"
                bgColor="secondary"
                description={
                  <>
                    <MDTypography variant="button" textColor="success">
                      +23%
                    </MDTypography>
                    &nbsp;than previous week
                  </>
                }
                chart={chart}
                boxShadow={boxShadows.coloredShadows.secondary}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <GradientLineChart
                boxShadow={boxShadows.coloredShadows.dark}
                title="Sales Overview"
                description={
                  <MDBox display="flex" alignItems="center">
                    <MDBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </MDBox>
                    <MDTypography variant="button" textColor="success" fontWeight="medium">
                      4%{" "}
                      <MDTypography variant="button" textColor="text" fontWeight="regular">
                        more in 2021
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                }
                height="12.5rem"
                chart={gradientLineChartData}
                bgColor="dark"
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
