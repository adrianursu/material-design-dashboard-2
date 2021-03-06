/**
=========================================================
* Material Design Dashboard 2 React
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Design Dashboard 2 components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Material Design Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card className="h-100">
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
          Orders overview
        </MDTypography>
        <MDBox mb={2}>
          <MDTypography
            variant="button"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.6 : 1}
            fontWeight="regular"
          >
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon className="font-bold text-success">arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography
              variant="button"
              textColor={darkMode ? "white" : "text"}
              opacity={darkMode ? 0.6 : 1}
              fontWeight="bold"
            >
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox px={2} pt={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem color="dark" icon="paid" title="New order #9583120" dateTime="17 DEC" />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
