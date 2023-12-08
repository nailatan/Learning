import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Select, Card, Button } from "antd";
import { GAMES } from "../constants";
import { setMode } from "../store/managerGame.slice";
import { MODE_GAMES } from "../constants";

const SelectGame = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const [canPlay, setCanPlay] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "Países", value: GAMES.COUNTRY },
    { name: "Verbos", value: GAMES.VERB },
  ];

  const activePlay = (e) => {
    // setContinentSelected(e);
    setCanPlay(true);
    setSelectedGame(e);
  };

  const letsPlay = () => {
    if (selectedGame === GAMES.COUNTRY) {
      dispatch(setMode(MODE_GAMES.GAME_COUNTRY));
      navigate(`/Select`, { replace: false });
    } else if (selectedGame === GAMES.VERB) {
      dispatch(setMode(MODE_GAMES.GAME_VERBS));
      navigate(`/Verbs`, { replace: false });
    }
  };

  return (
    <div>
      <div>{user}</div>
      <Card
        title="Selecciona el juego"
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
          options={games}
          onChange={activePlay}
        />
      </Card>
    </div>
  );
};

export default SelectGame;
