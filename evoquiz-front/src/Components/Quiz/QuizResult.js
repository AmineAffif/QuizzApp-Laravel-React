import React from 'react';
import {
    useParams
  } from "react-router-dom";

const QuizResult = () => {

    let { id } = useParams();

    return (
        <div>
            Quiz Result for Quiz {id}
        </div>
    );
};

export default QuizResult;