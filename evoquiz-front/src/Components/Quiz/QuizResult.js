import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import RequestAPI from "../../Utils/Api";

const QuizResult = () => {
  let { id } = useParams();

  const { user } = useAuth0();

  const [score, setScore] = useState();

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h2>Titre du quiz :</h2>
      <h3>Quiz Results for Quiz {score?.quiz.title}</h3>
      {score?.score.score ? (
        <p>
          Votre score : {score?.score.score} / {score?.quiz?.amount_question}
        </p>
      ) : (
        <p>Votre score : aucun</p>
      )}
    </div>
  );
};

export default QuizResult;
