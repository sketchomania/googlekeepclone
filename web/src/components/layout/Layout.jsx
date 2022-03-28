import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

// import classes from "./Layout.module.css";
import AppBar from "../appbar/AppBar";
import { useState } from "react";

const Layout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Fragment>
      <BrowserRouter>
        {/* <div className="bg-white dark:bg-gray-700"> */}
        <AppBar
          toggleTheme={props.toggleTheme}
          darkMode={props.darkMode}
          toggleLabelMenu={props.toggleLabelMenu}
          loginHandler
          isLoggedIn
        />
        <main className="bg-white dark:bg-gray-700 m-12 w-11/12">
          {props.children}
        </main>
        {/* </div> */}
      </BrowserRouter>
    </Fragment>
  );
};

// const mainStyle = "bg-white dark:bg-gray-700 m-12 w-11/12";
// main -> margin:0, width:100% "m-0 w-full"
export default Layout;
