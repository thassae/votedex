import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import MenuBar from "./components/shared/menu-bar/MenuBar";
import Sobre from "./components/sobre/Sobre";
function App() {
  return (
    <>
      <MenuBar />
      <div className="container">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Sobre />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
