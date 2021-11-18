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
import { PolarArea } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// PolarChart configurations
import configs from "examples/Charts/PolarChart/configs";

function PolarChart({ title, description, chart }) {
  const { data, options } = configs(chart.labels, chart.datasets, chart.cutout);

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
          <MDBox p={4}>
            <PolarArea data={data} options={options} />
          </MDBox>
        ),
        [chart]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PolarChart;
