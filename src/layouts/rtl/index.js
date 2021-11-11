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

import { useEffect } from "react";

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

// RTL layout components
import Projects from "layouts/rtl/components/Projects";
import OrderOverview from "layouts/rtl/components/OrderOverview";
import SalesTable from "examples/Tables/SalesTable";

import boxShadows from "assets/theme/base/boxShadows";

// Material Design Dashboard 2 React contexts
import { useMaterialDesignController } from "context";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import salesTableData from "./data/salesTableData";

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
                  title={{ text: "أموال اليوم" }}
                  count="53k"
                  percentage={{ color: "success", text: "+55%" }}
                  icon={{ color: "dark", component: "weekend" }}
                  boxShadow={boxShadows.coloredShadows.dark}
                  description=" من الأسبوع الماضي"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "مستخدمو اليوم" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "primary", component: "leaderboard" }}
                  boxShadow={boxShadows.coloredShadows.primary}
                  description=" من الأسبوع الماضي"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "عملاء جدد" }}
                  count="34K"
                  percentage={{ color: "error", text: "-2%" }}
                  icon={{ color: "success", component: "store" }}
                  boxShadow={boxShadows.coloredShadows.success}
                  description=" من الشهر الماضي"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MDBox mb={2}>
                <MiniStatisticsCard
                  title={{ text: "مبيعات" }}
                  count="+91"
                  icon={{
                    color: "info",
                    component: "person_add",
                  }}
                  boxShadow={boxShadows.coloredShadows.info}
                  description="مقارنة بيوم أمس"
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
                  title="مشاهدات الموقع"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      آخر أداء للحملة
                    </MDTypography>
                  }
                  chart={chart}
                  bgColor="primary"
                  boxShadow={boxShadows.coloredShadows.primary}
                  subtitle="الحملة أرسلت قبل يومين"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  title="المبيعات اليومية"
                  bgColor="success"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      <MDTypography variant="button" textColor="secondary" fontWeight="bold">
                        (+15%)
                      </MDTypography>
                      &nbsp;زيادة في مبيعات اليوم..
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.success}
                  subtitle="تم التحديث منذ 4 دقائق"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <MDBox mb={1}>
                <ReportsLineChart
                  title="المهام المكتملة"
                  bgColor="dark"
                  description={
                    <MDTypography variant="subtitle3" fontWeight="light">
                      آخر أداء للحملة
                    </MDTypography>
                  }
                  chart={lineChart}
                  boxShadow={boxShadows.coloredShadows.dark}
                  subtitle="تم تحديثه للتو"
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

export default RTL;
