import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </BrowserRouter>
    </Fragment>
  );
};

export default Layout;
