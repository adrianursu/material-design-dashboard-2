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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Custom styles for the TimelineItem
import styles from "examples/Timeline/TimelineItem/styles";

import { useTimeline } from "examples/Timeline/context";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();
  const classes = styles({ color, lastItem, isDark });

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <MDBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <MDBadge color={color} size="extra-small" badgeContent={badge} container />
            </MDBox>
          );
        })
      : null;

  return (
    <MDBox customClass={classes.timelineItem}>
      <MDBox customClass={classes.timelineItem_iconBox}>
        <Icon className={classes.timelineItem_icon}>{icon}</Icon>
      </MDBox>
      <MDBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <MDTypography variant="button" fontWeight="medium" textColor={isDark ? "white" : "dark"}>
          {title}
        </MDTypography>
        <MDBox mt={0.5}>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            textColor={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={1.5}>
          {description ? (
            <MDTypography variant="button" fontWeight="regular" textColor="text">
              {description}
            </MDTypography>
          ) : null}
        </MDBox>
        {badges.length > 0 ? (
          <MDBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </MDBox>
        ) : null}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
