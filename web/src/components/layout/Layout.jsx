import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

// import classes from "./Layout.module.css";
import AppBar from "../appbar/AppBar";

const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppBar />
        <main className="m-12 w-11/12">{props.children}</main>
      </BrowserRouter>
    </Fragment>
  );
};
// main -> margin:0, width:100% "m-0 w-full"
export default Layout;
