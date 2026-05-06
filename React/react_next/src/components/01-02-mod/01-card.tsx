import React from "react";
import { CardProps } from "@/types/01-02-mod/01-card-props";

export const Card = ({
  phrase,
  author,
}: CardProps) => {
  return (
    <div className="w-96 border p-4">
      <h3 className="text-xl font-bold italic">
        {phrase}
      </h3>

      {/* Show author if provided */}
      {author && (
        <p className="text-right text-sm">
          {author}
        </p>
      )}

      {/* Fallback author */}
      {!author && (
        <p className="text-right text-sm">
          Unknown Author
        </p>
      )}
    </div>
  );
};