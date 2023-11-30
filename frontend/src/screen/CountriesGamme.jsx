import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries as apiGetCountries, getContinents } from "../api";

const CountriesGamme = () => {
  const name = useSelector((state) => state.user.value);
  const continent = useSelector((state) => state.game.continentName);

  const getCountries = async () => {
    const countries1 = await apiGetCountries(continent);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      PAises de {continent} para {name}
    </div>
  );
};

export default CountriesGamme;
