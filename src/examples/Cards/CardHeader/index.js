import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";

import PropTypes from "prop-types";

function CardHeader({ icon, backgroundColor }) {
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
    >
      <Icon fontSize="medium" color="inherit">
        {icon}
      </Icon>
    </MDBox>
  );
}

CardHeader.defaultProps = {
  backgroundColor: "primary",
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
};

export default CardHeader;
