import React from 'react'
import { CardProps } from "@/types/mod1/c1CardProps";
export const CardWithTernary =({phrase, author}:CardProps) => {
    return (
        <div className='w-96 border p-4'> 
            <h3 className='text-xl font-bolt italic'>{phrase}</h3>
                <p className='text-right text-sm'>
                    {author ? `${author}`: 'Autor Desconhecido'}
                </p>
        </div>
    )
};