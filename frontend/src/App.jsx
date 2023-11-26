import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./screen/Login";
import SelectCountry from "./screen/SelectCountry";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
