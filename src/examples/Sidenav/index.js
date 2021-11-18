/**
=========================================================
* Material Design Dashboard 2 React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Design Dashboard 2 React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import styles from "examples/Sidenav/styles/sidenav";

// Images
import logoDark from "assets/images/logo-ct.png";
import logoWhite from "assets/images/logo-ct-white.png";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Sidenav({ routes, ...rest }) {
  const [controller, dispatch] = useMaterialDesignController();
  const { miniSidenav, transparentSidenav, darkSidenav } = controller;
  const classes = styles({ miniSidenav, transparentSidenav, darkSidenav });
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSizenav = () => dispatch({ type: "MINI_SIDENAV", value: true });

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      dispatch({
        type: "MINI_SIDENAV",
        value: window.innerWidth < 1200,
      });
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          className={classes.sidenav_navlink}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key} className={classes.sidenav_navlink}>
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <MDTypography
          key={key}
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          customClass={classes.sidenav_title}
          textColor={darkSidenav ? "white" : "dark"}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }

    return returnValue;
  });

  return (
    <Drawer
      {...rest}
      variant="permanent"
      classes={{
        paper: clsx(classes.sidenav, {
          [classes.sidenav_open]: !miniSidenav,
          [classes.sidenav_close]: miniSidenav,
        }),
      }}
    >
      <MDBox customClass={classes.sidenav_header}>
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          customClass="cursor-pointer"
          onClick={closeSizenav}
        >
          <MDTypography variant="h6" textColor="secondary">
            <Icon className="font-bold">close</Icon>
          </MDTypography>
        </MDBox>
        <NavLink to="/">
          <MDBox
            component="img"
            src={darkSidenav ? logoWhite : logoDark}
            alt="Material UI Logo"
            customClass={classes.sidenav_logo}
          />
          <MDBox customClass={classes.sidenav_logoLabel}>
            <MDTypography
              component="h6"
              variant="button"
              fontWeight="medium"
              textColor={darkSidenav ? "white" : "dark"}
              style={{ marginLeft: "4px" }}
            >
              Material Dashboard 2
            </MDTypography>
          </MDBox>
        </NavLink>
      </MDBox>
      <Divider light style={{ margin: "0 0 8px 0" }} />
      <List>{renderRoutes}</List>
      <MDBox customClass={classes.sidenav_footer}>
        <MDBox mt={2}>
          <MDButton
            component="a"
            href="https://creative-tim.com/product/soft-ui-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            buttonColor="primary"
            fullWidth
          >
            upgrade to pro
          </MDButton>
        </MDBox>
      </MDBox>
    </Drawer>
  );
}

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
