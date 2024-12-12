import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MapboxWithSearch from "./ivfmap"; // Import IVFMap component

function App() {
  return (
    <Routes>
      <Route path="/" element={<MapboxWithSearch />} />
    </Routes>
  );
}

export default App;
