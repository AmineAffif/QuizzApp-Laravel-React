import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import RequestAPI from "../../Utils/Api";

const CreateQuiz = () => {
  const { user } = useAuth0();

  const [userRole, setUserRole] = useState();

  const [quizTitle, setQuizTitle] = useState();
  const [quizAmountQuestion, setQuizAmountQuestion] = useState();
  const [quizQuestionList, setQuizQuestionList] = useState([]);
  const [quizQuestionList2, setQuizQuestionList2] = useState([]);

  const [questions, setQuestions] = useState();



  const handleTitleForm = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleAmountQuestionForm = (e) => {
    console.log(e.target.value);
    setQuizAmountQuestion(e.target.value)

    setQuizQuestionList([])
    for (let i = 0; i < e.target.value; i++) {
      quizQuestionList.push("")
    }

    setQuizQuestionList2(quizQuestionList)

    console.log("LIST : " + quizQuestionList);
  };





  const handleSingleQuestion = (e) => {
    setQuestions({
      ...questions,
      "question": e.target.value
    });
    console.log(questions);
  };





  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit");
    
  };


  useEffect(() => {
    RequestAPI("POST", "getUserRole", {
      user_id: user?.sub,
    })
      .then(function (reponse) {
        setUserRole(reponse.data?.role);
        console.log(reponse.data?.role);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [user]);



  return (
    <div>

      {/* Is Admin */}
      {userRole == "admin" && (
        <div>
          <div className="form-group container">
            <form onSubmit={handleSubmit}>


              <input
                type="text"
                className="form-control"
                aria-describedby="title"
                placeholder="Titre du quiz"
                onChange={handleTitleForm}
              />
              <input
                type="number"
                className="form-control"
                aria-describedby="title"
                min={0}
                max={3}
                placeholder="Nombre de question"
                onChange={handleAmountQuestionForm}
              />


              <div className="questions_wrapper">
                {quizQuestionList2.map((value, index) => {
                  return (
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="title"
                      placeholder="Question"
                      onChange={handleSingleQuestion}
                      indexKey={index}
                    />

                  )
                })}

              </div>



              <button type="submit">Submit</button>

            </form>
          </div>
        </div>
      )}


      {/* Not Admin */}
      {userRole != "admin" && userRole != null && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <h2>Unauthorized</h2>
        </div>
      )}


      {/* Getting role */}
      {!userRole && <h2>Loading...</h2>}
    </div>
  );
};

export default CreateQuiz;
