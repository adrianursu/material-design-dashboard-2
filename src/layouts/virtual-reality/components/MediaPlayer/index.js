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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom styles for the MediaPlayer
import styles from "layouts/virtual-reality/components/MediaPlayer/styles";

function MediaPlayer() {
  const classes = styles();

  return (
    <Card className={classes.mediaPlayer}>
      <MDBox p={3} position="relative" lineHeight={0}>
        <MDTypography variant="h5" textColor="white" fontWeight="medium">
          Night Jazz
        </MDTypography>
        <MDTypography variant="button" textColor="white" fontWeight="regular">
          Gary Coleman
        </MDTypography>
        <MDBox display="flex" mt={6} pt={1}>
          <MDBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <MDButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">skip_previous</Icon>
              </MDButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <MDButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">play_arrow</Icon>
              </MDButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <MDButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">skip_next</Icon>
              </MDButton>
            </Tooltip>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default MediaPlayer;
