import MDBox from "components/MDBox";

import boxShadows from "assets/theme/base/boxShadows";

import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";

function TableHeader({ text, backgroundColor, boxShadow }) {
  return (
    <MDBox
      backgroundColor={backgroundColor}
      width="100%"
      height="4.5rem"
      borderRadius="md"
      display="flex"
      alignItems="center"
      color={backgroundColor === "white" || backgroundColor === "light" ? "dark" : "white"}
      boxShadow="md"
      backgroundGradient
      mt={-5.5}
      px={2}
      style={{ boxShadow: `${boxShadow}` }}
    >
      <MDTypography variant="body2" fontWeight="bold" textColor="white" textTransform="capitalize">
        {text}
      </MDTypography>
    </MDBox>
  );
}

TableHeader.defaultProps = {
  backgroundColor: "primary",
  boxShadow: boxShadows.coloredShadows.primary,
  text: "",
};

TableHeader.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  text: PropTypes.string,
  boxShadow: PropTypes.node,
};

export default TableHeader;
