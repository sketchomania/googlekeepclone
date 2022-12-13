import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../redux/actions/authActions";
import { fetchLabels } from "../../redux/actions/labelActions";
import { fetchNotes } from "../../redux/actions/noteActions";

import SearchBar from "./SearchBar";
import styles from "../../constants/Styles";
import Spinner from "../UI/Spinner";

import { ReactComponent as Menu } from "../../icons/menu_black_24dp.svg";
import { ReactComponent as Light } from "../../icons/light_mode_black_24dp.svg";
import { ReactComponent as Dark } from "../../icons/dark_mode_black_24dp.svg";
import { ReactComponent as View } from "../../icons/view_agenda_black_24dp.svg";
import { ReactComponent as Grid } from "../../icons/grid_view_black_24dp.svg";
import { ReactComponent as Setting } from "../../icons/settings_black_24dp.svg";
import { ReactComponent as Account } from "../../icons/account_circle_black_24dp.svg";
import { ReactComponent as Logout } from "../../icons/logout_black_24dp.svg";
import { ReactComponent as Github } from "../../icons/github_black_24dp.svg";
import { ReactComponent as Refresh } from "../../icons/refresh_black_24dp.svg";

const AppBar = ({ darkMode, toggleTheme, toggleLabelMenu }) => {
  const auth = useSelector((state) => state.authReducer);
  const labelLoading = useSelector((state) => state.labelReducer.isLoading);
  const noteLoading = useSelector((state) => state.noteReducer.isLoading);
  const dispatch = useDispatch();

  const logo = (
    <img
      className="h-10"
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  const logoutHandler = () => {
    dispatch(logout());
    // <Redirect to="/auth" />;
  };

  const refreshHandler = () => {
    dispatch(fetchLabels());
    dispatch(fetchNotes());
  };

  const ulSty = "list-none flex m-0 p-0";
  const container = "flex items-center justify-center m-2";

  return (
    <>
      <header className="max-w-full h-16 flex p-1 items-center justify-between fixed top-0 left-0 right-0 bg-inherit shadow-md shadow-gray-300">
        <div className={`${container}`}>
          <div>
            <Menu
              title="Main menu"
              className={styles.iconStyleBig}
              onClick={toggleLabelMenu}
            />
          </div>
          <>
            <Link
              to="/"
              title="Google keep clone"
              style={{ textDecoration: "none" }}
            >
              <div className={`${container}`}>
                <div>{logo}</div>
                <h3 className="font-medium text-2xl scale-95 text-zinc-500 ml-1">
                  {"Keep (Clone)"}
                </h3>
              </div>
            </Link>
          </>
        </div>
        <SearchBar />
        <div className={`${container}`}>
          <ul className={`${ulSty}`}>
            <li className={`${styles.iconStyleBig}`}>
              {labelLoading || noteLoading ? (
                <div className="scale-75">
                  <Spinner title="loading" />
                </div>
              ) : (
                <Refresh title="Refresh" onClick={refreshHandler} />
              )}
            </li>
            {/* <li title="theme" onClick={toggleTheme}>
              {darkMode ? (
                <Light className={styles.iconStyleBig} />
              ) : (
                <Dark className={styles.iconStyleBig} />
              )}
            </li> */}
            <li title="view" onClick={toggleTheme}>
              {darkMode ? (
                <Grid className={styles.iconStyleBig} />
              ) : (
                <View className={styles.iconStyleBig} />
              )}
            </li>
            <li title="Setting">
              <Setting className={`${styles.iconStyleBig}`} />
              {/* <Refresh className={`${styles.iconStyleBig}`} /> */}
              {/* <Spinner /> */}
            </li>
          </ul>
        </div>
        <div className={`${container}`}>
          <ul className={`${ulSty}`}>
            <li>
              {/* <Github title="Github" className={`${styles.iconStyleBig}`} /> */}
              <Account
                title={auth ? auth.user.email : "User"}
                className={styles.iconStyleBig}
                onClick={() => {
                  console.log("👤: ", auth);
                }}
              />
            </li>
            {/* </ul>

          <ul className={`${ulSty}`}> */}
            <li>
              {auth.token && (
                <button title="Logout" onClick={logoutHandler}>
                  <Logout className={styles.iconStyleBig} />
                </button>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default AppBar;
