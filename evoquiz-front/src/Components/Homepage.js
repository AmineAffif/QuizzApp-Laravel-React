import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { useAuth0 } from "@auth0/auth0-react";
import RequestAPI from "../Utils/Api";



const Homepage = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  // All quiz
  const [allQuiz, setAllQuiz] = useState();

  useEffect(() => {
    RequestAPI("POST", "allQuiz", {})
      .then(function (reponse) {
        setAllQuiz(reponse.data);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
    <div>
      
      {!isLoading &&
        user &&
        allQuiz?.map((quiz, index) => {
          return (
            <div>
              <QuizCard data={quiz} key={index} />
            </div>
          );
        })}
      {!isLoading && !user && (
        <div className="go_login">
          <p>Connecte toi ! ☝️</p>
          <p>Et découvre 1001 questions</p>
        </div>
      )}
    </div>
  );
};

export default Homepage;
