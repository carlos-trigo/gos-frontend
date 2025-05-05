import "./App.css";
import { Home } from "./pages/home";
import { Landing } from "./pages/landing";
import { Routes, Route } from "react-router";
import { paths } from "./routes/paths";
import { Friends } from "./pages/friends";
import { LogoMarquee } from "./components/custom/logo-marquee";
import { Particles } from "./components/magicui/particles";

function App() {
  return (
    <div className="App">
      <LogoMarquee header footer />
      <Particles className="absolute top-0 left-0 w-screen h-screen overflow-hidden" />
      <Routes>
        <Route path={paths.landing} element={<Landing />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.friends} element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
