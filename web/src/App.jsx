import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// import Icon from "./Icon";
import "./App.css";
// import logo from "./logo.svg";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import DevPage from "./pages/DevPage";
import { useState } from "react";
// import AuthContext from "./context/AuthContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showLabel, setShowLabel] = useState(true);
  // const [token, setToken] = useState(null);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchLabels());
  // }, [dispatch]);

  // const stateObj = useSelector((state) => state);
  // console.log(stateObj);
  const auth = useSelector((state) => state.authReducer);
  console.log("auth (App.jsx): ", auth);

  // const login = (token, userId, tokenExpiration) => {
  //   setToken(token);
  //   setUserId(userId);
  // };

  // const logout = () => {
  //   setToken(null);
  //   setUserId(null);
  // };

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
    <BrowserRouter>
      <Fragment>
        {/* <AuthContext.Provider
          value={{ token: token, userId: userId, login: login, logout: logout }}
        > */}
        <div className={`${theme}`}>
          {/* <Layout
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            toggleLabelMenu={toggleLabelMenu}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          > */}
          <Routes>
            {auth.token && (
              <Route
                path="/"
                exact
                element={
                  <Layout
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    toggleLabelMenu={toggleLabelMenu}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  >
                    <HomePage showLabel={showLabel} />
                  </Layout>
                }
              />
            )}

            {!auth.token && (
              <Route
                path="/auth"
                element={
                  <AuthPage
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
            )}

            {!auth.token ? (
              <Route
                path="*"
                element={<Navigate to="/auth" replace={true} />}
              />
            ) : (
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            )}
            <Route path="/dev" component={DevPage} />
          </Routes>

         
          {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Icon className="icon" name="logo" /> */}
          {/* <Icon className="icon" name="star" /> */}
          {/* <Icon className="icon" name="unicorn" /> */}
          {/* <img src={menu} className="App-logo" alt="logo" /> */}
          {/* </header> */}
          {/* </Layout> */}
        </div>
        {/* </AuthContext.Provider> */}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
