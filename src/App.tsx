import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Skills } from "./pages";
import { SheardLyout } from "./components";
import "./index.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SheardLyout />}>
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
