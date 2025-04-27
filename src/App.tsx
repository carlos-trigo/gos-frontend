import "./App.css";
import { Home } from "./pages/home";
import { Landing } from "./pages/landing";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
