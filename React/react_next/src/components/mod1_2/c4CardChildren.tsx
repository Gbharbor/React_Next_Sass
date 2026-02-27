import React from 'react';
type CardProps = {
    children: React.ReactNode;
};
const Card = ({ children }: CardProps) => {
    return (
        <div className="card p-4 border rounded-lg">
            <h3 className="card-title">Título do Card</h3>
            <div className="card-content">{children}</div>
        </div>
    );
};
export default Card;