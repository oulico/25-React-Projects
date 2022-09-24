import React, { useState } from "react";
import styled from "styled-components";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h2>Questions and Answers About Login</h2>
        <div>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
