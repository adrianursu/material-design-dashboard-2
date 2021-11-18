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

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the LayoutContainer
import styles from "examples/LayoutContainers/DashboardLayout/styles";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function LayoutContainer({ children }) {
  const [controller, dispatch] = useMaterialDesignController();
  const { miniSidenav, direction } = controller;
  const { pathname } = useLocation();
  const classes = styles({ miniSidenav, direction });

  useEffect(() => {
    dispatch({ type: "LAYOUT", value: "dashboard" });
  }, [pathname]);

  return <MDBox customClass={classes.layoutContainer}>{children}</MDBox>;
}

// Typechecking props for the LayoutContainer
LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContainer;
