import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Users from "./pages/Users/index";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
