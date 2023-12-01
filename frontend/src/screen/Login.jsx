import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user.slice";
import { useEffect } from "react";

const Login = () => {
  const name = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SelectGame = (e) => {
    dispatch(setUser(e.target.value));
    navigate(`/Select`, { replace: false });
  };

  return (
    <div>
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
