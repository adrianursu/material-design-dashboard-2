/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Design Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function PlatformSettings() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card style={{ boxShadow: !darkMode && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
          textColor={darkMode ? "white" : "dark"}
        >
          platform settings
        </MDTypography>
      </MDBox>
      <MDBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <MDTypography
          variant="caption"
          fontWeight="bold"
          textColor={darkMode ? "white" : "text"}
          textTransform="uppercase"
        >
          account
        </MDTypography>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              Email me when someone follows me
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              Email me when someone answers on my post
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              Email me when someone mentions me
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox mt={3}>
          <MDTypography
            variant="caption"
            fontWeight="bold"
            textColor={darkMode ? "white" : "text"}
            textTransform="uppercase"
          >
            application
          </MDTypography>
        </MDBox>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              New launches and projects
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              Monthly product updates
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex" py={1} mb={0.25}>
          <MDBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </MDBox>
          <MDBox width="80%" ml={2}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
            >
              Subscribe to newsletter
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
