/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Design Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Material Design Dashboard 2 React routes
import routes from "routes";

// Custom styles for the BaseLayout
import styles from "layouts/virtual-reality/components/BaseLayout/styles";

function BaseLayout({ children }) {
  const [controller, dispatch] = useMaterialDesignController();
  const { miniSidenav } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const classes = styles();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      dispatch({ type: "MINI_SIDENAV", value: false });
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      dispatch({ type: "MINI_SIDENAV", value: true });
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    dispatch({ type: "LAYOUT", value: "vr" });
    dispatch({ type: "TRANSPARENT_SIDENAV", value: false });
  }, [pathname]);

  return (
    <MDBox customClass={classes.baseLayout}>
      <MDBox mt={3} mx={3}>
        <DashboardNavbar />
      </MDBox>
      <MDBox customClass={classes.baseLayout_background}>
        <MDBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </MDBox>
        <MDBox customClass={classes.baseLayout_content}>
          <MDBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </MDBox>
          <DashboardLayout>{children}</DashboardLayout>
        </MDBox>
      </MDBox>
      <MDBox pb={2}>
        <Footer />
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
