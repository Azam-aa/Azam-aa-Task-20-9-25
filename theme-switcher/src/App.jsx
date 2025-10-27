import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Theme Switcher App</h1>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      {theme === "light" ? "☀️ Light Mode is On" : "🌙 Dark Mode is On"}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}
