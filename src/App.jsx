import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import "./styles/index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
          <Route path="login" element={<LogIn onLogin={handleLogin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
