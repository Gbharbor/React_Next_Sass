"use client";

import { useReducer } from "react";

// Tipo do item da lista
type Item = {
  id: number;
  text: string;
  done: boolean;
};

// Reducer da lista
const listReducer = (state: Item[], action: any): Item[] => {
  switch (action.type) {
    case "add":
      const newItem: Item = {
        id: state.length + 1,
        text: action.payload.text,
        done: false,
      };
      return [...state, newItem];

    case "toggleDone":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );

    case "ediText":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.newText }
          : item
      );

    default:
      return state;
  }
};

const Page = () => {
  // Estado da lista + dispatch
  const [list, dispatch] = useReducer(listReducer, []);

  // Adiciona um novo item
  const handleAddClick = () => {
    dispatch({ type: "add", payload: { text: "Novo item" } });
  };

  // Alterna o status "done" do item com id 2
  const handleToggleDone = () => {
    dispatch({ type: "toggleDone", payload: { id: 6 } });
  };

  // Edita o texto do item com id 2
  const handleEdiText = () => {
    dispatch({ type: "ediText", payload: { id: 6, newText: "bla bla bla" } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Exemplo de useReducer</h1>
      <button onClick={handleAddClick}>Adicionar</button>
      <button onClick={handleToggleDone} style={{ marginLeft: "10px" }}>
        Toggle Done
      </button>
      <button onClick={handleEdiText} style={{ marginLeft: "10px" }}>
        Editar Texto
      </button>

      <h2>Lista</h2>
      {list.length === 0 && <p>Nenhum item ainda.</p>}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text} - {item.done ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
