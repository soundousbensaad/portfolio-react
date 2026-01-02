// App.jsx - Version simplifiée
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolioLanguage");
    if (saved) return saved;
    const browserLang = navigator.language;
    return browserLang.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
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
        path="/contact" 
        element={
          <Contact 
            darkMode={darkMode}
            language={language} // ⬅️ IMPORTANT: Passe la langue ici
          />
        } 
      />
      {/* Ajoute les autres routes aussi */}
    </Routes>
  );
}

export default App;