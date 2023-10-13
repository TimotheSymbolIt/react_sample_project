import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";

function Root() {

  // Définition de toutes les routes
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/login" element={<LoginView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Root;
