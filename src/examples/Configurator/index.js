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

import { useState, useEffect } from "react";

// react-github-btn
import GitHubButton from "react-github-btn";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom styles for the Configurator
import styles from "examples/Configurator/styles";

// Material Design 2 Dashboard PRO React context
import { useMaterialDesignController } from "context";

function Configurator() {
  const [controller, dispatch] = useMaterialDesignController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const classes = styles({ sidenavColor });
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => {
    dispatch({ type: "OPEN_CONFIGURATOR", value: false });
  };

  const handleTransparentSidenav = () => {
    dispatch({ type: "TRANSPARENT_SIDENAV", value: true });
  };

  const handleWhiteSidenav = () => {
    dispatch({ type: "TRANSPARENT_SIDENAV", value: false });
  };

  const handleFixedNavbar = () => {
    dispatch({ type: "FIXED_NAVBAR", value: !fixedNavbar });
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.configurator, {
          [classes.configurator_open]: openConfigurator,
          [classes.configurator_close]: !openConfigurator,
        }),
      }}
    >
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5">Material UI Configurator</MDTypography>
          <MDTypography variant="body2" textColor="text">
            See our dashboard options.
          </MDTypography>
        </MDBox>

        <Icon
          className={`font-bold ${classes.configurator_close_icon}`}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MDBox>

      <Divider />

      <MDBox pt={1.25} pb={3} px={3}>
        <MDBox>
          <MDTypography variant="h6">Sidenav Colors</MDTypography>

          <MDBox my={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                className={clsx(classes.configurator_sidenav_color, classes[color], {
                  [classes.active_color]: sidenavColor === color,
                })}
                onClick={() => dispatch({ type: "SIDENAV_COLOR", value: color })}
              />
            ))}
          </MDBox>
        </MDBox>

        <MDBox mt={3}>
          <MDTypography variant="h6">Sidenav Type</MDTypography>
          <MDTypography variant="button" textColor="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </MDTypography>

          <MDBox customClass={classes.configurator_sidenav_types}>
            <MDButton
              buttonColor="info"
              variant={transparentSidenav ? "gradient" : "outlined"}
              onClick={handleTransparentSidenav}
              disabled={disabled}
              fullWidth
            >
              Transparent
            </MDButton>
            <MDButton
              buttonColor="info"
              variant={transparentSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
            >
              White
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox mt={3} mb={2}>
          <MDTypography variant="h6">Navbar Fixed</MDTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </MDBox>

        <Divider />

        <MDBox mt={3} mb={2}>
          <MDBox mb={2}>
            <MDButton
              component={Link}
              href="https://www.creative-tim.com/product/Material-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              buttonColor="dark"
              variant="gradient"
              fullWidth
            >
              free download
            </MDButton>
          </MDBox>
          <MDButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/Material-ui-dashboard"
            target="_blank"
            rel="noreferrer"
            buttonColor="dark"
            variant="outlined"
            fullWidth
          >
            view documentation
          </MDButton>
        </MDBox>
        <MDBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/Material-ui-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/Material-ui-dashboard-react on GitHub"
          >
            Star
          </GitHubButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDBox mb={0.5}>
            <MDTypography variant="h6">Thank you for sharing!</MDTypography>
          </MDBox>

          <MDBox display="flex" justifyContent="center">
            <MDBox mr={1.5}>
              <MDButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2FMaterial-ui-dashboard-react"
                target="_blank"
                rel="noreferrer"
                buttonColor="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </MDButton>
            </MDBox>
            <MDButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/Material-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              buttonColor="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Drawer>
  );
}

export default Configurator;
