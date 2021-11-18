/**
=========================================================
* Material Design Dashboard 2 React 
=========================================================

* Product Page: https://www.creative-tim.com/product/Material-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Materialware.
*/

import { forwardRef, createContext, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Design Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Custom styles for MDPagination
import styles from "components/MDPagination/styles";

// The Pagination main context
const Context = createContext();

const MDPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;
    const classes = styles({ paginationSize, variant, active });

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <MDButton
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            buttonColor={active ? context.color : "secondary"}
            iconOnly
            circular
            customClass={classes.muiPagination}
          >
            {children}
          </MDButton>
        ) : (
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            customClass="no-list-style"
          >
            {children}
          </MDBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of MDPagination
MDPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the MDPagination
MDPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDPagination;
