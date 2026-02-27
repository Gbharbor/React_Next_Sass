import React from 'react';
import { CardProps } from '@/types/mod1/c1CardProps';
export const Card = ({phrase,author}:CardProps) => {
  return (
    <div className='w-96 border p-4'>
      <h3 className='text-xl font-bold italic'>{phrase}</h3>
      {author && <p className='text-right text-sm'>{author}</p>}
      {author && <p className='text-right text-sm'>Autor Desconhecido</p>}
    </div>
  )
}