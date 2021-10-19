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
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Design 2 Dashboard React components
import MDBox from "components/MDBox";

// Material Design 2 Dashboard Materail-UI example components
import Table from "examples/Table";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Data
import data from "layouts/dashboard/components/Projects/data";

import boxShadows from "assets/theme/base/boxShadows";

function Projects({ icon, backgroundColor }) {
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
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card className="overflow-visible">
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <MDBox>
          <MDBox
            backgroundColor={backgroundColor === "white" ? icon.color : "white"}
            width="4rem"
            height="4rem"
            borderRadius="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={backgroundColor === "white" ? "white" : "dark"}
            style={{ boxShadow: boxShadows.coloredShadows.secondary }}
            backgroundGradient
            mt={-5.5}
          >
            <Icon fontSize="medium" color="inherit">
              {icon.component}
            </Icon>
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

Projects.defaultProps = {
  backgroundColor: "white",
};

Projects.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
};

export default Projects;
