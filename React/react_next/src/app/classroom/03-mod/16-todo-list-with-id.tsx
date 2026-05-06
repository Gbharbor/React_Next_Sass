"use client";

import { TodoItem } from "@/types/03-mod/16-todo-item";
import { useState } from "react";

const Page = () => {
  // Input state
  const [itemInput, setItemInput] = useState("");

  // Todo list state with unique IDs
  const [list, setList] = useState<TodoItem[]>([
    {
      id: 1,
      label: "Do homework",
      checked: true,
    },
    {
      id: 2,
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
        id: list.length + 1,
        label: itemInput,
        checked: false,
      },
    ]);

    setItemInput("");
  };

  // Delete item by ID
  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Toggle item by ID
  const toggleItem = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id
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
      <h1 className="mt-5 text-4xl">Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="What do you need to do?"
          className="mr-3 flex-1 rounded-md border border-black p-3 text-2xl text-black"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />

        <button onClick={handleAddButton}>Add</button>
      </div>

      <p className="my-4">{list.length} items in the list</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              className="mr-6 h-6 w-6"
              onChange={() => toggleItem(item.id)}
            />

            {item.label}

            {" - "}

            <button
              onClick={() => deleteItem(item.id)}
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
  CLASS 16: Todo List with ID
==========================================================

This version improves the todo list by using an id
instead of the array index.

Concepts covered:
- Unique IDs
- key={item.id}
- Deleting by ID
- Updating by ID
- More reliable list rendering

Using IDs is better than using array indexes when
items can be added, removed, or reordered.
*/