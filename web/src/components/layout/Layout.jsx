import { Fragment } from "react";

import AppBar from "../appbar/AppBar";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="bg-white dark:bg-zinc-800 relative">
        <AppBar
          toggleTheme={props.toggleTheme}
          darkMode={props.darkMode}
          toggleLabelMenu={props.toggleLabelMenu}
        />
        <main >
          {props.children}
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
