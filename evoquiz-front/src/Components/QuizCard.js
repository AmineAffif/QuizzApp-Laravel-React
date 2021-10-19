import React from "react";
import { useHistory } from "react-router";
import "../style/QuizCard.css";

const QuizCard = (data) => {
  const history = useHistory();

  return (
    <div className="quiz_card">
      <h3>{data.data.title}</h3>
      <div className="btn_wrapper">
        <button
          className="btn btn-link text-dark m-0 btn-block text-decoration-none results_btn"
          onClick={() => history.push("/result/" + data.data.id)}
        >
          Résultats
        </button>
        <button
          className="btn rounded-0 btn-block play_btn"
          onClick={() => history.push("/play/" + data.data.id)}
        >
          Jouer
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
