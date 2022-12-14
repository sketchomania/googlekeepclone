import { useState } from "react";
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

  const [showSettingCard, setShowSettingCard] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);

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
            <li className="relative">
              <Setting
                title="Setting"
                className={`${styles.iconStyleBig}`}
                onClick={() => {
                  console.log("user Backdrop chilcked");
                  setShowSettingCard(true);
                }}
              />
              {showSettingCard && (
                <>
                  <div
                    className="fixed h-full w-full top-0 left-0"
                    onClick={() => {
                      console.log("Setting Backdrop chilcked");
                      setShowSettingCard(false);
                    }}
                  ></div>
                  <div
                    className="absolute flex flex-col justify-around shadow-md shadow-zinc-400 border-t border-t-zinc-100 text-zinc-700 text-sm py-1.5 w-max bg-white rounded-lg"
                    onClick={() => {
                      console.log("Settings Modal clicked");
                    }}
                  >
                    <h3 className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer">
                      Settings
                    </h3>
                    <h3
                      className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer"
                      onClick={toggleTheme}
                    >
                      Enable dark theme
                    </h3>
                    <h3 className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer">
                      Send feedback
                    </h3>
                    <h3 className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer">
                      Help
                    </h3>
                    <h3 className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer">
                      App downloads
                    </h3>
                    <h3 className="hover:bg-zinc-200 pl-5 pr-3 py-1 cursor-pointer">
                      Keyboard shortcuts
                    </h3>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
        <div className={`${container} mr-4`}>
          <ul className={`${ulSty}`}>
            <li>
              <Github title="Github" className={`${styles.iconStyleBig}`} />
            </li>

            <li className="relative" title={`User`}>
              {auth.token && (
                <Account
                  // title={auth ? auth.user.email : "User"}
                  className={`${styles.iconStyleBig}`}
                  onClick={() => {
                    setShowUserCard(true);
                    // console.log("👤: ", auth);
                  }}
                />
              )}
              {showUserCard && (
                <>
                  <div
                    className="fixed h-full w-full top-0 left-0"
                    onClick={() => {
                      console.log("user Backdrop chilcked");
                      setShowUserCard(false);
                    }}
                  ></div>
                  <div
                    className={`absolute flex flex-col items-center justify-around right-0 w-80 bg-white rounded-lg
                     shadow-lg shadow-zinc-400 border-t border-t-zinc-200 text-zinc-700  text-sm
                    `}
                    onClick={() => {
                      console.log("user Modal clicked");
                    }}
                  >
                    <h3
                      className="mt-8 font-semibold text-zinc-500 scale-90"
                      onClick={() => {
                        console.log("👤: ", auth);
                        setShowUserCard(true);
                      }}
                    >
                      {auth.user.email}
                    </h3>
                    <h3 className="cursor-pointer border rounded-full font-semibold py-1 px-4 my-5">
                      {"Manage your Google Account"}
                    </h3>
                    <h3 className="border-y w-full font-semibold py-2.5 flex items-center pl-16">
                      {"Add another account"}
                    </h3>
                    {/* <Logout
                      title="Logout"
                      onClick={logoutHandler}
                      className={styles.iconStyleBig}
                    /> */}
                    <h3
                      title="Logout"
                      onClick={logoutHandler}
                      className="cursor-pointer border rounded-md font-semibold px-6 py-1.5 my-4 hover:bg-zinc-100"
                    >
                      {"Sign out"}
                    </h3>
                    <h3 className="border-t w-full text-xs py-3.5 flex items-center justify-center">
                      {"Privacy policy • Terms of services"}
                    </h3>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default AppBar;
