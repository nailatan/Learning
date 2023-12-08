import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screen/Login";
import CountriesGamme from "./screen/CountriesGamme";
import VerbsGame from "./screen/VerbsGame";
import SelectGame from "./screen/SelectGame";
import SelectContinent from "./screen/SelectContinent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/SelectGame"
          element={<SelectGame />}
        />
        <Route
          path="/Select"
          element={<SelectContinent />}
        />
        <Route
          path="/Play"
          element={<CountriesGamme />}
        />
        <Route
          path="/Verbs"
          element={<VerbsGame />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
