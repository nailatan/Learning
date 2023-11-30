import { useSelector, useDispatch } from "react-redux";
const CountriesGamme = () => {
  const name = useSelector((state) => state.user.value);
  const country = useSelector((state) => state.game.countryName);
  return (
    <div>
      PAises de {country} para {name}
    </div>
  );
};

export default CountriesGamme;
