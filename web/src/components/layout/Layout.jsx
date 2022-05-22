import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

// import classes from "./Layout.module.css";
import AppBar from "../appbar/AppBar";

const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppBar
          toggleTheme={props.toggleTheme}
          darkMode={props.darkMode}
          toggleLabelMenu={props.toggleLabelMenu}
          setIsLoggedIn={props.setIsLoggedIn}
          isLoggedIn={props.isLoggedIn}
        />
        <main className="bg-white dark:bg-gray-700 m-12 w-11/12">
          {props.children}
        </main>
      </BrowserRouter>
    </Fragment>
  );
};

export default Layout;
