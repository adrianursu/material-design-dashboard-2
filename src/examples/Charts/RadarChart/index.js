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
import { Radar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// RadarChart configurations
import configs from "examples/Charts/RadarChart/configs";

// Material Design 2 Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

// Material Design 2 Dashboard PRO React helper functions
import rgba from "assets/theme/functions/rgba";

function RadarChart({ title, description, chart }) {
  const chartDatasets = chart.datasets.map((dataset) => ({
    ...dataset,
    backgroundColor: rgba(colors[dataset.color].main, 0.2),
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
          <MDBox p={6}>
            <Radar data={data} options={options} />
          </MDBox>
        ),
        [chart]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of RadarChart
RadarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the RadarChart
RadarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default RadarChart;
