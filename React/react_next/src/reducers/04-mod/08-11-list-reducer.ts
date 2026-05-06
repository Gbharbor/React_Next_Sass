import { Item } from "@/types/04-mod/06-07-item";

/*
  Each action represents a possible operation
  that can be performed on the list.
*/

type AddAction = {
  type: "add";
  payload: {
    text: string;
  };
};

type EditTextAction = {
  type: "editText";
  payload: {
    id: number;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: {
    id: number;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

// All possible reducer actions
type ListActions =
  | AddAction
  | EditTextAction
  | ToggleDoneAction
  | RemoveAction;

/*
  Reducer responsible for all list updates.

  Parameters:
  - list: current state
  - action: dispatched action

  The reducer always returns a new state.
*/

export const listReducer = (
  list: Item[],
  action: ListActions
): Item[] => {
  switch (action.type) {
    // Add new item
    case "add":
      return [
        ...list,
        {
          id: Date.now(),
          text: action.payload.text,
          done: false,
        },
      ];

    // Edit item text
    case "editText":
      return list.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.newText,
            }
          : item
      );

    // Toggle done status
    case "toggleDone":
      return list.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      );

    // Remove item
    case "remove":
      return list.filter(
        (item) =>
          item.id !== action.payload.id
      );

    // Default state
    default:
      return list;
  }
};