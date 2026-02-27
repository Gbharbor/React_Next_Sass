'use client'; // Indica que este componente é um Client Component (necessário para usar hooks como useState)

// Importa o hook useState do React
import { useState } from "react";

const Page = () => {
    // Define o estado inicial do contador
    // `count` é o valor atual do estado, começando em 0
    // `setCount` é a função usada para atualizar o estado
    const [count, setCount] = useState(0);

    // Função para incrementar o contador
    const handleBtnClick = () => {
        // A atualização do estado ocorre de forma assíncrona, então:
        setCount(count + 2); // Incrementa 2 (mas não reflete imediatamente)
        setCount(c => c + 2); // Incrementa 2 com função updater
        setCount(c => c + 2); // Incrementa mais 2 (totalizando +6 até aqui)
        setCount(25); // Como este é o último, ele sobrescreve os anteriores, definindo o estado diretamente como 25
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl"> 
            {/* Exibe o valor atual do contador */}
            <p>{count}</p>

            {/* Botão que chama a função de incremento ao ser clicado */}
            <button 
                onClick={handleBtnClick}
                className="bg-blue-500 text-white p-3 rounded-sm hover:bg-blue-600 transition"
            >
                +2 {/* Texto exibido no botão */}
            </button>
        </div>
    );
}

export default Page;