import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      {user && <Header />}
      <div className="main-container">
        {user && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/" element={user ? <Home user={user} onLogout={handleLogout} /> : 
            <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
      {user && <Footer />}
    </Router>
  );
};

export default App;
