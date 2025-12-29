"use client";
import { useReducer } from "react";
import { listReducer } from "@/reducers/mod4/c7listReducer";
// Reducer responsável por controlar as mudanças na lista

const Page = () => {
  // Estado da lista + função dispatch para enviar ações ao reducer
  const [list, dispatch] = useReducer(listReducer, []);

  // Dispara a action para adicionar um novo item
  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo item",
      },
    });
  };

  // Dispara a action para alternar o status "done" de um item
  const handleToggleDone = () => {
    dispatch({
      type: "toggleDone",
      payload: { id: 2 },
    });
  };

  // Dispara a action para editar o texto de um item
  // Nome da action mantido como "ediText" por escolha de padrão
  const handleEdiText = () => {
    dispatch({
      type: "ediText",
      payload: { id: 2, newText: "bla bla bla" },
    });
  };

  // JSX da página
  return (
    <div>
      <button onClick={handleAddClick}>Adicionar</button>
      <button onClick={handleToggleDone}>Toggle Done</button>
      <button onClick={handleEdiText}>Editar Texto</button>
    </div>
  );
};

export default Page;