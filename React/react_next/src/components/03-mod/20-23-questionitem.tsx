import { Question } from "@/types/03-mod/20-23-question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({
  question,
  count,
  onAnswer,
}: Props) => {
  // Selected answer state
  const [selectedAnswer, setSelectedAnswer] =
    useState<number | null>(null);

  // Handle answer selection
  const checkQuestion = (key: number) => {
    // Prevent multiple selections
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);

        // Reset selection for next question
        setSelectedAnswer(null);
      }, 1200);
    }
  };

  return (
    <div>
      {/* Question title */}
      <div className="mb-5 text-3xl font-bold">
        {count}. {question.question}
      </div>

      {/* Answer options */}
      <div>
        {question.options.map((item, key) => {
          // Correct answer
          const isCorrect =
            selectedAnswer !== null &&
            key === question.answer;

          // Wrong selected answer
          const isWrong =
            selectedAnswer !== null &&
            key === selectedAnswer &&
            selectedAnswer !== question.answer;

          return (
            <div
              key={key}
              onClick={() => checkQuestion(key)}
              className={`
                mb-4 rounded-md border border-blue-300 bg-blue-100 px-3 py-2 text-lg
                ${
                  selectedAnswer !== null
                    ? "cursor-auto"
                    : "cursor-pointer hover:opacity-60"
                }
                ${
                  isCorrect
                    ? "border-green-300 bg-green-100"
                    : ""
                }
                ${
                  isWrong
                    ? "border-red-300 bg-red-100"
                    : ""
                }
              `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};