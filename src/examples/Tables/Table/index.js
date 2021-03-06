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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Table as MDTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Material Design Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Material Design Dashboard 2 React context
import { useMaterialDesignController } from "context";

function Table({ columns, rows }) {
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;
  const [controller] = useMaterialDesignController();
  const { darkMode } = controller;

  const renderColumns = columns.map(({ name, align }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <MDBox
        key={name}
        component="th"
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color={darkMode ? "white" : "text"}
        opacity={0.8}
        borderBottom={`${borderWidth[1]} solid ${light.main}`}
      >
        {name.toUpperCase()}
      </MDBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <MDBox key={row[name][1]} component="td" p={1}>
            <MDBox display="flex" alignItems="center" py={0.5} px={1}>
              <MDBox mr={2}>
                <MDAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </MDBox>
              <MDTypography
                variant="button"
                fontWeight="medium"
                customClass="w-max"
                textColor={darkMode ? "white" : "text"}
              >
                {row[name][1]}
              </MDTypography>
            </MDBox>
          </MDBox>
        );
      } else {
        template = (
          <MDBox key={row[name]} component="td" p={1} textAlign={align}>
            <MDTypography
              variant="button"
              fontWeight="regular"
              customClass="d-inline-block w-max"
              textColor={darkMode ? "white" : "text"}
            >
              {row[name]}
            </MDTypography>
          </MDBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MDTable>
          <MDBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </MDBox>
          <TableBody>{renderRows}</TableBody>
        </MDTable>
      </TableContainer>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
