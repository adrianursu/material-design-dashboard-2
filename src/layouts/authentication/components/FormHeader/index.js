import MDBox from "components/MDBox";

import boxShadows from "assets/theme/base/boxShadows";

import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

function FormHeader({ text, backgroundColor, boxShadow }) {
  return (
    <MDBox px={2} mt={-3} mb={2}>
      <MDBox
        py={5}
        backgroundColor={backgroundColor}
        width="100%"
        borderRadius="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={backgroundColor === "white" || backgroundColor === "light" ? "dark" : "white"}
        boxShadow="md"
        flexDirection="column"
        backgroundGradient
        style={{ boxShadow: `${boxShadow}` }}
      >
        <MDBox mb={3} mt={-1}>
          <MDTypography variant="h4" fontWeight="bold" textColor="white" textTransform="capitalize">
            {text}
          </MDTypography>
        </MDBox>
        <Stack direction="row" spacing={6}>
          <Link href="/">
            <FacebookIcon color="white" />{" "}
          </Link>

          <Link href="/">
            <GitHubIcon color="white" />
          </Link>

          <Link href="/">
            <GoogleIcon color="white" />
          </Link>
        </Stack>
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
