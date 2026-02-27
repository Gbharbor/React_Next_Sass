import React from 'react';
import { PersonProps } from '@/types/mod1/c3PersonProps';
const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
};
export const Person = ({ name, avatar = 'urldimagempadrao', roles }: PersonProps) => {
    const today: Date = new Date();
    const weekday = getWeekday(today);
    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>{role}</li> 
                ))}
            </ul>
            <p>Hoje é {weekday}</p>
        </div>
    );
};