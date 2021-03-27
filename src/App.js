import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Employees from "./components/Employees";
import Header from "./components/Header"
import Search from "./components/Search"

import "./App.css";

function App() {
  document.title = "Employee Directory";
  return (
    <Router>
        <Header />
        <Search />
        <Employees />
    </Router>
  );
}

export default App;
