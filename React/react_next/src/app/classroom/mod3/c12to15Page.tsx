"use client"
import { TodoItem } from "@/types/mod3/c12to15";
import { useState } from "react";

const Page = () => {
    // Estado para armazenar o valor do input
    const [itemInput, setItemInput] = useState('');

    // Estado para armazenar a lista de tarefas
    const [list, setList] = useState<TodoItem[]>([
        { label: 'Fazer dever de casa', checked: true },
        { label: 'Lavar a louça', checked: false }
    ]);

    // Função para adicionar um novo item na lista
    const handleAddButton = () => {
        if (itemInput.trim() === '') return; // Evita adicionar itens vazios
        setList([...list, { label: itemInput, checked: false }]);
        setItemInput(''); // Limpa o input após adicionar
    };

    // Função para deletar um item da lista
    const deleteItem = (index: number) => {
        alert(`Deletando item: ${index}`);
        setList(list.filter((_, key) => key !== index));
    };

    // Função para marcar/desmarcar uma tarefa como concluída
    const toggleItem = (index: number) => {
        setList(list.map((item, key) => 
            key === index ? { ...item, checked: !item.checked } : item
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
                {list.map((item, index) => (
                    <li key={index}>
                        {/* Checkbox para marcar/desmarcar a tarefa */}
                        <input 
                            onChange={() => toggleItem(index)} 
                            type="checkbox" 
                            checked={item.checked} 
                            className="w-6 h-6 mr-6" 
                        />
                        {item.label} 
                        {/* Botão de deletar tarefa */}
                        - <button onClick={() => deleteItem(index)} className="hover:underline">
                            [deletar]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;