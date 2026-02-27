"use client"
import { TodoItem } from "@/types/mod3/c16";
import { useState } from "react";

const Page = () => {
    // Estado para armazenar o valor do input
    const [itemInput, setItemInput] = useState('');

    // Estado para armazenar a lista de tarefas
    const [list, setList] = useState<TodoItem[]>([
        { id: 1, label: 'Fazer dever de casa', checked: true },
        { id: 2, label: 'Fazer dever de casa', checked: false }
    ]);

    // Função para adicionar um novo item na lista
    const handleAddButton = () => {
        if (itemInput.trim() === '') return; // Evita adicionar itens vazios
        setList([...list, { id: list.length + 1, label: itemInput, checked: false }]);
        setItemInput(''); // Limpa o input após adicionar
    };

    // Função para deletar um item da lista
    const deleteItem = (id: number) => {
        alert(`Deletando item: ${id}`); // Exibe um alerta com o ID do item
        setList(list.filter((item) => item.id !== id));
    };

    // Função para marcar/desmarcar uma tarefa como concluída
    const toggleItem = (id: number) => {
        setList(list.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center text-2xl">
            {/* Título */}
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            {/* Campo de entrada e botão de adicionar */}
            <div>
                <input
                    type="text"
                    placeholder="O que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                    value={itemInput}
                    onChange={e => setItemInput(e.target.value)}
                />
                <button onClick={handleAddButton}>Adicionar</button>
            </div>

            {/* Contador de itens na lista */}
            <p className="my-4">{list.length} Items na lista</p>

            {/* Lista de tarefas */}
            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item) => (
                    <li key={item.id}>
                        {/* Checkbox para marcar/desmarcar a tarefa */}
                        <input 
                            onChange={() => toggleItem(item.id)} 
                            type="checkbox" 
                            checked={item.checked} 
                            className="w-6 h-6 mr-6" 
                        />
                        {item.label} 
                        {/* Botão de deletar tarefa */}
                        - <button onClick={() => deleteItem(item.id)} className="hover:underline">
                            [deletar]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;