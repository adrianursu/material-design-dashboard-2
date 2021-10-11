/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design 2 Dashboard PRO React example components
import BarReportsChartItem from "examples/Charts/BarCharts/ReportsBarChart/ReportsBarChartItem";

// ReportsBarChart configurations
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

function ReportsBarChart({ color, title, description, chart, items }) {
  const { data, options } = configs(chart.labels, chart.datasets);

  const renderItems = items.map(({ icon, label, progress }) => (
    <Grid item xs={6} sm={3} key={label}>
      <BarReportsChartItem
        color={color}
        icon={{ color: icon.color, component: icon.component }}
        label={label}
        progress={{ content: progress.content, percentage: progress.percentage }}
      />
    </Grid>
  ));

  return (
    <Card>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              backgroundColor={color}
              borderRadius="lg"
              py={2}
              pr={0.5}
              mb={3}
              height="12.5rem"
              backgroundGradient
            >
              <Bar data={data} options={options} />
            </MDBox>
          ),
          [chart]
        )}
        <MDBox px={1}>
          <MDBox mb={2}>
            <MDTypography variant="h6" textTransform="capitalize">
              {title}
            </MDTypography>
            <MDTypography variant="button" textColor="text" fontWeight="regular">
              {description}
            </MDTypography>
          </MDBox>
          <MDBox py={1} px={0.5}>
            <Grid container spacing={2}>
              {renderItems}
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
  items: [],
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ReportsBarChart;
