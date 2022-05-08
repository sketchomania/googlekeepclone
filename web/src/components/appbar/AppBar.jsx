import { Link } from "react-router-dom";
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
import classes from "./AppBar.module.css";
import SearchBar from "./SearchBar";

const AppBar = ({
  setIsLoggedIn,
  isLoggedIn,
  darkMode,
  toggleTheme,
  toggleLabelMenu,
}) => {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // const [isMounted, setIsMounted] = useState(false);

  return (
    <header className="max-w-full h-16 flex py-0 px-1 items-center justify-between bg-green-300">
      <Menu title="Menu" className={`${sty1}`} onClick={toggleLabelMenu} />{" "}
      {/* on click show label list  */}
      <Link to="/" title="Google keep clone" style={{ textDecoration: "none" }}>
        <div className={classes.logo}>
          {logo}
          <h3>Keep</h3>
        </div>
      </Link>
      {/* create a component for lable menu */}
      <SearchBar />
      <nav className={classes.nav}>
        <ul>
          <li title="Form">
            <Link to="/form">Form</Link>
          </li>
          <li title="Auth">
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
        <ul>
          <li>
            {/* <ThemeContext.Consumer>
              {({ changeTheme }) => ( */}
            <button
              title="theme"
              onClick={toggleTheme}
              // onClick={() => {
              //   setDarkMode(!darkMode);
              //   toggleTheme();
              //   // changeTheme(darkMode ? themes.light : themes.dark);
              // }}
            >
              {darkMode ? (
                <Light className={`${sty1}`} />
              ) : (
                <Dark className={`${sty1}`} />
              )}
            </button>
            {/* )}
            </ThemeContext.Consumer> */}
          </li>
        </ul>
        <ul>
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
        <ul>
          <li>
            {!isLoggedIn ? (
              <>
                <button title="Login" onClick={loginHandler}>
                  <Link to="/auth">
                    <Login className={`${sty1}`} />
                  </Link>
                </button>
                <button title="Signup" onClick={loginHandler}>
                  <Link to="/auth">
                    <strong>Signup</strong>
                  </Link>
                </button>
              </>
            ) : (
              <button title="Logout" onClick={loginHandler}>
                <Logout className={`${sty1}`} />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

const sty1 = "stroke-2 p-1.5 h-10 w-10 hover:bg-gray-400 hover:rounded-full";

export default AppBar;
