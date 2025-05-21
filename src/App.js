import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import JoinGamePage from "./Pages/JoinGamePage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joinGame" element={<JoinGamePage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
