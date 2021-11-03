/**
=========================================================
* Material Design Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableCell from "@mui/material/TableCell";

// Material Design Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" className={noBorder ? "border-0" : "default"}>
        <MDBox display="flex" alignItems="center" width="max-content" px={1}>
          <MDBox
            component="img"
            src={image}
            alt={content}
            variant="rounded"
            width="1.5rem"
            height="auto"
          />{" "}
          <MDBox display="flex" flexDirection="column" ml={3}>
            <MDTypography
              variant="caption"
              textColor="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" textTransform="capitalize">
              {content}
            </MDTypography>
          </MDBox>
        </MDBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" className={noBorder ? "border-0" : "default"}>
        <MDBox display="flex" flexDirection="column">
          <MDTypography
            variant="caption"
            textColor="text"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}:
          </MDTypography>
          <MDTypography variant="button" fontWeight="regular" textTransform="capitalize">
            {content}
          </MDTypography>
        </MDBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
