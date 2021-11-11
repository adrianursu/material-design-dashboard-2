/**
=========================================================
* Material Design 2 Dashboard React
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Design 2 Dashboard React components
import MDBox from "components/MDBox";

// Material Design 2 Dashboard Material-UI example components
import Table from "examples/Tables/Table";

// Custom styles for the Projects
import styles from "layouts/rtl/components/Projects/styles";

// Data
import data from "layouts/rtl/components/Projects/data";

import MDTypography from "components/MDTypography";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const classes = styles();

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>عمل</MenuItem>
      <MenuItem onClick={closeMenu}>عمل آخر</MenuItem>
      <MenuItem onClick={closeMenu}>شيء آخر هنا</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            المشاريع
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon className="font-bold text-info">done</Icon>
            <MDTypography variant="button" fontWeight="regular" textColor="text">
              &nbsp;<strong>30 انتهى</strong>هذا الشهر
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon className="cursor-pointer font-bold" fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox customClass={classes.projects_table}>
        <Table columns={columns} rows={rows} />
      </MDBox>
    </Card>
  );
}

export default Projects;
