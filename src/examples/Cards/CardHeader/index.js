import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";

import boxShadows from "assets/theme/base/boxShadows";

import PropTypes from "prop-types";

function CardHeader({ icon, backgroundColor, boxShadow }) {
  return (
    <MDBox
      backgroundColor={backgroundColor}
      width="100%"
      height="4rem"
      borderRadius="md"
      display="flex"
      alignItems="center"
      color={backgroundColor === "white" || backgroundColor === "light" ? "dark" : "white"}
      boxShadow="md"
      backgroundGradient
      mt={-5.5}
      px={3}
      style={{ boxShadow: `${boxShadow}` }}
    >
      <Icon fontSize="medium" color="inherit">
        {icon}
      </Icon>
    </MDBox>
  );
}

CardHeader.defaultProps = {
  backgroundColor: "primary",
  boxShadow: boxShadows.coloredShadows.primary,
};

CardHeader.propTypes = {
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
  icon: PropTypes.string.isRequired,
  boxShadow: PropTypes.node,
};

export default CardHeader;
