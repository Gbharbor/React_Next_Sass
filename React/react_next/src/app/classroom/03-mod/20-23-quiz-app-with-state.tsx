"use client";

import { QuestionItem } from "@/components/03-mod/20-23-questionitem";
import { Results } from "@/components/03-mod/20-23-results";
import { Questions } from "@/data/03-mod/20-23-questions";
import { useState } from "react";

const Page = () => {
  // User answers
  const [answers, setAnswers] = useState<number[]>([]);

  // Current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Result screen control
  const [showResult, setShowResult] = useState(false);

  const title = "Random Quiz";

  // Go to next question or show results
  const loadNextQuestion = () => {
    if (Questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Save answer and continue quiz
  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  // Restart quiz
  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow-black">
        {/* Quiz title */}
        <div className="border-gray-300 p-5 text-2xl font-bold">
          {title}
        </div>

        {/* Current question or results */}
        <div className="p-5">
          {!showResult && (
            <QuestionItem
              question={Questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}

          {showResult && (
            <Results
              questions={Questions}
              answers={answers}
            />
          )}
        </div>

        {/* Question counter or restart button */}
        <div className="border-t border-gray-300 p-5 text-center">
          {!showResult &&
            `${currentQuestion + 1} of ${Questions.length} ${
              Questions.length > 1 ? "questions" : "question"
            }`}

          {showResult && (
            <button
              onClick={handleRestartButton}
              className="rounded-md bg-blue-500 px-3 py-2 text-white hover:opacity-80"
            >
              Restart Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 20 - 23: Quiz App with State
==========================================================

This project combines several React concepts into a
complete quiz application.

Concepts covered:
- Multiple states
- Current question control
- Answer storage
- Conditional rendering
- Passing callbacks to components
- Showing results
- Restarting the application flow

The quiz progresses through the questions and stores
each selected answer until the final result screen.
*/