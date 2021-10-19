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

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design 2 Dashboard PRO React example components

// ReportsBarChart configurations
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

// boxShadow theme
import boxShadows from "assets/theme/base/boxShadows";

function ReportsBarChart({ title, description, chart, bgColor, boxShadow }) {
  const { data, options } = configs(chart.labels, chart.datasets);

  return (
    <Card className="overflow-visible">
      <MDBox padding="1rem">
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
              mt={-5}
              style={{ boxShadow: `${boxShadow}` }}
            >
              <Bar data={data} options={options} />
            </MDBox>
          ),
          [chart]
        )}
        <MDBox px={1} lineHeight={0}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography variant="button" textColor="text" fontWeight="regular">
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  description: "",
  bgColor: "dark",
  boxShadow: boxShadows.coloredShadows.primary,
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.string]),
  boxShadow: PropTypes.node,
};

export default ReportsBarChart;
