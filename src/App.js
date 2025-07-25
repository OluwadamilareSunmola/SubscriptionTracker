import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page componenets
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
