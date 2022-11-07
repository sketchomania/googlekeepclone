import { Fragment } from "react";
// import { BrowserRouter } from "react-router-dom";

import AppBar from "../appbar/AppBar";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <BrowserRouter> */}
      <AppBar
        toggleTheme={props.toggleTheme}
        darkMode={props.darkMode}
        toggleLabelMenu={props.toggleLabelMenu}
      />
      <main className="bg-white dark:bg-gray-700 w-full">{props.children}</main>
      {/* </BrowserRouter> */}
    </Fragment>
  );
};

export default Layout;
