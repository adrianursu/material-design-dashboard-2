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

import { useState, useEffect } from "react";

import { useMaterialDesignController } from "context";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import FormHeader from "layouts/authentication/components/FormHeader";

// Cover image
import signInImage from "assets/images/sign-in-background.jpg";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [, dispatch] = useMaterialDesignController();
  useEffect(() => {
    dispatch({ type: "DARK_MODE", value: false });
  }, []);
  return (
    <CoverLayout image={signInImage}>
      <Card className="overflow-visible" style={{ boxShadow: "none", marginTop: "3rem" }}>
        <FormHeader />
        <MDBox component="form" role="form" p={3}>
          <MDBox mb={2}>
            <MDInput type="email" label="Email" />
          </MDBox>
          <MDBox mb={2}>
            <MDInput type="password" label="Password" />
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <MDTypography
              variant="button"
              fontWeight="regular"
              onClick={handleSetRememberMe}
              customClass="cursor-pointer user-select-none"
              textColor="secondary"
            >
              &nbsp;&nbsp;Remember me
            </MDTypography>
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" buttonColor="primary" fullWidth>
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
                textColor="primary"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default SignIn;
