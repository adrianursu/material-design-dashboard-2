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

import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// MixedChart configurations
import configs from "examples/Charts/MixedChart/configs";

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function MixedChart({ title, description, height, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets.map((dataset) => {
      let finalConfigs;

      const defaultLine = {
        ...dataset,
        type: "line",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        pointBackgroundColor: colors[dataset.color].main,
        borderColor: colors[dataset.color].main,
        maxBarThickness: 6,
      };

      const gradientLine = {
        ...dataset,
        type: "line",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 3,
        borderColor: colors[dataset.color].main,
        fill: true,
        maxBarThickness: 6,
        backgroundColor: gradientChartLine(
          chartRef.current.children[0],
          colors[dataset.color].main
        ),
      };

      const bar = {
        ...dataset,
        type: "bar",
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color].main,
        fill: false,
        maxBarThickness: 35,
      };

      const thinBar = {
        ...dataset,
        type: "bar",
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color].main,
        fill: false,
        maxBarThickness: 10,
      };

      if (dataset.chartType === "default-line") {
        finalConfigs = defaultLine;
      } else if (dataset.chartType === "gradient-line") {
        finalConfigs = gradientLine;
      } else if (dataset.chartType === "thin-bar") {
        finalConfigs = thinBar;
      } else {
        finalConfigs = bar;
      }

      return { ...finalConfigs };
    });

    setChartData(configs(chart.labels, chartDatasets));
  }, [chart]);

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
          <div ref={chartRef} style={{ height }}>
            <Line data={data} options={options} />
          </div>
        ),
        [chartData, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the MixedChart
MixedChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MixedChart;
