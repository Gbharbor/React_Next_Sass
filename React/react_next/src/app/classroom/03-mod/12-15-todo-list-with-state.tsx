"use client";

import { TodoItem } from "@/types/03-mod/12-15-todo-item";
import { useState } from "react";

const Page = () => {
  // Input state
  const [itemInput, setItemInput] = useState("");

  // Todo list state
  const [list, setList] = useState<TodoItem[]>([
    {
      label: "Do homework",
      checked: true,
    },
    {
      label: "Wash the dishes",
      checked: false,
    },
  ]);

  // Add new item
  const handleAddButton = () => {
    if (itemInput.trim() === "") return;

    setList([
      ...list,
      {
        label: itemInput,
        checked: false,
      },
    ]);

    setItemInput("");
  };

  // Delete item
  const deleteItem = (index: number) => {
    setList(
      list.filter((_, key) => key !== index)
    );
  };

  // Toggle checked state
  const toggleItem = (index: number) => {
    setList(
      list.map((item, key) =>
        key === index
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center text-2xl">
      {/* Title */}
      <h1 className="mt-5 text-4xl">
        Todo List
      </h1>

      {/* Input and add button */}
      <div>
        <input
          type="text"
          placeholder="What do you need to do?"
          className="mr-3 flex-1 rounded-md border border-black p-3 text-2xl text-black"
          value={itemInput}
          onChange={(e) =>
            setItemInput(e.target.value)
          }
        />

        <button onClick={handleAddButton}>
          Add
        </button>
      </div>

      {/* Items counter */}
      <p className="my-4">
        {list.length} items in the list
      </p>

      {/* Todo list */}
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index}>
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.checked}
              className="mr-6 h-6 w-6"
              onChange={() =>
                toggleItem(index)
              }
            />

            {item.label}

            {/* Delete button */}
            {" - "}

            <button
              onClick={() =>
                deleteItem(index)
              }
              className="hover:underline"
            >
              [delete]
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
  CLASS 12 - 15: Todo List with State
==========================================================

This project combines multiple React concepts:

- Controlled inputs
- Array state
- Adding items
- Removing items
- Updating objects inside arrays
- Checkbox handling
- Conditional UI updates
- Immutable updates with map/filter/spread

This is one of the first complete interactive
React applications using useState.
*/