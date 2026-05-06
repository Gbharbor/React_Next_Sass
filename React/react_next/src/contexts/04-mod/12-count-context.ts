import { createContext } from "react";

// Default context value
// Used when there is no Provider in the component tree
export const CountInitialData = 150;

// Context creation
// Creates a shared communication channel between components
export const CountContext =
  createContext(CountInitialData);