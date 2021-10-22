import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import RequestAPI from "../../Utils/Api";

const CreateQuiz = () => {
  const { user } = useAuth0();

  const [userRole, setUserRole] = useState();

  const [quizTitle, setQuizTitle] = useState();

  const handletitleForm = (e) => {
    setQuizTitle(e.target.value);
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
      {userRole == "admin" && (
        <div>
          <div className="form-group container">
            <input
              type="text"
              className="form-control"
              aria-describedby="title"
              placeholder="Titre du quiz"
              onChange={handletitleForm}
            />
          </div>
        </div>
      )}
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

      {!userRole && <h2>Loading...</h2>}
    </div>
  );
};

export default CreateQuiz;
