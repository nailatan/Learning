import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountries as apiGetCountries, getContinents } from "../api";
import { setCountries, setPhase, reset } from "../store/countryGame.slice";
import Country from "../components/Country";
import "./CountriesGames.css";
import { Button } from "antd";

const CountriesGamme = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.value);
  const continent = useSelector((state) => state.countriesGame.continentName);
  const countries = useSelector((state) => state.countriesGame.countries);
  const [message, setMessage] = useState("");

  const [totalAnswer, setTotalAnswer] = useState(0);

  const selectGame = () => {
    dispatch(reset());

    navigate(`/SelectGame`, { replace: false });
  };

  const generateRandomBetween = (min, max, exclude) => {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (exclude.includes(ranNum)) {
      ranNum = generateRandomBetween(min, max, exclude);
    }

    return ranNum;
  };

  const getCountries = async () => {
    const {
      success,
      result: continentResult,
      error,
    } = await apiGetCountries(continent);
    if (success) {
      setMessage("");
      let countries1 = continentResult.country;
      let min = 0;
      let max = countries1.length - 1;
      let excluded = [];
      let mixedCountries = [];
      let total = 0;
      for (total = 0; total <= max; total++) {
        let current = generateRandomBetween(min, max, excluded);
        excluded.push(current);
        mixedCountries.push(countries1[current]);
      }
      dispatch(setCountries(mixedCountries));
    } else {
      setMessage(error);
    }
  };

  const correct = () => {
    let correctCountries = countries.map((c) => {
      console.log(c);
      return {
        ...c,
        isCorrect:
          c.hasOwnProperty("answer") &&
          c.answer.toUpperCase() === c.capital.toUpperCase(),
      };
    });
    dispatch(setCountries(correctCountries));
    dispatch(setPhase("Correct"));
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    setTotalAnswer(
      countries.reduce((total, x) => (x.answer ? total + 1 : total), 0)
    );
  }, [countries]);

  return (
    <div className="countryGame">
      <div className="error">{message}</div>
      <div className="title">
        Paises de {continent} ({totalAnswer}/
        {countries != null ? countries.length : 0})
      </div>
      <div className="country">
        {countries.map((c) => (
          <Country
            _id={c._id}
            name={c.name}
            capital={c.capital}
            isCorrect={c.isCorrect}
          />
        ))}
      </div>
      <div className="buttons">
        <Button
          onClick={correct}
          style={{
            marginLeft: "10px",
          }}
        >
          Corregir
        </Button>
        <Button
          onClick={selectGame}
          style={{
            marginLeft: "10px",
          }}
        >
          Seleccionar Juego
        </Button>
      </div>
    </div>
  );
};

export default CountriesGamme;
