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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function ProfilesList({ title, profiles }) {
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <MDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt="something here" variant="rounded" boxShadow="regular" />
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="medium" textColor={darkMode ? "white" : "dark"}>
          {name}
        </MDTypography>
        <MDTypography
          variant="caption"
          textColor={darkMode ? "white" : "text"}
          opacity={darkMode ? 0.6 : 1}
        >
          {description}
        </MDTypography>
      </MDBox>
      <MDBox ml="auto">
        {action.type === "internal" ? (
          <MDButton component={Link} to={action.route} variant="text" buttonColor="primary">
            {action.label}
          </MDButton>
        ) : (
          <MDButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            buttonColor={action.color}
          >
            {action.label}
          </MDButton>
        )}
      </MDBox>
    </MDBox>
  ));

  return (
    <Card className="h-100" style={{ boxShadow: !darkMode && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
          textColor={darkMode ? "white" : "dark"}
        >
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
