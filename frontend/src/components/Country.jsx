import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form } from "antd";
import { setAnswerFor, PHASE_GAMMES } from "../store/countryGame.slice";

const Country = ({ name, _id, isCorrect, capital }) => {
  const dispatch = useDispatch();

  const phase = useSelector((state) => state.countriesGame.phase);
  const showCorrection = phase === PHASE_GAMMES.CORRECTION;

  const saveAnswer = (e) => {
    dispatch(setAnswerFor({ _id, value: e.target.value }));
  };

  const classCorrection = showCorrection ? (isCorrect ? "ok" : "ko") : "";

  return (
    <div
      key={_id}
      className="countryData"
    >
      <div className="line">
        <Form.Item label={<span className="label">{name}</span>}>
          <Input
            maxLength={50}
            onBlur={saveAnswer}
            className={classCorrection}
          />
        </Form.Item>
        <div className="answer">
          {showCorrection && !isCorrect ? capital : ""}
        </div>
      </div>
    </div>
  );
};

export default Country;