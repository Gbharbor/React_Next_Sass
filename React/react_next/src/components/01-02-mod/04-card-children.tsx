import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="card rounded-lg border p-4">
      <h3 className="card-title">
        Card Title
      </h3>

      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;