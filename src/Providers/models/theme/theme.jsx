import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext = createContext([]);

export function GlobalTheme({ children }) {
  const themeLocal = localStorage.getItem("@Easy:Theme") || "light";
  const [currentTheme, setCurrentTheme] = useState(themeLocal);

  const switchLocal = JSON.parse(localStorage.getItem("@Easy:Switch")) || false;
  const [themeSwitch, setThemeSwitch] = useState(switchLocal);
  
  useEffect(() => {
    themeSwitch? setCurrentTheme("dark") : setCurrentTheme("light")
  }, [themeSwitch])
  
  function getOpositeTheme() {
    setThemeSwitch(!themeSwitch)
    localStorage.setItem("@Easy:Switch", !themeSwitch);
    localStorage.setItem("@Easy:Theme", currentTheme === "light" ? "dark" : "light");
  }

  return (
    <GlobalThemeContext.Provider value={{ currentTheme, getOpositeTheme, themeSwitch, setThemeSwitch }}>
      {children}
    </GlobalThemeContext.Provider>
  );
}
