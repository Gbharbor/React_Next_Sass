import { Item } from "@/types/mod4/c67item";

/*
  Cada action representa uma operação possível na lista.

  Estrutura padrão de uma action:

  {
    type: "nomeDaAcao",
    payload: { dados necessários }
  }
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

// Union type com todas as actions possíveis
type ListActions =
  | AddAction
  | EditTextAction
  | ToggleDoneAction
  | RemoveAction;


/*
  Reducer responsável por controlar todas as mudanças na lista.

  Parâmetros:
  - list → estado atual da lista
  - action → ação enviada pelo dispatch

  O reducer sempre retorna o novo estado.
*/

export const listReducer = (list: Item[], action: ListActions): Item[] => {
  switch (action.type) {

    // Adiciona um novo item à lista
    case "add":
      return [
        ...list,
        {
          id: Date.now(), // gera um id simples baseado no tempo
          text: action.payload.text,
          done: false, // item começa como não concluído
        },
      ];

    // Edita o texto de um item específico
    case "editText":
      return list.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.newText }
          : item
      );

    // Alterna o estado da tarefa (feito / não feito)
    case "toggleDone":
      return list.map((item) =>
        item.id === action.payload.id
          ? { ...item, done: !item.done }
          : item
      );

    // Remove um item da lista
    case "remove":
      return list.filter((item) => item.id !== action.payload.id);

    // Caso nenhuma action seja reconhecida, retorna o estado atual
    default:
      return list;
  }
};