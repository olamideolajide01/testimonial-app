import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

function App() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
      </Routes>
    </div>
  );
}

export default App;
