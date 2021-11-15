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
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import TimeIcon from "@mui/icons-material/AccessTime";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design 2 Dashboard PRO React example components

// ReportsBarChart configurations
import configs from "examples/Charts/LineCharts/ReportsLineChart/configs";

// boxShadow theme
import boxShadows from "assets/theme/base/boxShadows";
import { Divider } from "@mui/material";

function ReportsLineChart({ title, description, chart, bgColor, boxShadow, subtitle }) {
  const { data, options } = configs(chart.labels, chart.datasets);

  return (
    <Card className="overflow-visible">
      <MDBox>
        {useMemo(
          () => (
            <MDBox
              backgroundColor={bgColor}
              borderRadius="lg"
              mt={-3}
              mx={2}
              mb={0}
              height="12.5rem"
              backgroundGradient
              style={{ boxShadow: `${boxShadow}` }}
            >
              <Line data={data} options={options} />
            </MDBox>
          ),
          [chart]
        )}
        <MDBox p={3} lineHeight={0}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography variant="button" textColor="text" fontWeight="regular">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <TimeIcon fontSize="small" color="secondary" />
            <MDTypography variant="caption" fontWeight="light">
              &nbsp;{subtitle}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsLineChart.defaultProps = {
  description: "",
  bgColor: "dark",
  boxShadow: boxShadows.coloredShadows.primary,
  subtitle: "",
};

// Typechecking props for the ReportsBarChart
ReportsLineChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.string]),
  boxShadow: PropTypes.node,
  subtitle: PropTypes.string,
};

export default ReportsLineChart;
