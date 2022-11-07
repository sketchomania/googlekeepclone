import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import DevPage from "./pages/DevPage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showLabel, setShowLabel] = useState(true);

  const auth = useSelector((state) => state.authReducer);
  console.log("auth (App.jsx): ", auth);

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
                  >
                    <HomePage showLabel={showLabel} />
                  </Layout>
                }
              />
            )}

            {!auth.token && <Route path="/auth" element={<AuthPage />} />}

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
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
