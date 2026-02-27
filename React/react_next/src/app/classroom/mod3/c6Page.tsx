"use client";
import { useState } from "react";
const Page = () => {
  // Estado para o primeiro exemplo, que inicia com 0
  const [count, setCount] = useState<number>(0);
  // Função para incrementar count por 1
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // Função para definir count como 50
  const handleSetToFifty = () => {
    setCount(50);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* Exibe o valor atual de count */}
      <p>{count}</p>

      {/* Botão para incrementar count por 1 */}
      <button
        className="bg-blue-500 p-3 m-3"
        onClick={handleIncrement}
      >
        +1
      </button>

      {/* Botão para definir count como 50 */}
      <button
        className="bg-blue-500 p-3"
        onClick={handleSetToFifty}
      >
        Definir para 50
      </button>
    </div>
  );
};
export default Page;
/*
==========================================================
    CLASS 6:  Trabalhando com State
==========================================================
Exemplo 1: Temos o estado count que começa com 0 e um botão que, ao ser clicado, define count para 50 (com a função handleSetToFifty).
Exemplo 2: Temos o mesmo estado count, mas com um botão que incrementa o valor de count em 1 a cada clique (com a função handleIncrement).
*/