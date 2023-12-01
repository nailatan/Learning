import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { setAnswerFor } from "../store/game.slice";

const Country = ({ name, _id }) => {
  const dispatch = useDispatch();

  const saveAnswer = (e) => {
    dispatch(setAnswerFor({ _id, value: e.target.value }));
  };

  return (
    <div
      key={_id}
      className="countryData"
    >
      <Input
        addonBefore={name}
        maxLength={50}
        onBlur={saveAnswer}
      />
    </div>
  );
};

export default Country;
