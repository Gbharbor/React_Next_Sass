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
      list.map((item) =>
        item.id === id
          ? { ...item, text: newText }
          : item
      )
    );
  };

  // Alterna o estado do item: concluído / não concluído
  const toggleItem = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  // Remove um item da lista
  const removeItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return <div></div>;
};

export default Page;
/*Nesta aula aprendemos que:
useState pode guardar uma lista de objetos podemos alterar essa lista com:
   map()
   filter()
   spread ...
cada operação pode ser feita com uma função separada
*/