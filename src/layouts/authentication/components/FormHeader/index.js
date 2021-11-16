import MDBox from "components/MDBox";

import boxShadows from "assets/theme/base/boxShadows";

import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

function FormHeader({ text, backgroundColor, boxShadow }) {
  return (
    <MDBox px={2} mt={-2}>
      <MDBox
        backgroundColor={backgroundColor}
        width="100%"
        height="4.5rem"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={backgroundColor === "white" || backgroundColor === "light" ? "dark" : "white"}
        boxShadow="md"
        backgroundGradient
        style={{ boxShadow: `${boxShadow}` }}
      >
        <MDBox>
          <MDTypography variant="h5" fontWeight="bold" textColor="white" textTransform="capitalize">
            {text}
          </MDTypography>
        </MDBox>
        <MDBox justifyContent="space-between" mt={2}>
          <FacebookIcon color="white" />
          <GitHubIcon color="white" />
          <GoogleIcon color="white" />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

FormHeader.defaultProps = {
  backgroundColor: "primary",
  boxShadow: boxShadows.coloredShadows.primary,
  text: "sign in",
};

FormHeader.propTypes = {
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

export default FormHeader;
