import React from "react";
import { useHistory } from "react-router";
import "../../style/QuizCard.css";
import LightSkullPath from "../../Assets/img/lightSkull.svg"
import DarkSkullPath from "../../Assets/img/darkSkull.svg"

const QuizCard = (data, allQuizScores) => {
  const history = useHistory();


  return (
    <div className="quiz_card">
      {
        console.log("scores : " + JSON.stringify(allQuizScores))
      }
      {/* Viewing from Homepage ? */}
      {data.data.title ? (
        <>
          <h3>{data.data.title}</h3>
          {data.data.victory ? <p>Quiz gagné ✅</p> : ""}
          {/* Difficulty level */}
          <div className="difficulty_wrapper">
            {data.data.difficulty ? (
              <p>
                Difficulté : {data.data.difficulty}
              </p>
            ) : (
              <p>Difficulté : chargement...</p>
            )}
            {data.data.difficulty == "facile" ? (
              <div className="skulls">
                <img className="skullImg dark_skull" src={DarkSkullPath} />
                <img className="skullImg light_skull" src={LightSkullPath} />
                <img className="skullImg light_skull" src={LightSkullPath} />
              </div>
            ) : (
              ""
            )}
            {data.data.difficulty == "normal" ? (
              <div className="skulls">
                <img className="skullImg dark_skull" src={DarkSkullPath} />
                <img className="skullImg dark_skull" src={DarkSkullPath} />
                <img className="skullImg light_skull" src={LightSkullPath} />
              </div>
            ) : (
              ""
            )}
            {data.data.difficulty == "impossible" ? (
              <div className="skulls">
                <img className="skullImg dark_skull" src={DarkSkullPath} />
                <img className="skullImg dark_skull" src={DarkSkullPath} />
                <img className="skullImg dark_skull" src={DarkSkullPath} />
              </div>
            ) : (
              ""
            )}

          </div>



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
