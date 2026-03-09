"use client";

import { useReducer } from "react";
import { listReducer } from "@/reducers/mod4/c8to11listReducer";

const Page = () => {

  // useReducer retorna duas coisas:
  // 1️ o estado (lista)
  // 2️ a função dispatch para enviar ações ao reducer
  // Neste exemplo ainda não usamos o estado, apenas o dispatch
  const [, dispatch] = useReducer(listReducer, []);

  // Exemplo de action para adicionar um item
  const handleAddClick = () => {
    dispatch({
      type: "add", // tipo da ação que o reducer vai interpretar
      payload: { text: "Novo item" }, // dados necessários para executar a ação
    });
  };

  // Exemplo de action para alternar o estado de um item
  const handleToggleClick = () => {
    dispatch({
      type: "toggleDone", // ação que marca/desmarca tarefa
      payload: { id: 2 }, // identifica qual item será alterado
    });
  };

  // Exemplo de action para editar o texto de um item
  const handleEditClick = () => {
    dispatch({
      type: "editText", // ação responsável por alterar o texto
      payload: {
        id: 2, // item que será editado
        newText: "bla bla bla", // novo texto do item
      },
    });
  };

  return (
    <div>
      Aula de exemplo do dispatch
    </div>
  );
};

export default Page;