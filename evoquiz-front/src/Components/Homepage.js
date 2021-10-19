import React, { useState } from "react";

const Homepage = () => {
    
  // All quiz
  const [allQuiz, setAllQuiz] = useState([
    {
      quiz: [
        {
          title: "Quiz 1",
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
          ],
        },

        {
            title: "Quiz 2",
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
            ],
          },

          {
            title: "Quiz 3",
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
            ],
          },


      ],
    },
  ]);


  return (
    <div>
      <h1>Homepage</h1>
      {allQuiz.map((allQuiz) => {
        return allQuiz.quiz.map((text) => {
          console.log("FINAL");
          console.log(text.title);
          return (
            <div>
              <p>{text.title}</p>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Homepage;
