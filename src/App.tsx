import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Skills } from "./pages";
import { SheardLyout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SheardLyout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
