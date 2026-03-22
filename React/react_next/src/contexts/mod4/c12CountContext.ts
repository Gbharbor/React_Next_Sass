import { createContext } from "react";

// valor inicial padrão do contexto
// usado caso não exista um Provider acima na árvore
export const CountInitialData = 150;

// criação do contexto
// define o "canal" que será compartilhado entre os componentes
export const CountContext = createContext(CountInitialData);