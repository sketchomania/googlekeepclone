import { Link } from "react-router-dom";

import { ReactComponent as Menu } from "../../icons/menu_black_24dp.svg";
import { ReactComponent as Light } from "../../icons/light_mode_black_24dp.svg";
import { ReactComponent as Dark } from "../../icons/dark_mode_black_24dp.svg";
import { ReactComponent as View } from "../../icons/view_agenda_black_24dp.svg";
import { ReactComponent as Setting } from "../../icons/settings_black_24dp.svg";
import { ReactComponent as Account } from "../../icons/account_circle_black_24dp.svg";
import classes from "./AppBar.module.css";
import SearchBar from "./SearchBar";

const AppBar = () => {
  const isLoggedIn = true;
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  return (
    <header className="max-w-full h-16 flex py-0 px-1 items-center justify-between bg-green-300">
      <Menu className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />{" "}
      {/* on click show label list  */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.logo}>
          {logo}
          <h3>Keep</h3>
        </div>
      </Link>
      {/* create a component for lable menu */}
      <SearchBar />
      <nav className={classes.nav}>
        <ul>
          <li>
            <Light className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
          </li>
          <li>
            <Dark className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
          </li>
          <li>
            <View className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
          </li>
          <li>
            <Setting className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
          </li>
          <li>
            <Account className="stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full" />
          </li>
        </ul>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
