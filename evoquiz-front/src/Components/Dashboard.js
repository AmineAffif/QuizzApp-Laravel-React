import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../style/Dashboard.css";
import QuizCard from "./Quiz/QuizCard"
import RequestAPI from "../Utils/Api";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // All quiz scores
  const [allQuizScores, setAllQuizScores] = useState();

  useEffect(() => {
    RequestAPI("POST", "getAllQuizScore", {
      user_id: user?.sub
    })
      .then(function (reponse) {
        setAllQuizScores(reponse.data);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="dashboard_wrapper">
        <img src={user.picture} alt={user.name} className="user_picture" />
        <h2>{user.name}</h2>
        <p>Tableau des scores 👇</p>
        <div className="score_list">
          {
            allQuizScores?.scores.map((score, index) => {
              return (
                <div>
                  <QuizCard data={score} key={index} />
                </div>
              );
            })
          }
        </div>
      </div>
    )
  );
};

export default Dashboard;
