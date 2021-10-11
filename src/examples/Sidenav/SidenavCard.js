/**
=========================================================
* Material Design 2 Dashboard PRO React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Material Design 2 Dashboard PRO React-UI components
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the SidenavCard
import styles from "examples/Sidenav/styles/sidenavCard";

// Material Design 2 Dashboard PRO React-UI context
import { useMaterialDesignController } from "context";

function SidenavCard() {
  const [controller] = useMaterialDesignController();
  const { miniSidenav, sidenavColor } = controller;
  const classes = styles({ miniSidenav, sidenavColor });

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card_content}>
        <MDBox customClass={classes.card_iconBox}>
          <Icon className={classes.card_icon} fontSize="default">
            star
          </Icon>
        </MDBox>
        <MDBox>
          <MDTypography variant="h6" textColor="white">
            Need help?
          </MDTypography>
          <MDBox mb={1.5} mt={-1}>
            <MDTypography variant="caption" textColor="white" fontWeight="medium">
              Please check our docs
            </MDTypography>
          </MDBox>
          <MDButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/Material-ui-dashboard"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="default"
            fullWidth
          >
            documentation
          </MDButton>
        </MDBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
