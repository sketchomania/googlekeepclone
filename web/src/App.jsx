import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// import Icon from "./Icon";
import "./App.css";
// import logo from "./logo.svg";

// import AuthForm from "./components/Auth/AuthForm";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import DevPage from "./pages/DevPage";
import { useState } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showLabel, setShowLabel] = useState(true);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchLabels());
  // }, [dispatch]);

  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const auth = useSelector((state) => state.authReducer);
  console.log("auth (App.jsx): ", auth);

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      setTheme("light");
    } else {
      setDarkMode(true);
      setTheme("dark");
    }
  };

  const toggleLabelMenu = () => {
    console.log(
      "toggleLabelMenu clicked !!!",
      "showLabel was before: ",
      showLabel
    );
    setShowLabel(!showLabel);
  };

  // {`App ${theme}`}
  return (
    <Fragment>
      <BrowserRouter>
        <AuthContext.Provider
          value={{ token: token, userId: userId, login: login, logout: logout }}
        >
          <div className={`${theme}`}>
            {/* <Layout
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            toggleLabelMenu={toggleLabelMenu}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          > */}
            <Switch>
              {auth.token && (
                <Route path="/" exact>
                  <Layout
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    toggleLabelMenu={toggleLabelMenu}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  >
                    <HomePage showLabel={showLabel} />
                  </Layout>
                </Route>
              )}
              {/* {auth.token && (
              <Route path="/auth">
              <Redirect replace to="/" />
              </Route>
            )} */}

              <Route path="/dev" exact>
                <DevPage />
              </Route>

              {!auth.token && (
                <Route path="/auth">
                  <AuthPage
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                </Route>
              )}
              {!auth.token ? (
                <Route path="*">
                  <Redirect to="/auth" />
                </Route>
              ) : (
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              )}
            </Switch>
            {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <Icon className="icon" name="logo" /> */}
            {/* <Icon className="icon" name="star" /> */}
            {/* <Icon className="icon" name="unicorn" /> */}
            {/* <img src={menu} className="App-logo" alt="logo" /> */}
            {/* </header> */}
            {/* </Layout> */}
          </div>
        </AuthContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
