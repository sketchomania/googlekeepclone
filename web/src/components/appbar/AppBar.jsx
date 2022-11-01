import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/actions/authActions";
// import { ThemeContext, themes } from "../../context/ThemeContext";

import { ReactComponent as Menu } from "../../icons/menu_black_24dp.svg";
import { ReactComponent as Light } from "../../icons/light_mode_black_24dp.svg";
import { ReactComponent as Dark } from "../../icons/dark_mode_black_24dp.svg";
import { ReactComponent as View } from "../../icons/view_agenda_black_24dp.svg";
import { ReactComponent as Grid } from "../../icons/grid_view_black_24dp.svg";
import { ReactComponent as Setting } from "../../icons/settings_black_24dp.svg";
import { ReactComponent as Account } from "../../icons/account_circle_black_24dp.svg";
import { ReactComponent as Login } from "../../icons/login_black_24dp.svg";
import { ReactComponent as Logout } from "../../icons/logout_black_24dp.svg";
// import classes from "./AppBar.module.css";
import SearchBar from "./SearchBar";

const AppBar = ({
  setIsLoggedIn,
  isLoggedIn,
  darkMode,
  toggleTheme,
  toggleLabelMenu,
}) => {
  const auth = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const logo = (
    <img
      className="h-12"
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const logoutHandler = () => {
    dispatch(logout());
    // <Redirect to="/auth" />;

    // not needed setIsLoggedIn(false);
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="max-w-full h-16 flex py-0 px-1 items-center justify-between bg-green-300">
        <div className={`${container}`}>
          <Menu title="Menu" className={`${sty1}`} onClick={toggleLabelMenu} />{" "}
        </div>
        {/* on click show label list  */}
        <Link
          to="/"
          title="Google keep clone"
          style={{ textDecoration: "none" }}
        >
          <div className={`${container}`}>
            {logo}
            <h3 className="font-medium text-xl">Keep</h3>
          </div>
        </Link>
        {/* create a component for lable menu */}
        <SearchBar />
        <nav className={`${container}`}>
          <ul className={`${ulSty}`}>
            <li title="Dev">
              <Link to="/dev">Dev</Link>
            </li>
          </ul>
          <ul className={`${ulSty}`}>
            <li>
              <button title="theme" onClick={toggleTheme}>
                {darkMode ? (
                  <Light className={`${sty1}`} />
                ) : (
                  <Dark className={`${sty1}`} />
                )}
              </button>
            </li>
          </ul>
          <ul className={`${ulSty}`}>
            <li>
              <button title="view" onClick={toggleTheme}>
                {darkMode ? (
                  <View className={`${sty1}`} />
                ) : (
                  <Grid className={`${sty1}`} />
                )}
              </button>
            </li>
            <li title="Setting">
              <Setting className={`${sty1}`} />
            </li>
            <li>
              <Account className={`${sty1}`} />
            </li>
          </ul>
          <ul className={`${ulSty}`}>
            <li>
              {/* {!isLoggedIn ? ( */}
              {!auth.token ? (
                <>
                  <button title="Login" onClick={loginHandler}>
                    <Link to="/auth">
                      <Login className={`${sty1}`} />
                    </Link>
                  </button>
                </>
              ) : (
                <button title="Logout" onClick={logoutHandler}>
                  <Logout className={`${sty1}`} />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

const ulSty = "list-none flex m-0 p-0";
const container = "text-base text-white flex items-center justify-center m-2";
const sty1 = "stroke-2 p-1.5 h-11 w-11 hover:bg-gray-400 hover:rounded-full";

export default AppBar;
