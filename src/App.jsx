import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Sobre from "./components/sobre/Sobre";
function App() {
  return (
    <>
      {/* <MenuBar /> */}
      <div className="container">
        <div className="app-routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
