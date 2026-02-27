"use client";
import { useReducer } from "react";
import { listReducer } from "@/reducers/mod4/c789&10listReducer";
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
  }
    dispatch({
      type: "toggleDone",
      payload: { id: 2 }
    });

   dispatch({
     type: "editText",
     payload: { id: 2, newText: "bla bla bla" },
   });
};

export default Page;