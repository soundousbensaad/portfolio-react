import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./sections/Home";
import Contact from "./sections/Contact";
import About from "./sections/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolioLanguage");
    if (saved) return saved;
    return navigator.language.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("portfolioLanguage", language);
  }, [language]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
        }
      />

      <Route
        path="/about"
        element={
          <About
            darkMode={darkMode}
            language={language}
          />
        }
      />

      <Route
        path="/contact"
        element={
          <Contact
            darkMode={darkMode}
            language={language}
          />
        }
      />
    </Routes>
  );
}

export default App;
