"use client";

import { useReducer } from "react";
import { listReducer } from "@/reducers/04-mod/08-11-list-reducer";

const Page = () => {
  /*
    useReducer returns:
    1. The current state
    2. The dispatch function

    In this example we are focusing only on dispatch.
  */

  const [, dispatch] = useReducer(
    listReducer,
    []
  );

  // Add item action
  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: {
        text: "New item",
      },
    });
  };

  // Toggle item action
  const handleToggleClick = () => {
    dispatch({
      type: "toggleDone",
      payload: {
        id: 2,
      },
    });
  };

  // Edit item action
  const handleEditClick = () => {
    dispatch({
      type: "editText",
      payload: {
        id: 2,
        newText: "bla bla bla",
      },
    });
  };

  return (
    <div>
      Reducer dispatch example
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 8: Introduction to useReducer
==========================================================

This lesson introduces the useReducer hook.

Concepts covered:
- Reducers
- dispatch()
- Actions
- Payloads
- State management patterns

Reducers centralize complex state logic into
a single function, making applications easier
to maintain as they grow.
*/