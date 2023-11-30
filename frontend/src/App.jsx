import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screen/Login";
import SelectCountry from "./screen/SelectCountry";
import CountriesGamme from "./screen/CountriesGamme";

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
          path="/Select"
          element={<SelectCountry />}
        />
        <Route
          path="/Play"
          element={<CountriesGamme />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
