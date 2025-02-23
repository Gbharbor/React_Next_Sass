import { useState } from "react";
import { Item } from "@/types/mod4/c6item";

const Page = () => {
   // Estado para armazenar a lista de itens
   const [list, setList] = useState<Item[]>([]);

   // Função para adicionar um novo item à lista
   const addNewItem = (text: string) => {
      setList([...list, { id: list.length, text, done: false }]);
   };

   // Função para editar o texto de um item específico
   const editItemText = (id: number, newText: string) => {
      setList(
         list.map(t => {
            if (t.id === id) t.text = newText; 
            return t;
         })
      );
   };

   // Função para alternar o estado (feito/não feito) de um item
   const toggleItem = (id: number) => {
      setList(
         list.map(t => {
            if (t.id === id) t.done = !t.done;
            return t;
         })
      );
   };

   // Função para remover um item da lista
   const removeItem = (id: number) => {
      setList(list.filter(t => t.id !== id));
   };

   return <div className=""></div>;
};

export default Page;