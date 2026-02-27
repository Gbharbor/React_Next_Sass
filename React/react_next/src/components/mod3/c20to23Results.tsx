// Importa o tipo Question para garantir que os dados da questão tenham a estrutura correta
import { Question } from "@/types/mod3/c20to23Question";

// Define os tipos das propriedades esperadas pelo componente
type Props = {
   questions: Question[]; // Lista de questões respondidas
   answers: number[]; // Respostas do usuário
}

// Componente que exibe os resultados das respostas do usuário
export const Results = ({ questions, answers }: Props) => {
   return (
      <div>
         {questions.map((item, key) => (
            <div key={key} className="mb-3">
               {/* Exibe a pergunta com sua numeração */}
               <div className="font-bold">{key + 1}. {item.question}</div>
               
               {/* Exibe se o usuário acertou ou errou, e a resposta correta */}
               <div>
                  <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) - </span>
                  {item.options[item.answer]}
               </div>
            </div>
         ))}
      </div>
   );
};