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
      list.map((item) => {
        if (item.id === id) {
          item.text = newText;
        }

        return item;
      })
    );
  };

  // Toggle item status
  const toggleItem = (id: number) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }

        return item;
      })
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
  CLASS 7: Array State Operations
==========================================================

This lesson continues working with arrays in state.

Concepts covered:
- Updating arrays with map()
- Removing items with filter()
- Editing object properties
- Toggle operations
- Todo list logic organization

At this stage, the logic starts becoming more
complex, which leads naturally to reducers
in the next lessons.
*/