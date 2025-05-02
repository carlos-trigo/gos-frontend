import "./App.css";
import { Home } from "./pages/home";
import { Landing } from "./pages/landing";
import { Routes, Route } from "react-router";
import { paths } from "./routes/paths";
import { Friends } from "./pages/friends";
import { AddFriends } from "./pages/add-friends";
import { LogoMarquee } from "./components/custom/logo-marquee";

function App() {
  return (
    <div className="App">
      <LogoMarquee header footer />

      <Routes>
        <Route path={paths.landing} element={<Landing />} />
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.friends} element={<Friends />} />
        <Route path={paths.addFriends} element={<AddFriends />} />
      </Routes>
    </div>
  );
}

export default App;
