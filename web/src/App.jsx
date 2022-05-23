import { Switch, Route, Redirect } from "react-router-dom";

// import Icon from "./Icon";
import "./App.css";
import logo from "./logo.svg";
import menu from "./icons/menu_black_24dp.svg";
// import AuthForm from "./components/Auth/AuthForm";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import DevPage from "./pages/DevPage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showLabel, setShowLabel] = useState(true);

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
    // showLabel ? setShowLabel(false) : setShowLabel(true);
  };

  // {`App ${theme}`}
  return (
    <div className={`${theme}`}>
      <Layout
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        toggleLabelMenu={toggleLabelMenu}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      >
        <Switch>
          {isLoggedIn && (
            <Route path="/" exact>
              <HomePage showLabel={showLabel} />
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/auth" exact>
              <Redirect to="/dev" />
            </Route>
          )}

          <Route path="/dev">
            <DevPage />
          </Route>

          {!isLoggedIn && (
            <Route path="/auth">
              <AuthPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="*">
              <Redirect to="/auth" />
            </Route>
          )}
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Icon className="icon" name="logo" /> */}
          {/* <Icon className="icon" name="star" /> */}
          {/* <Icon className="icon" name="unicorn" /> */}
          <img src={menu} className="App-logo" alt="logo" />
        </header>
      </Layout>
    </div>
  );
}

export default App;
