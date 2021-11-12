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
import Switch from "@mui/material/Switch";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDBox mb={1} ml={0.5}>
            <MDTypography component="label" variant="caption" fontWeight="bold">
              Email
            </MDTypography>
          </MDBox>
          <MDInput type="email" placeholder="Email" />
        </MDBox>
        <MDBox mb={2}>
          <MDBox mb={1} ml={0.5}>
            <MDTypography component="label" variant="caption" fontWeight="bold">
              Password
            </MDTypography>
          </MDBox>
          <MDInput type="password" placeholder="Password" />
        </MDBox>
        <MDBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MDTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            customClass="cursor-pointer user-select-none"
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" buttonColor="info" fullWidth>
            sign in
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" textColor="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              textColor="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </CoverLayout>
  );
}

export default SignIn;
