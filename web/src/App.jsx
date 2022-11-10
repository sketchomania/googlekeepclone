import { Fragment, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import DevPage from "./pages/DevPage";
import "./App.css";
// import { getToken } from "./redux/actions/authActions";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showLabel, setShowLabel] = useState(true);

  const {  token, isLoading, isError } = useSelector(
    (state) => state.authReducer
  );
  // const token = getToken();
  console.log("authData (App.jsx) ", "token: ", token,"isLoading: ", isLoading,"isError: ", isError);

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

  return (
    <BrowserRouter>
      <Fragment>
        <div className={`${theme}`}>
          <Routes>
            {token && (
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

            {!token && <Route path="/auth" element={<AuthPage />} />}

            {token && <Route path="/auth" element={<Navigate to="/" />}/>}
            {!token && <Route path="*" element={<Navigate to="/auth" />} />}

            {!!token && <Route path="*" element={<Navigate to="/" />} />}

            <Route path="/dev" component={DevPage} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
