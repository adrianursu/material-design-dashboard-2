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

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Data
import data from "layouts/dashboard/components/Projects/data";

import MDTypography from "components/MDTypography";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const classes = styles();
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

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
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom textColor={darkMode ? "white" : "text"}>
            Projects
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography
              display="inline"
              variant="body2"
              verticalAlign="middle"
              textColor={darkMode ? "white" : "text"}
              opacity={darkMode ? 0.7 : 1}
            >
              <Icon className="font-bold text-info">done</Icon>
            </MDTypography>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textColor={darkMode ? "white" : "text"}
              opacity={darkMode ? 0.7 : 1}
            >
              &nbsp;<strong>30 done</strong> this month
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <MDTypography
            variant="body2"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.7 : 1}
          >
            <Icon className="cursor-pointer font-bold" fontSize="medium" onClick={openMenu}>
              more_vert
            </Icon>
          </MDTypography>
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
