"use client";

import { useState } from "react";
import { Item } from "@/types/04-mod/06-07-item";

const Page = () => {
  // List state
  const [list, setList] = useState<Item[]>([]);

  // Add new item
  const addNewItem = (text: string) => {
    setList([
      ...list,
      {
        id: list.length,
        text,
        done: false,
      },
    ]);
  };

  // Edit item text
  const editItemText = (
    id: number,
    newText: string
  ) => {
    setList(
      list.map((item) =>
        item.id === id
          ? {
              ...item,
              text: newText,
            }
          : item
      )
    );
  };

  // Toggle item status
  const toggleItem = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id: number) => {
    setList(
      list.filter((item) => item.id !== id)
    );
  };

  return <div></div>;
};

export default Page;

/*
==========================================================
  CLASS 6: Managing Arrays in State
==========================================================

This lesson demonstrates how to manage arrays
of objects using useState.

Concepts covered:
- Array state
- Adding items with spread (...)
- Updating items with map()
- Removing items with filter()
- Immutable state updates

Each operation can be separated into its own
function for better organization and readability.
*/