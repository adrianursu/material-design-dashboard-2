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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <MDBox p={3} mb={1} textAlign="center">
          <MDTypography variant="h5" fontWeight="medium">
            Register with
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <Socials />
        </MDBox>
        <Separator />
        <MDBox pt={2} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput placeholder="Name" />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" placeholder="Email" />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" placeholder="Password" />
            </MDBox>
            <MDBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" buttonColor="dark" fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} textAlign="center">
              <MDTypography variant="button" textColor="text" fontWeight="regular">
                Already have an account?&nbsp;
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  textColor="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
