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
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={5}>
        <MDBox mb={3}>
          <Grid container spacing={3} py={1.2}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "success", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "warning", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "sales" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "error",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3} pt={1.5}>
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
                items={items}
                bgColor="success"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ReportsBarChart
                title="active users"
                color="dark"
                description={
                  <>
                    <MDTypography variant="button" textColor="success">
                      +23%
                    </MDTypography>
                    &nbsp;than previous week
                  </>
                }
                chart={chart}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <GradientLineChart
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
                bgColor="error"
              />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
