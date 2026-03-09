"use client";

import { useState } from "react";
import { Item } from "@/types/mod4/c67item";

const Page = () => {
  // Estado que guarda a lista de tarefas
  const [list, setList] = useState<Item[]>([]);

  // Adiciona um novo item à lista
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

  // Edita o texto de um item específico
  const editItemText = (id: number, newText: string) => {
    setList(
      list.map((item) => {
        if (item.id === id) item.text = newText;
        return item;
      })
    );
  };

  // Alterna o estado do item (feito / não feito)
  const toggleItem = (id: number) => {
    setList(
      list.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    );
  };

  // Remove um item da lista
  const removeItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return <div></div>;
};

export default Page;
/*
Aprendemos a: 
   guardar lista de objetos no estado
   atualizar listas com map() e filter()
   implementar operações básicas de uma lista de tarefas
Mas percebemos que a lógica começa a ficar espalhada, o que motiva o uso de reducers nas próximas aulas.
*/