import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

const ThemeWrapper = () => {
  const [theme, setTheme] = useState(theme.light);

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        " dark ";
        break;
      case themes.light:
        document.classList.add(" ");
      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
