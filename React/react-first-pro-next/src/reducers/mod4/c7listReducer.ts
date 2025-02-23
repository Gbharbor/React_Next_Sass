import { Item } from "@/types/mod4/c6item";
type AddAction = {
   type: 'add';
   payload: {text: string;}
}
type EditTextAction = {
   type: 'ediText';
   payload: {id: number; newText: string;}
}
type ToggleDoneAction = {
   type: 'toggleDone';
   payload: {id: number;}
}
type RemoveAction = {
   type: 'remove';
   payloead: {id: number;}
}
type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list:Item[], action: ListActions) => {
   //executar alguma acao 
   action.type
   //action.payload
   return list;
}