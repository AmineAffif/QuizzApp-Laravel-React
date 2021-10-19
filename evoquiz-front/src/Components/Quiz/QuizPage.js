import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../style/QuizPage.css";

const QuizPage = () => {
  let { id } = useParams();
  const history = useHistory();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    const rightAnswer = answer.rightAnswer;
    // Right answer clicked ?
    if (rightAnswer) {
      setScore(score + 1);
    }
    // Score state is late by one point so display +1
    console.log(score + 1);

    // We are at last question ?
    if (currentQuestion >= 2) {
      // Display score page
      history.push("/result/" + id);
    } else {
      // Go next question
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  

  const [quiz, setQuiz] = useState({
    title: "Quiz 1",
    id: 1,
    questions: [
      {
        content: "Quelle est l'heure actuelle en France ?",
        answers: [
          {
            content: "12h30",
            rightAnswer: true,
          },
          {
            content: "10h24",
            rightAnswer: false,
          },
          {
            content: "9h14",
            rightAnswer: false,
          },
        ],
      },
      {
        content: "Quelle est l'heure actuelle au Japon ?",
        answers: [
          {
            content: "12h30",
            rightAnswer: true,
          },
          {
            content: "10h24",
            rightAnswer: false,
          },
          {
            content: "9h14",
            rightAnswer: false,
          },
          {
            content: "9h14",
            rightAnswer: false,
          },
        ],
      },
      {
        content: "Quelle est l'heure actuelle en Italie ?",
        answers: [
          {
            content: "12h30",
            rightAnswer: true,
          },
          {
            content: "10h24",
            rightAnswer: false,
          },
          {
            content: "9h14",
            rightAnswer: false,
          },
        ],
      },
    ],
  });
  
  
  const [countQuestions, setCountQuestions] = useState(0);

  useEffect(() => {
    const amountQuestion = quiz.questions.length
    setCountQuestions(amountQuestion)
    console.log(countQuestions)
  }, []);


  return (
    <div className="question_wrapper">
      <h3 className="question_title">{quiz.title}</h3>
      <div className="question">
        {/* Quiz Question */}
        <p className="question_text">
          {quiz.questions[currentQuestion ? currentQuestion : 0].content}
        </p>
        <div className="answers_wrapper">
          {quiz.questions[currentQuestion ? currentQuestion : 0].answers.map(
            (answer) => {
              return (
                <button
                  className="btn rounded-0 btn-block answer_btn"
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer.content}
                </button>
              );
            }
          )}
        </div>
        <p className="question_num">Question {currentQuestion + 1}/{countQuestions}</p>
      </div>
    </div>
  );
};

export default QuizPage;
