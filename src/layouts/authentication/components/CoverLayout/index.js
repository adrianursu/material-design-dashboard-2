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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Custom styles for the Baise
import styles from "layouts/authentication/components/CoverLayout/styles";

// Material Design Dashboard 2 React page layout routes
import routes from "routes";

// Authentication layout components
import Footer from "../../../../examples/Footer/index";

function CoverLayout({ children, top, image }) {
  const classes = styles({ image });

  return (
    <PageLayout className={classes.coverLayout_image}>
      <DefaultNavbar
        routes={routes}
        signIn
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/soft-ui-dashboard-material-ui",
          label: "free download",
          color: "dark",
        }}
      />
      <MDBox mt={top} display="flex" alignItems="center" justifyContent="center" minHeight="92vh">
        <MDBox p={3} minWidth="27.5rem">
          {children}
        </MDBox>
      </MDBox>
      <MDBox mt="auto">
        <Container>
          <Footer />
        </Container>
      </MDBox>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  top: 0,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  top: PropTypes.number,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
