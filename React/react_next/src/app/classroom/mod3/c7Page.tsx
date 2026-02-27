"use client";
import { useState } from "react";
const Page = () => {
  // Estado para controlar a visibilidade da área secreta
  const [showSecret, setShowSecret] = useState(false);

  // Função para alternar entre mostrar e ocultar a área secreta
  const handleClickButton = () => {
    setShowSecret(!showSecret);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* Botão para alternar a visibilidade da área secreta */}
      <button
        className="bg-blue-500 p-3"
        onClick={handleClickButton}
      >
        {showSecret ? 'Ocultar Área Secreta' : 'Mostrar Área Secreta'}
      </button>
      {/* Condicional para exibir a área secreta, caso showSecret seja true */}
      {showSecret && (
        <div className="p-3 bg-blue-300 rounded-md mt-3">
          Área secreta
        </div>
      )}
    </div>
  );
};
export default Page;
/*
==========================================================
Usando states para auxiliar UI
==========================================================
Exemplo 1: Inicialmente, a área secreta é controlada por uma variável booleana showSecret que pode ser true ou false, mas ainda não está controlada por useState.
Exemplo 2: O estado showSecret é agora controlado pelo useState, começando como false, e o botão altera seu valor para true quando clicado, mostrando a área secreta.
Exemplo 3: A lógica é melhorada para permitir alternar entre mostrar e ocultar a área secreta. O texto do botão também é alterado conforme o valor de showSecret.
*/