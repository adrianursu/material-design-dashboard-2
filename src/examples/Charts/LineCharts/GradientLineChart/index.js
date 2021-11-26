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

// GradientLineChart configurations
import configs from "examples/Charts/LineCharts/GradientLineChart/configs";

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Import boxShadows theme
import boxShadows from "assets/theme/base/boxShadows";

function GradientLineChart({ title, description, height, chart, bgColor, boxShadow }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets.map((dataset) => ({
      ...dataset,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
      borderColor: colors[dataset.color].main,
      fill: true,
      maxBarThickness: 6,
      backgroundColor: gradientChartLine(chartRef.current.children[0], colors[dataset.color].main),
    }));

    setChartData(configs(chart.labels, chartDatasets));
  }, [chart]);

  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  const renderChart = (
    <MDBox padding="1rem" mt={-5}>
      {useMemo(
        () => (
          <MDBox
            backgroundColor={bgColor}
            borderRadius="lg"
            py={2}
            pr={0.5}
            mb={2}
            height="12.5rem"
            backgroundGradient
            style={{ boxShadow: `${boxShadow}` }}
          >
            <div ref={chartRef} style={{ height }}>
              <Line data={data} options={options} />
            </div>
          </MDBox>
        ),
        [chartData, height]
      )}

      <MDBox px={1}>
        <MDTypography
          variant="h6"
          textTransform="capitalize"
          textColor={darkMode ? "white" : "text"}
        >
          {title}
        </MDTypography>
        <MDTypography
          variant="button"
          textColor={darkMode ? "white" : "text"}
          opacity={darkMode ? 0.7 : 1}
          fontWeight="regular"
        >
          {description}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return title || description ? (
    <Card className="overflow-visible">{renderChart}</Card>
  ) : (
    renderChart
  );
}

// Setting default values for the props of GradientLineChart
GradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
  bgColor: "dark",
  boxShadow: boxShadows.coloredShadows.primary,
};

// Typechecking props for the GradientLineChart
GradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
  bgColor: PropTypes.oneOfType(PropTypes.string),
  boxShadow: PropTypes.node,
};

export default GradientLineChart;
