import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import RequestAPI from "../../Utils/Api";
import "../../style/QuizResult.css";
import GreyStarPath from "../../Assets/img/greyStar.svg";
import YellowStarPath from "../../Assets/img/yellowStar.svg";

const QuizResult = () => {
  let { id } = useParams();

  const { user } = useAuth0();

  const [score, setScore] = useState();

  useEffect(() => {
    // Send User infos to DB
    RequestAPI("POST", "sendUser", {
      user_id: user?.sub,
      user_mail: user?.email,
    })
      .then(function (reponse) {
        console.log(reponse.data);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });

      
    RequestAPI("POST", "getQuizScore", {
      user_id: user?.sub,
      quiz_id: id,
    })
      .then(function (reponse) {
        setScore(reponse.data);
        console.log(reponse);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [user]);

  return (
    <div className="results_wrapper">
      {console.log("aaaaaaaaa : " + score?.maxScore)}
      <h3 className="quiz_title_page">
        <strong> Résultats du quiz : </strong>
        {score?.quiz.title}
      </h3>

      {( (score?.maxScore)*100 / score?.quiz.amount_question ) >= 60 ? <p className="quiz_victory">Quiz gagné ✅</p> : ""}

      {/* Max Score */}
      <div className="max_score_wrapper">
        {score?.score.score ? (
          <p>
            Votre score max : {score?.maxScore} /{" "}
            {score?.quiz?.amount_question}
          </p>
        ) : (
          <p>Votre score max : aucun</p>
        )}
        {score?.maxScore == 3 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.maxScore == 2 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.maxScore == 1 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.maxScore == 0 ? (
          <div className="stars">
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Last Score */}
      <div className="last_score_wrapper">
        {score?.score.score ? (
          <p>
            Votre dernier score : {score?.score.score} /{" "}
            {score?.quiz?.amount_question}
          </p>
        ) : (
          <p>Votre dernier score : aucun</p>
        )}

        {score?.score.score == 3 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.score.score == 2 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.score.score == 1 ? (
          <div className="stars">
            <img className="starSvg" src={YellowStarPath} />
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
        {score?.score.score == 0 ? (
          <div className="stars">
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
            <img className="starSvg" src={GreyStarPath} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default QuizResult;
