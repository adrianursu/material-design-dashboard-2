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
import { Bar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TimeIcon from "@mui/icons-material/AccessTime";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// ReportsBarChart configurations
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

// boxShadow theme
import boxShadows from "assets/theme/base/boxShadows";

function ReportsBarChart({ title, description, chart, bgColor, boxShadow, subtitle }) {
  const { data, options } = configs(chart.labels, chart.datasets);
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card className="overflow-visible">
      <MDBox>
        {useMemo(
          () => (
            <MDBox
              backgroundColor={bgColor}
              borderRadius="lg"
              height="12.5rem"
              backgroundGradient
              mt={-3}
              mx={2}
              mb={0}
              py={2}
              pr={0.5}
              style={{ boxShadow: `${boxShadow}` }}
            >
              <Bar data={data} options={options} />
            </MDBox>
          ),
          [chart]
        )}
        <MDBox p={3} lineHeight={0}>
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
            fontWeight="light"
          >
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <TimeIcon fontSize="small" color="secondary" />
            <MDTypography
              variant="caption"
              fontWeight="light"
              textColor={darkMode ? "white" : "text"}
              opacity={darkMode ? 0.7 : 1}
            >
              &nbsp;{subtitle}
            </MDTypography>
          </MDBox>
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
  subtitle: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.string]),
  boxShadow: PropTypes.node,
  subtitle: PropTypes.string,
};

export default ReportsBarChart;
