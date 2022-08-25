import { Route, Routes } from "react-router-dom";
import { ESTADO_INICIAL } from "./api/constantes";
import "./App.scss";
import Home from "./components/home/Home";
import Sobre from "./components/sobre/Sobre";
import { DispatchContext } from "./reducer/context";
import { useAppStore } from "./reducer/store";
function App() {
  const [state, dispatch] = useAppStore(ESTADO_INICIAL);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className="container">
        <div className="app-routes">
          <Routes>
            <Route path="/" element={<Home state={state} />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </DispatchContext.Provider>
  );
}

export default App;
