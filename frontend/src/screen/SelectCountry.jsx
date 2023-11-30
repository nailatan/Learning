import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { Select, Card, Button } from "antd";
import { useEffect, useState } from "react";
import { getContinents } from "../api";
import { setCountry } from "../store/game.slice";
const SelectCountry = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [canPlay, setCanPlay] = useState(false);
  const [countrySelected, setCountrySelected] = useState(null);

  const getCountries = async () => {
    const countries = await getContinents();
    setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const activePlay = (e) => {
    setCountrySelected(e);
    setCanPlay(true);
  };

  const letsPlay = () => {
    dispatch(setCountry(countrySelected));
    navigate(`/Play`, { replace: false });
  };
  return (
    <div>
      <div>{user}</div>
      <Card
        title="Selecciona el continente"
        // bordered={true}
        actions={[
          <Button
            disabled={!canPlay}
            onClick={letsPlay}
          >
            <FontAwesomeIcon icon={faPlay} />
          </Button>,
        ]}
      >
        <Card.Meta>fsdf</Card.Meta>
        <Select
          // title="País"
          style={{ width: 120 }}
          options={countries}
          onChange={activePlay}
        />
      </Card>
    </div>
  );
};

export default SelectCountry;
