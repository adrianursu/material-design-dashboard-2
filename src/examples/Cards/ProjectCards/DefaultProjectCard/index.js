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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

// Custom styles for the DefaultProjectCard
import styles from "examples/Cards/ProjectCards/DefaultProjectCard/styles";

function DefaultProjectCard({ image, label, title, description, action, authors }) {
  const classes = styles();

  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <MDAvatar src={media} alt={name} size="xs" customClass={classes.projectCard_avatar} />
    </Tooltip>
  ));

  return (
    <Card className={classes.projectCard} style={{ boxShadow: !darkMode && "none" }}>
      <MDBox customClass={classes.projectCard_imageContainer}>
        <CardMedia
          src={image}
          component="img"
          title={title}
          className={classes.projectCard_image}
        />
      </MDBox>
      <MDBox pt={3} px={0.5}>
        <MDBox mb={1}>
          <MDTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.6 : 1}
          >
            {label}
          </MDTypography>
        </MDBox>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
              textColor={darkMode ? "white" : "dark"}
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
              textColor={darkMode ? "white" : "dark"}
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography
            variant="button"
            fontWeight="light"
            textColor={darkMode ? "white" : "text"}
            opacity={darkMode ? 0.6 : 1}
          >
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </MDButton>
          ) : (
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display="flex">{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
