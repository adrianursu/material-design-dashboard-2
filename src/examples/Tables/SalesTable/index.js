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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Material Design Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

// Material Design Dashboard 2 React example components
import SalesTableCell from "examples/Tables/SalesTable/SalesTableCell";

import boxShadows from "assets/theme/base/boxShadows";

function SalesTable({ title, rows, backgroundColor, icon }) {
  const renderTableCells = rows.map((row, key) => {
    const tableRows = [];
    const rowKey = `row-${key}`;

    Object.entries(row).map(([cellTitle, cellContent]) =>
      Array.isArray(cellContent)
        ? tableRows.push(
            <SalesTableCell
              key={cellContent[1]}
              title={cellTitle}
              content={cellContent[1]}
              image={cellContent[0]}
              noBorder={key === rows.length - 1}
            />
          )
        : tableRows.push(
            <SalesTableCell
              key={cellContent}
              title={cellTitle}
              content={cellContent}
              noBorder={key === rows.length - 1}
            />
          )
    );

    return <TableRow key={rowKey}>{tableRows}</TableRow>;
  });

  return (
    <Card className="h-100 overflow-visible">
      <Table>
        <TableHead>
          <MDBox display="flex">
            <MDBox
              backgroundColor={backgroundColor === "white" ? icon.color : "white"}
              width="4rem"
              height="4rem"
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color={backgroundColor === "white" ? "white" : "dark"}
              style={{ boxShadow: boxShadows.coloredShadows.success }}
              backgroundGradient
              mt={-3.5}
            >
              <Icon fontSize="medium" color="inherit">
                {icon.component}
              </Icon>
            </MDBox>
            <MDBox component="tr" width="max-content" display="block" mb={3.5} px={2}>
              <MDTypography variant="h6" component="td">
                {title}
              </MDTypography>
            </MDBox>
          </MDBox>
        </TableHead>
        <MDBox py={3} pt={0}>
          <TableBody>{useMemo(() => renderTableCells, [rows])}</TableBody>
        </MDBox>
      </Table>
    </Card>
  );
}

// Setting default values for the props of SalesTable
SalesTable.defaultProps = {
  backgroundColor: "white",
  rows: [{}],
};

// Typechecking props for the SalesTable
SalesTable.propTypes = {
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
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
};

export default SalesTable;
