import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user.slice";
import { useEffect } from "react";
import { setMode } from "../store/managerGame.slice";
import { reset as resetCountry } from "../store/countryGame.slice";
import { reset as resetVerbs } from "../store/verbsGame.slice";
import { MODE_GAMES } from "../constants";
import "./login.css";

const Login = () => {
  const name = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(setMode(MODE_GAMES.LOGIN));
  dispatch(resetCountry());
  dispatch(resetVerbs());
  dispatch(setUser(""));

  const SelectGame = (e) => {
    dispatch(setUser(e.target.value));
    dispatch(setMode(MODE_GAMES.SELECT_GAME));
    navigate(`/SelectGame`, { replace: false });
  };

  return (
    <div class="login">
      <Card
        title={<FontAwesomeIcon icon={faEarthAmerica} />}
        // bordered={true}
      >
        <Input
          addonBefore="Nombre"
          maxLength={15}
          onPressEnter={SelectGame}
        />
      </Card>
    </div>
  );
};

export default Login;
