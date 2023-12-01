import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries as apiGetCountries, getContinents } from "../api";
import { setCountries } from "../store/game.slice";
import Country from "../components/Country";
import "./CountriesGames.css";

const CountriesGamme = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.value);
  const continent = useSelector((state) => state.game.continentName);
  const countries = useSelector((state) => state.game.countries);

  const [totalAnswer, setTotalAnswer] = useState(0);

  const getCountries = async () => {
    const countries1 = await apiGetCountries(continent);
    dispatch(setCountries(countries1));
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    console.log(`Use effect ${totalAnswer}`);
    setTotalAnswer(
      countries.reduce((total, x) => (x.answer ? total + 1 : total), 0)
    );
  }, [countries]);

  return (
    <div className="countryGame">
      <div className="title">
        Paises de {continent} ({totalAnswer}/
        {countries != null ? countries.length : 0})
      </div>
      <div className="country">
        {countries.map((c) => (
          <Country
            _id={c._id}
            name={c.name}
          />
        ))}
      </div>
      <div className="buttons"></div>
    </div>
  );
};

export default CountriesGamme;
