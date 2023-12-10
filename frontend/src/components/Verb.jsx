import { useSelector, useDispatch } from "react-redux";
import { setAnswerFor, PHASE_GAMMES } from "../store/verbsGame.slice";
import { useEffect, useState } from "react";

import { TENSE_VERBS } from "../constants";

const Verb = ({ _id, present, past, meaning, tenseShowed, isCorrect }) => {
  const dispatch = useDispatch();
  const phase = useSelector((state) => state.verbsGame.phase);
  const [answer, setAnswer] = useState({ present: "", past: "", meaning: "" });

  const showCorrection = phase === PHASE_GAMMES.CORRECTION;
  const classCorrectionPresent = showCorrection
    ? isCorrect.present
      ? "inputVerb ok"
      : "inputVerb ko"
    : "inputVerb";
  const classCorrectionPast = showCorrection
    ? isCorrect.past
      ? "inputVerb ok"
      : "inputVerb ko"
    : "inputVerb";
  const classCorrectionMeaning = showCorrection
    ? isCorrect.meaning
      ? "inputVerb ok"
      : "inputVerb ko"
    : "inputVerb";

  const updateAnswer = (e, tenseAnswer) => {
    let answerModif = { ...answer };
    switch (tenseAnswer) {
      case TENSE_VERBS.PRESENT:
        answerModif.present = e.target.value;
        break;
      case TENSE_VERBS.PAST:
        answerModif.past = e.target.value;
        break;
      case TENSE_VERBS.MEANING:
        answerModif.meaning = e.target.value;
        break;
    }

    dispatch(setAnswerFor({ _id, answer: answerModif }));
    setAnswer(answerModif);
  };
  return (
    <div
      className="tableOneVerb"
      key={_id}
    >
      {tenseShowed != TENSE_VERBS.PRESENT ? (
        <input
          type="text"
          // className="inputVerb"
          className={classCorrectionPresent}
          readOnly={showCorrection}
          onBlur={(e) => updateAnswer(e, TENSE_VERBS.PRESENT)}
        ></input>
      ) : (
        <div className="inputQuestionVerb">{present}</div>
      )}
      <div className="answer">
        {showCorrection &&
        !isCorrect.present &&
        tenseShowed != TENSE_VERBS.PRESENT
          ? present
          : ""}
      </div>

      {tenseShowed != TENSE_VERBS.PAST ? (
        <input
          type="text"
          // className="inputVerb"
          className={classCorrectionPast}
          readOnly={showCorrection}
          onBlur={(e) => updateAnswer(e, TENSE_VERBS.PAST)}
        ></input>
      ) : (
        <div className="inputQuestionVerb">{past}</div>
      )}
      <div className="answer">
        {showCorrection && !isCorrect.past && tenseShowed != TENSE_VERBS.PAST
          ? past
          : ""}
      </div>
      {tenseShowed != TENSE_VERBS.MEANING ? (
        <input
          type="text"
          // className="inputVerb"
          className={classCorrectionMeaning}
          readOnly={showCorrection}
          onBlur={(e) => updateAnswer(e, TENSE_VERBS.MEANING)}
        ></input>
      ) : (
        <div className="inputQuestionVerb">{meaning}</div>
      )}
      <div className="answer">
        {showCorrection &&
        !isCorrect.meaning &&
        tenseShowed != TENSE_VERBS.MEANING
          ? meaning
          : ""}
      </div>
    </div>
  );
};

export default Verb;
