import React from "react";
import { useHistory } from "react-router";
import "../../style/QuizCard.css";

const QuizCard = (data) => {
  const history = useHistory();


  return (
    <div className="quiz_card">
      {/* Viewing from Homepage ? */}
      {data.data.title ? (
        <>
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
        </>
      ) : (
        ""
      )}

      {/* Viewing from Dashboard ? */}
      {data.data.quiz_title ? (
        <>
          <h3>{data.data.quiz_title}</h3>
          {data.data.victory ? <p>Quiz gagné ✅</p> : ""}
          <div className="btn_wrapper">
            <button
              className="btn btn-link text-dark m-0 btn-block text-decoration-none results_btn"
              onClick={() => history.push("/result/" + data.data.quiz_id)}
            >
              détails
            </button>
            <button
              className="btn rounded-0 btn-block play_btn"
              onClick={() => history.push("/play/" + data.data.quiz_id)}
            >
              Jouer
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuizCard;
