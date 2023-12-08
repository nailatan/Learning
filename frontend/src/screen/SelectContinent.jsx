import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { Select, Card, Button } from "antd";
import { useEffect, useState } from "react";
import { getContinents as apiGetContinents } from "../api";
import { setContinent } from "../store/countryGame.slice";

const SelectContinent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const [continents, setContinents] = useState([]);
  const [canPlay, setCanPlay] = useState(false);
  const [continentSelected, setContinentSelected] = useState(null);

  const getContinents = async () => {
    const continents1 = await apiGetContinents();
    setContinents(continents1);
  };

  useEffect(() => {
    getContinents();
  }, []);

  const activePlay = (e) => {
    setContinentSelected(e);
    setCanPlay(true);
  };

  const letsPlay = () => {
    dispatch(setContinent(continentSelected));
    navigate(`/Play`, { replace: false });
  };
  return (
    <div class="card">
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
          options={continents}
          onChange={activePlay}
        />
      </Card>
    </div>
  );
};

export default SelectContinent;
