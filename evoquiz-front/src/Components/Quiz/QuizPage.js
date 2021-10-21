import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../style/QuizPage.css";
import RequestAPI from "../../Utils/Api";

const QuizPage = () => {
  let { id } = useParams();
  const history = useHistory();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [quiz, setQuiz] = useState();

  const [countQuestions, setCountQuestions] = useState(1);

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    RequestAPI("POST", "quiz/" + id, {})
      .then(function (reponse) {
        console.log(reponse.data[0]);
        setQuiz(reponse.data[0]);

        const amountQuestion = reponse.data[0].questions.length;
        setCountQuestions(amountQuestion);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  useEffect(() => {
    
    if (currentQuestion+1 < countQuestions) {
      // Go next question
      setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
    } else if ((currentQuestion+1 == countQuestions) && (countQuestions != 1)) {
      // Check if win rate >= 60%
      if ((score * 100) / countQuestions >= 60) {
        alert("VICTORY");
        history.replace("/result/" + id, score);
        // Axios send Victory(true) to server to save in DB
      } else {
        if (currentQuestion+1 == countQuestions){
          alert("Loose");
          history.replace("/result/" + id, score)
          // Axios send Victory(false) to server to save in DB
        }
      }
    }
  }, [score, trigger]);

  const handleAnswerClick = (answer) => {
    const rightAnswer = answer?.right_answer;
    // Right answer clicked ?
    if (rightAnswer == 1) {
      if (currentQuestion+1 > countQuestions) {
        setScore(prevScore => prevScore + 1);
        history.replace("/result/" + id, score);
      }else{
        setScore(prevScore => prevScore + 1);
      }
    } else {
        setTrigger(prevTrigger => prevTrigger + 1)
    }
  };

  return (
    <div className="question_wrapper">
      <h3 className="question_title">{quiz?.title}</h3>
      score state : {score} <br />
      current Q : {currentQuestion}<br />
      count Q : {countQuestions}
      <div className="question">
        {/* Quiz Question */}
        <p className="question_text">
          {quiz?.questions[currentQuestion]?.content}
        </p>
        <div className="answers_wrapper">
          {quiz?.questions[currentQuestion ? currentQuestion : 0]?.answers.map(
            (answer, index) => {
              return (
                <button
                  className="btn rounded-0 btn-block answer_btn"
                  onClick={function () {
                    handleAnswerClick(answer);
                  }}
                  key={index}
                >
                  {answer.content}
                </button>
              );
            }
          )}
        </div>
        <p className="question_num">
          Question {currentQuestion + 1}/{countQuestions}
        </p>
      </div>
    </div>
  );
};

export default QuizPage;
