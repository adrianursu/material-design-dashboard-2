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

// Custom styles for the Baise
import styles from "layouts/authentication/components/CoverLayout/styles";

// Material Design Dashboard 2 React page layout routes
import routes from "routes";

function CoverLayout({ color, header, title, description, image, top, children }) {
  const classes = styles({ image });

  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/soft-ui-dashboard-material-ui",
          label: "free download",
          color: "dark",
        }}
      />
      <Grid container justifyContent="center" className={classes.coverLayout}>
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <MDBox mt={top}>
            <MDBox pt={3} px={3}>
              {!header ? (
                <>
                  <MDBox mb={1}>
                    <MDTypography variant="h3" fontWeight="bold" textColor={color} textGradient>
                      {title}
                    </MDTypography>
                  </MDBox>
                  <MDTypography variant="body2" fontWeight="regular" textColor="text">
                    {description}
                  </MDTypography>
                </>
              ) : (
                header
              )}
            </MDBox>
            <MDBox p={3}>{children}</MDBox>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <MDBox
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-12rem", xl: "-16rem" }}
            customClass={classes.coverLayout_imageBox}
          >
            <MDBox customClass={classes.coverLayout_image} />
          </MDBox>
        </Grid>
      </Grid>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
