/**
=========================================================
* Material Design Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Material Design Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

function Illustration() {
  const [agreement, setAgreemnet] = useState(true);

  const handleSetAgremment = () => setAgreemnet(!agreement);

  return (
    <IllustrationLayout title="Sign Up" description="Enter your email and password to register">
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput label="Name" size="large" />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="email" label="Email" size="large" />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="password" label="Password" size="large" />
        </MDBox>
        <MDBox display="flex" alignItems="center">
          <Checkbox checked={agreement} onChange={handleSetAgremment} color="primary" />
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
          <MDButton variant="gradient" buttonColor="primary" size="large" fullWidth>
            sign up
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" textColor="text" fontWeight="light">
            Already have an account?&nbsp;
            <MDTypography
              component={Link}
              to="/authentication/sign-in/illustration"
              variant="button"
              textColor="primary"
              fontWeight="bold"
              textGradient
            >
              Sign in
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </IllustrationLayout>
  );
}

export default Illustration;
