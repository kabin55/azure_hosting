import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Success from "./pages/Success";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
