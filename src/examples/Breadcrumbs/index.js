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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Breadcrumbs({ text, title, route }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const routes = route.slice(0, -1);

  return (
    <MDBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs>
        <Link to="/">
          <MDTypography
            component="span"
            variant="button"
            textColor={darkMode ? "white" : "dark"}
            opacity={darkMode ? 0.6 : 0.5}
            customClass="line-height-0"
            fontWeight="regular"
          >
            {text}
          </MDTypography>
        </Link>
        {routes.map((el) => (
          <Link to={`/${el}`} key={el} className="decoration-none">
            <MDTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              textColor={darkMode ? "white" : "dark"}
              opacity={darkMode ? 1 : 0.5}
              customClass="line-height-0"
            >
              {el}
            </MDTypography>
          </Link>
        ))}
        <MDTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          textColor={darkMode ? "white" : "dark"}
          customClass="line-height-0"
        >
          {title.replace("-", " ")}
        </MDTypography>
      </MuiBreadcrumbs>
      <MDTypography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        textColor={darkMode ? "white" : "dark"}
        noWrap
      >
        {title.replace("-", " ")}
      </MDTypography>
    </MDBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  text: "Pages",
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  text: PropTypes.string,
};

export default Breadcrumbs;
