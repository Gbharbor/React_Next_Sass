import { Question } from "@/types/03-mod/20-23-question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({
  questions,
  answers,
}: Props) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div
          key={key}
          className="mb-3"
        >
          {/* Question */}
          <div className="font-bold">
            {key + 1}. {item.question}
          </div>

          {/* Result */}
          <div>
            <span>
              (
              {item.answer === answers[key]
                ? "Correct"
                : "Wrong"}
              )
              {" - "}
            </span>

            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  );
};