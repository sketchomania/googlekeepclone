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
import { ReactComponent as Logout } from "../../icons/logout_black_24dp.svg";
import SearchBar from "./SearchBar";
import styles from "../../constants/Styles";

const AppBar = ({ darkMode, toggleTheme, toggleLabelMenu }) => {
  const auth = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const logo = (
    <img
      className="h-12"
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  const logoutHandler = () => {
    dispatch(logout());
    // <Redirect to="/auth" />;
  };

  const ulSty = "list-none flex m-0 p-0";
  const container = "text-base text-white flex items-center justify-center m-2";

  return (
    <>
      <header className="max-w-full h-16 flex p-1 items-center justify-between fixed top-0 left-0 right-0 bg-inherit shadow-md shadow-gray-300">
        <div className={`${container}`}>
          <Menu
            title="Main menu"
            className={styles.iconStyleBig}
            onClick={toggleLabelMenu}
          />{" "}
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
                  <Light className={styles.iconStyleBig} />
                ) : (
                  <Dark className={styles.iconStyleBig} />
                )}
              </button>
            </li>
          </ul>
          <ul className={`${ulSty}`}>
            <li>
              <button title="view" onClick={toggleTheme}>
                {darkMode ? (
                  <View className={styles.iconStyleBig} />
                ) : (
                  <Grid className={styles.iconStyleBig} />
                )}
              </button>
            </li>
            <li title="Setting">
              <Setting className={styles.iconStyleBig} />
            </li>
            <li>
              <Account className={styles.iconStyleBig} />
            </li>
          </ul>
          <ul className={`${ulSty}`}>
            <li>
              {auth.token && (
                <button title="Logout" onClick={logoutHandler}>
                  <Logout className={styles.iconStyleBig} />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
