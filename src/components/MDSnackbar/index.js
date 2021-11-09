/**
=========================================================
* Material Design Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// Material Design Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the MDSnackbar
import styles from "components/MDSnackbar/styles";

function MDSnackbar({ type, icon, title, dateTime, content, close, ...rest }) {
  const classes = styles({ type });
  let titleColor;

  if (type === "info") {
    titleColor = "white";
  } else if (type === "error") {
    titleColor = "error";
  } else {
    titleColor = "dark";
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <MDBox
        backgroundColor={type === "info" ? "info" : "white"}
        minWidth="21.875rem"
        maxWidth="100%"
        boxShadow="regular"
        borderRadius="md"
        backgroundGradient
        p={1}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon className={classes.mdSnackbar_icon} fontSize="small">
              {icon}
            </Icon>
            <MDTypography
              variant="button"
              fontWeight="medium"
              textColor={titleColor}
              textGradient={type === "error"}
            >
              {title}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="caption" textColor={type === "info" ? "white" : "text"}>
              {dateTime}
            </MDTypography>
            <Icon
              className={` font-bold ${classes.mdSnackbar_close}`}
              color="inherit"
              onClick={close}
            >
              close
            </Icon>
          </MDBox>
        </MDBox>
        <Divider className={classes.mdSnackbar_divider} light={type === "info"} />
        <MDBox p={1.5} customClass={classes.mdSnackbar_content}>
          {content}
        </MDBox>
      </MDBox>
    </Snackbar>
  );
}

// Setting default values for the props of MDSnackbar
MDSnackbar.defaultProps = {
  type: "info",
};

// Typechecking props for MDSnackbar
MDSnackbar.propTypes = {
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default MDSnackbar;
