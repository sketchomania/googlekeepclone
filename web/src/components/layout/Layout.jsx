import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import classes from "./Layout.module.css";
import AppBar from "../appbar/AppBar";

const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppBar />
        <main className={classes.main}>{props.children}</main>
      </BrowserRouter>
    </Fragment>
  );
};

export default Layout;
