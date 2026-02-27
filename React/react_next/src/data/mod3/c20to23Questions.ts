// Importa o tipo Question para garantir que os dados da questão tenham a estrutura correta
import { Question } from "@/types/mod3/c20to23Question";

// Lista de questões com perguntas, opções de resposta e a resposta correta
export const Questions: Question[] = [ 
    {
        question: 'Quanto é "1" + "1"?', // Pergunta sobre concatenação de strings
        options: [
            '2', // Opção errada (interpretação matemática)
            'dois', // Opção errada (texto por extenso)
            '11', // Opção correta (concatenação de strings)
            'onze' // Opção errada (interpretação fonética)
        ],
        answer: 2 // Índice da resposta correta
    },
    {
        question: 'O que é JS?', // Pergunta sobre JavaScript
        options: [
            'Jato Supersônico', // Opção errada
            'Sul do Japão', // Opção errada
            'JavaScript', // Opção correta
            'Java' // Opção errada (outra linguagem de programação)
        ],
        answer: 2 // Índice da resposta correta
    }
];