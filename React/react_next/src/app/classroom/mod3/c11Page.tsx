//Updating Objects in States
"use client";
import { c11Person } from "@/types/mod3/c11";
import { useState } from "react";
const Page = () => {
    // Inicializando o estado `fullName` com nome e sobrenome como strings vazias
    const [fullName, setFullName] = useState<c11Person>({ name: "", lastName: "" });
    // Limpa ambos os campos
    const handleClearAll = () => {
        setFullName({ name: "", lastName: "" });
    };
    // Limpa apenas o campo de nome
    const handleClearName = () => {
        setFullName({ ...fullName, name: "" });
    };
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            {/* Campo de entrada para o nome */}
            <input
                type="text"
                placeholder="Nome"
                className="border border-black p-3 text-2xl text-black rounded-md mb-3"
                value={fullName.name}
                onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
            />
            {/* Campo de entrada para o sobrenome */}
            <input
                type="text"
                placeholder="Sobrenome"
                className="border border-black p-3 text-2xl text-black rounded-md mb-3"
                value={fullName.lastName}
                onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
            />
            {/* Exibição do nome completo */}
            <p>Meu nome completo é:</p>
            <p>{`${fullName.name} ${fullName.lastName}`}</p> {/* Adicionado espaço entre nome e sobrenome */}
            {/* Botões de ação */}
            <button
                onClick={handleClearAll}
                className="bg-red-500 text-white p-3 rounded-sm mb-3"
            >
                Limpar Tudo
            </button>
            <button
                onClick={handleClearName}
                className="bg-blue-500 text-white p-3 rounded-sm"
            >
                Limpar Nome
            </button>
        </div>
    );
};
export default Page;