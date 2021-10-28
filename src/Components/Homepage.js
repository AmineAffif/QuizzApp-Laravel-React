import React, { useEffect, useState } from "react";
import QuizCard from "./Quiz/QuizCard";
import { useAuth0 } from "@auth0/auth0-react";
import RequestAPI from "../Utils/Api";
import "../style/Homepage.css";


const Homepage = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  // All quiz
  const [allQuiz, setAllQuiz] = useState();

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
  }, [user]);

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
    <div className="homepage_wrapper">
      
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
