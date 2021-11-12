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
import Grid from "@mui/material/Grid";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Custom styles for the BaiseLayout
import styles from "layouts/authentication/components/BasicLayout/styles";

// Material Design Dashboard 2 React page layout routes
import routes from "routes";

function BasicLayout({ title, description, image, children }) {
  const classes = styles({ image });

  return (
    <PageLayout>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/soft-ui-dashboard-material-ui",
          label: "free download",
        }}
        transparent
        light
      />
      <MDBox customClass={classes.basicLayout}>
        <Grid container spacing={3} justifyContent="center" className="text-center">
          <Grid item xs={10} lg={4}>
            <MDBox mt={6} mb={1}>
              <MDTypography variant="h1" textColor="white" fontWeight="bold">
                {title}
              </MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDTypography variant="body2" textColor="white" fontWeight="regular">
                {description}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
