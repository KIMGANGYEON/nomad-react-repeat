import { link } from "fs";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Movies from "./components/Movies";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
