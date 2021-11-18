/**
=========================================================
* Material Design Dashboard 2 - v2.0.0
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
import Grid from "@mui/material/Grid";

// Material Design Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Material Design Dashboard 2 page layout routes
import routes from "routes";

// Images
import image from "assets/images/illustrations/illustration-signup.jpg";

function IllustrationLayout({ header, title, description, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-material-ui",
          label: "free download",
        }}
      />
      <Grid container>
        <Grid item xs={12} lg={6} pl={1.5}>
          <MDBox
            display={{ xs: "none", lg: "flex" }}
            alignItems="center"
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={2}
            px={12}
            customClass="overflow-hidden"
          >
            <MDBox
              component="img"
              src={image}
              alt="sign-up-image"
              position="absolute"
              width="100%"
              height="100%"
              left={0}
              style={{ backgroundSize: "cover" }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={5} xl={3} className="mx-auto">
          <MDBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <MDBox p={3}>
              {!header ? (
                <>
                  <MDBox mb={1}>
                    <MDTypography variant="h4" fontWeight="bold">
                      {title}
                    </MDTypography>
                  </MDBox>
                  <MDTypography variant="body2" fontWeight="light" textColor="text">
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
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default IllustrationLayout;
