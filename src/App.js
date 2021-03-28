import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Employees from "./components/Employees";
import Header from "./components/Header"

import "./App.css";

function App() {
  document.title = "Employee Directory";

  
  return (
    <Router>
        <Header />
        <Employees />
    </Router>
  );
}

export default App;
