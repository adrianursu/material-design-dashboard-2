/**
=========================================================
* Material Design Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Design Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Footer() {
  return (
    <MDBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <MDBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MDTypography component="a" href="#" variant="body2" textColor="secondary">
                Company
              </MDTypography>
            </MDBox>
            <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MDTypography component="a" href="#" variant="body2" textColor="secondary">
                About Us
              </MDTypography>
            </MDBox>
            <MDBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <MDTypography component="a" href="#" variant="body2" textColor="secondary">
                Team
              </MDTypography>
            </MDBox>
            <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MDTypography component="a" href="#" variant="body2" textColor="secondary">
                Product
              </MDTypography>
            </MDBox>
            <MDBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MDTypography component="a" href="#" variant="body2" textColor="secondary">
                Blog
              </MDTypography>
            </MDBox>
            <MDTypography component="a" href="#" variant="body2" textColor="secondary">
              Pricing
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <MDBox display="flex" justifyContent="center" mt={1} mb={3}>
            <MDBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </MDBox>
            <MDBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </MDBox>
            <MDBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </MDBox>
            <MDBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </MDBox>
            <MDBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </MDBox>
          </MDBox>
        </Grid>
        <Grid item xs={12} lg={8} className="text-center">
          <MDTypography variant="body2" textColor="secondary">
            Copyright &copy; 2021 Soft by Creative Tim.
          </MDTypography>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Footer;
