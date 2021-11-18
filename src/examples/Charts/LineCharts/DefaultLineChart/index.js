/**
=========================================================
* Material Design Dashboard 2 React 
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
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// DefaultLineChart configurations
import configs from "examples/Charts/LineCharts/DefaultLineChart/configs";

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function DefaultLineChart({ title, description, height, chart }) {
  const chartDatasets = chart.datasets.map((dataset) => ({
    ...dataset,
    tension: 0.4,
    borderWidth: 3,
    pointRadius: 2,
    pointBackgroundColor: colors[dataset.color].main,
    borderColor: colors[dataset.color].main,
    maxBarThickness: 6,
  }));

  const { data, options } = configs(chart.labels, chartDatasets);

  const renderChart = (
    <MDBox p={2}>
      {title || description ? (
        <MDBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <MDBox mb={1}>
              <MDTypography variant="h6">{title}</MDTypography>
            </MDBox>
          )}
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" textColor="text">
              {description}
            </MDTypography>
          </MDBox>
        </MDBox>
      ) : null}
      {useMemo(
        () => (
          <MDBox height={height}>
            <Line data={data} options={options} />
          </MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DefaultLineChart;
