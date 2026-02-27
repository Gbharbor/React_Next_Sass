"use client";

import { QuestionItem } from "@/components/mod3/c20to23QuestionItem";
import { Results } from "@/components/mod3/c20to23Results";
import { Questions } from "@/data/mod3/c20to23Questions";
import { useState } from "react";

const Page = () => {
   // Estado para armazenar as respostas do usuário
   const [answers, setAnswers] = useState<number[]>([]);
   // Estado para controlar a pergunta atual
   const [currentQuestion, setCurrentQuestion] = useState(0);
   // Estado para exibir os resultados ao final do quiz
   const [showResult, setShowResult] = useState(false);
   
   const title = "Random Quiz";

   // Carrega a próxima pergunta ou exibe o resultado
   const loadNextQuestion = () => {
      if (Questions[currentQuestion + 1]) {
         setCurrentQuestion(currentQuestion + 1); // Avança para a próxima pergunta
      } else {
         setShowResult(true); // Exibe o resultado ao final do quiz
      }
   };

   // Manipula a resposta do usuário e avança para a próxima questão
   const handleAnswered = (answer: number) => {
      setAnswers([...answers, answer]);
      loadNextQuestion();
   };

   // Reinicia o quiz
   const handleRestartButton = () => {
      setAnswers([]);
      setCurrentQuestion(0);
      setShowResult(false);
   };

   return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-600">
         <div className="w-full max-w-xl rounded-md bg-white text-black shadow-black">
            {/* Título do quiz */}
            <div className="p-5 font-bold text-2xl border-gray-300">{title}</div>

            {/* Exibição da pergunta atual ou dos resultados */}
            <div className="p-5">
               {!showResult && (
                  <QuestionItem
                     question={Questions[currentQuestion]}
                     count={currentQuestion + 1}
                     onAnswer={handleAnswered}
                  />
               )}
               {showResult && <Results questions={Questions} answers={answers} />}
            </div>

            {/* Contador de perguntas ou botão de reinício */}
            <div className="p-5 text-center border-t border-gray-300">
               {!showResult && (
                  `${currentQuestion + 1} de ${Questions.length} ${Questions.length > 1 ? "perguntas" : "pergunta"}`
               )}
               {showResult && (
                  <button 
                     onClick={handleRestartButton} 
                     className="px-3 py-2 rounded-md bg-blue-500 text-white hover:opacity-80"
                  >
                     Reiniciar Quiz
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Page;