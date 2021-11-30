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

// Material Design Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function OrdersOverview() {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;
  return (
    <Card className="h-100">
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
          نظرة عامة على الطلبات
        </MDTypography>
        <MDBox mt={1} mb={3.2}>
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
              fontWeight="medium"
            >
              24%
            </MDTypography>{" "}
            هذا الشهر
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, تغييرات في التصميم"
          dateTime="22 ديسمبر 7:20 مساءً"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="طلب جديد # 1832412"
          dateTime="21 ديسمبر 11 م"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="مدفوعات الخادم لشهر أبريل"
          dateTime="21 ديسمبر 9:34 مساءً"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="تمت إضافة بطاقة جديدة للأمر رقم 4395133"
          dateTime="20 ديسمبر 2:20 صباحًا"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="فتح الحزم من أجل التطوير"
          dateTime="18 ديسمبر ، 4:54 صباحًا"
        />
        <TimelineItem color="dark" icon="paid" title="طلب جديد # 9583120" dateTime="17 ديسمبر" />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
