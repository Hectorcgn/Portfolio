import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/shared/Navbar/Navbar";
import Home from "./Components/pages/Home/Home";
import Projekte from "./Components/pages/Projekte/Projekte";
import Infos from "./Components/pages/Infos/Infos";
import Kontakt from "./Components/pages/Kontakt/Kontakt";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
}
export default App;
