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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Icon from "@mui/material/Icon";
import MDLink from "@mui/material/Link";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the TransparentBlogCard
import styles from "examples/Cards/BlogCards/TransparentBlogCard/styles";

function TransparentBlogCard({ image, title, description, action }) {
  const classes = styles();

  return (
    <Card className={classes.card}>
      {action.type === "internal" ? (
        <Link to={action.route}>
          <CardMedia src={image} component="img" title={title} className={classes.card_image} />
        </Link>
      ) : (
        <MDLink href={action.route} target="_blank" rel="noreferrer">
          <CardMedia src={image} component="img" title={title} className={classes.card_image} />
        </MDLink>
      )}
      <MDBox py={3}>
        {action.type === "internal" ? (
          <Link to={action.route} className={classes.card_action}>
            <MDTypography variant="h5" gutterBottom>
              {title}
            </MDTypography>
          </Link>
        ) : (
          <MDLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            className={classes.card_action}
          >
            <MDTypography variant="h5" gutterBottom>
              {title}
            </MDTypography>
          </MDLink>
        )}
        <MDBox mb={2}>
          <MDTypography variant="body2" component="p" textColor="text">
            {description}
          </MDTypography>
        </MDBox>
        {action.type === "internal" ? (
          <Link to={action.route} className={classes.card_action}>
            <MDTypography
              variant="body2"
              textColor={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon className="font-bold">arrow_forward</Icon>
            </MDTypography>
          </Link>
        ) : (
          <MDLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            className={classes.card_action}
          >
            <MDTypography
              variant="body2"
              textColor={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon className="font-bold">arrow_forward</Icon>
            </MDTypography>
          </MDLink>
        )}
      </MDBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
