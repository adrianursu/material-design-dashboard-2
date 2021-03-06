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

import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

// RTL layout components
import Projects from "layouts/rtl/components/Projects";
import OrderOverview from "layouts/rtl/components/OrderOverview";

import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard 2 React contexts
import { useMaterialDesignController } from "context";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

function RTL() {
  const [, dispatch] = useMaterialDesignController();
  const { chart } = reportsBarChartData;
  const { chart1: lineChart } = reportsLineChartData;

  // Changing the direction to rtl
  useEffect(() => {
    dispatch({ type: "DIRECTION", value: "rtl" });

    return () => dispatch({ type: "DIRECTION", value: "ltr" });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={2}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "?????????? ??????????" }}
                  count="53k"
                  percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "dark", component: "weekend" }}
                  boxShadow={boxShadows.coloredShadows.dark}
                  description=" ???? ?????????????? ????????????"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "?????????????? ??????????" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "primary", component: "leaderboard" }}
                  boxShadow={boxShadows.coloredShadows.primary}
                  description=" ???? ?????????????? ????????????"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "?????????? ??????" }}
                  count="34K"
                  percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "success", component: "store" }}
                  boxShadow={boxShadows.coloredShadows.success}
                  description=" ???? ?????????? ????????????"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "????????????" }}
                  count="+91"
                  icon={{
                    color: "info",
                    component: "person_add",
                  }}
                  boxShadow={boxShadows.coloredShadows.info}
                  description="???????????? ???????? ??????"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3} pt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <MDBox mb={1}>
                <ReportsBarChart
                  title="?????????????? ????????????"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      ?????? ???????? ????????????
                    </MDTypography>
                  }
                  chart={chart}
                  bgColor="primary"
                  boxShadow={boxShadows.coloredShadows.primary}
                  subtitle="???????????? ?????????? ?????? ??????????"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  title="???????????????? ??????????????"
                  bgColor="success"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      <MDTypography variant="button" textColor="secondary" fontWeight="bold">
                        (+15%)
                      </MDTypography>
                      &nbsp;?????????? ???? ???????????? ??????????..
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.success}
                  subtitle="???? ?????????????? ?????? 4 ??????????"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  title="???????????? ????????????????"
                  bgColor="dark"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      ?????? ???????? ????????????
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.dark}
                  subtitle="???? ???????????? ????????"
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <MDBox mb={5}>
              <Projects />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={5}>
              <OrderOverview />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
