import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getVerbs as apiGetVerbs } from "../api";
import { setVerbs, setPhase, reset } from "../store/verbsGame.slice";

import "./verbsGame.css";

import { Input, Form, Button } from "antd";
import Verb from "../components/verb";
import { TENSE_VERBS } from "../constants";

const VerbsGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.value);
  const verbs = useSelector((state) => state.verbsGame.verbs);
  const phase = useSelector((state) => state.verbsGame.phase);
  const [message, setMessage] = useState("");

  const selectGame = () => {
    dispatch(reset());
    navigate(`/SelectGame`, { replace: false });
  };

  const generateRandomBetween = (min, max, exclude) => {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (exclude.includes(ranNum)) {
      ranNum = generateRandomBetween(min, max, exclude);
    }

    return ranNum;
  };

  const tenseMap = [TENSE_VERBS.PRESENT, TENSE_VERBS.PAST, TENSE_VERBS.MEANING];

  const getVerbs = async () => {
    const { success, result: verbs1, error } = await apiGetVerbs();

    if (success) {
      setMessage("");
      let min = 0;
      let max = verbs1.length - 1;
      let excluded = [];
      let mixedVerbs = [];

      for (let total = 0; total <= max; total++) {
        let current = generateRandomBetween(min, max, excluded);
        let tenseShowed = generateRandomBetween(0, 2, []);
        excluded.push(current);
        let modified = {
          ...verbs1[current],
          tenseShowed: tenseMap[tenseShowed],
        };
        mixedVerbs.push(modified);
      }
      dispatch(setVerbs(mixedVerbs));
    } else {
      setMessage(error);
    }
  };

  const correct = () => {
    let correct = {
      present: false,
      past: false,
      meaning: false,
    };

    let correcteVerbs = verbs.map((c) => {
      let existPropertyAnswer = c.hasOwnProperty("answer");
      let correct = {
        present:
          c.tenseShowed != TENSE_VERBS.PRESENT &&
          existPropertyAnswer &&
          c.answer.hasOwnProperty("present")
            ? c.answer.present.toUpperCase() === c.present.toUpperCase()
            : false,
        past:
          c.tenseShowed != TENSE_VERBS.PAST &&
          existPropertyAnswer &&
          c.answer.hasOwnProperty("past")
            ? c.answer.past.toUpperCase() === c.past.toUpperCase()
            : false,
        meaning:
          c.tenseShowed != TENSE_VERBS.MEANING &&
          existPropertyAnswer &&
          c.answer.hasOwnProperty("meaning")
            ? c.answer.meaning.toUpperCase() === c.meaning.toUpperCase()
            : false,
      };
      return {
        ...c,
        isCorrect: correct,
      };
    });

    dispatch(setVerbs(correcteVerbs));
    dispatch(setPhase("Correct"));
  };

  useEffect(() => {
    getVerbs();
  }, []);

  // useEffect(() => {
  //   console.log("USEEFECT VERBS");
  // }, [verbs]);

  return (
    <div className="verbGame">
      <div className="error">{message}</div>
      <div className="title">Verbs</div>
      <div className="tableVerbs">
        <div className="tableOneVerb">
          <div className="inputVerb subTitle">Present</div>
          <div className="inputVerb subTitle">Past</div>
          <div className="inputVerb subTitle">Meaning</div>
        </div>
        {verbs.map((v) => (
          <Verb
            _id={v._id}
            present={v.present}
            past={v.past}
            meaning={v.meaning}
            tenseShowed={v.tenseShowed}
            isCorrect={v.isCorrect}
          ></Verb>
        ))}
      </div>
      <div className="buttons">
        <Button
          onClick={correct}
          style={{ marginLeft: "10px" }}
        >
          Corregir
        </Button>
        <Button
          onClick={selectGame}
          style={{
            marginLeft: "10px",
          }}
        >
          Seleccionar Juego
        </Button>
      </div>
    </div>
  );
};

export default VerbsGame;
