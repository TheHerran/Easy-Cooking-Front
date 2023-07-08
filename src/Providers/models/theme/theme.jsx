import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext = createContext([]);

export function GlobalTheme({ children }) {

    

    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("@Easy:Theme") || "light");
    const [themeSwitch, setThemeSwitch] = useState(JSON.parse(localStorage.getItem("@Easy:Switch")) || false);

    useEffect(() => {
        themeSwitch ? setCurrentTheme("dark") : setCurrentTheme("light")
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
