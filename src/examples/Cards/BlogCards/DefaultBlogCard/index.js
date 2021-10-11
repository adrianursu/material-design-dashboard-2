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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MDLink from "@mui/material/Link";

// Material Design 2 Dashboard PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

function DefaultBlogCard({ image, category, title, description, author, action }) {
  return (
    <Card>
      <MDBox mt={2} mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <MDBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MDLink href={action.route} target="_blank" rel="noreferrer">
            <MDBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MDLink>
        )}
      </MDBox>
      <MDBox pb={3} px={3}>
        {category && (
          <MDTypography
            variant="caption"
            textColor={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
          >
            {category.label}
          </MDTypography>
        )}
        <MDBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <MDTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                customClass="link"
              >
                {title}
              </MDTypography>
            </Link>
          ) : (
            <MDLink href={action.route} target="_blank" rel="noreferrer">
              <MDTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                customClass="link"
              >
                {title}
              </MDTypography>
            </MDLink>
          )}
        </MDBox>
        <MDTypography variant="body2" component="p" textColor="text">
          {description}
        </MDTypography>
        {author && (
          <MDBox display="flex" alignItems="center" mt={3}>
            <MDAvatar variant="rounded" src={author.image} alt={author.name} boxShadow="regular" />
            <MDBox pl={2} lineHeight={0}>
              <MDTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </MDTypography>
              <MDTypography variant="caption" textColor="text">
                {author.date}
              </MDTypography>
            </MDBox>
          </MDBox>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
