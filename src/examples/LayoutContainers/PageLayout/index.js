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

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";

// Material Design 2 Dashboard PRO React context
import { useMaterialDesignController } from "context";

function PageLayout({ background, children }) {
  const [, dispatch] = useMaterialDesignController();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({ type: "LAYOUT", value: "page" });
  }, [pathname]);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      backgroundColor={background}
      customClass="overflow-x-hidden"
    >
      {children}
    </MDBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
