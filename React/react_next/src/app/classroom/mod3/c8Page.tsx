//Código comentado - Input controlado com useState
'use client'; // Indica que este componente é um Client Component (necessário para usar hooks como useState)

// Importa o hook useState do React
import { useState } from "react";

const Page = () => {
    // Define o estado inicial para o campo de entrada
    // `nameInput` armazena o valor digitado no input
    // `setNameInput` é a função usada para atualizar o valor do estado
    const [nameInput, setNameInput] = useState('');

    // Função chamada quando o botão é clicado
    const handleBtnClick = () => {
        alert(nameInput);
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            {/* Campo de entrada de texto */}
            <input 
                type="text"
                className="border border-black p-3 text-xl text-black rounded-md" 
                placeholder="Digite seu nome"
                value={nameInput} // Define o valor do campo como o estado `nameInput`
                onChange={e => setNameInput(e.target.value)} // Atualiza o estado com o valor digitado
            />    

            {/* Exibe o valor atual do campo */}
            <p className="mt-4">Seu nome é: <span className="font-semibold">{nameInput}</span></p>

            {/* Botão que exibe o valor do campo em um alerta */}
            <button 
                onClick={handleBtnClick}
                className="bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600 transition"
            >
                Mostrar valor do campo
            </button>
        </div>
    );
};

export default Page;