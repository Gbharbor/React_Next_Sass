"use client";

import { useReducer, useState } from "react";
import { listReducer } from "@/reducers/04-mod/08-11-list-reducer";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButton = () => {
    if (addField.trim() === "") return;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim(),
      },
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: {
        id,
      },
    });
  };

  const handleEdit = (id: number) => {
    const item = list.find((item) => item.id === id);

    if (!item) return;

    const newText = window.prompt("Edit task", item.text);

    if (!newText || newText.trim() === "") return;

    dispatch({
      type: "editText",
      payload: {
        id,
        newText: newText.trim(),
      },
    });
  };

  const handleRemove = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    dispatch({
      type: "remove",
      payload: {
        id,
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddButton();
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-center text-4xl">Todo List</h1>

      <div className="mx-auto my-4 flex max-w-2xl rounded-md border border-gray-400 bg-gray-900 p-4">
        <input
          type="text"
          className="flex-1 rounded-md border border-white bg-transparent p-3 text-white outline-none"
          placeholder="Type an item"
          value={addField}
          onChange={(event) => setAddField(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="p-4"
          onClick={handleAddButton}
        >
          ADD
        </button>
      </div>

      <ul className="mx-auto max-w-2xl">
        {list.map((item) => (
          <li
            key={item.id}
            className="my-3 flex items-center border-b border-gray-700 p-3"
          >
            <input
              type="checkbox"
              className="mr-4 h-6 w-6"
              checked={item.done}
              onChange={() => handleDoneCheckbox(item.id)}
            />

            <p className="flex-1 text-lg">{item.text}</p>

            <button
              onClick={() => handleEdit(item.id)}
              className="mx-4 text-white hover:text-gray-500"
            >
              Edit
            </button>

            <button
              onClick={() => handleRemove(item.id)}
              className="mx-4 text-white hover:text-gray-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 9 - 10: Todo List with useReducer
==========================================================

This lesson applies useReducer to a complete todo list.

Concepts covered:
- useReducer
- dispatch()
- reducer actions
- add, edit, remove and toggle operations
- controlled input
- keyboard event with Enter
- confirmation and prompt dialogs

The component handles the UI, while the reducer centralizes
the state update logic.
*/