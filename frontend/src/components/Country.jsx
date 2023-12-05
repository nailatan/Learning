import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Form } from "antd";
import { setAnswerFor } from "../store/countryGame.slice";

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
      <Form.Item label={<span className="label">{name}</span>}>
        <Input
          maxLength={50}
          onBlur={saveAnswer}
        />
      </Form.Item>
    </div>
  );
};

export default Country;