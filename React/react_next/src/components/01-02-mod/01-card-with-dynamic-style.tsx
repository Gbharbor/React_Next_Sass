import React from "react";
import { CardProps } from "@/types/01-02-mod/01-card-props";

export const CardWithDynamicStyles = ({
  phrase,
  author,
}: CardProps) => {
  return (
    <div
      className={`w-96 border p-4 ${
        author
          ? "border-green-500"
          : "border-red-500"
      }`}
    >
      <h3 className="text-xl font-bold italic">
        {phrase}
      </h3>

      {author ? (
        <p className="text-right text-sm">
          {author}
        </p>
      ) : (
        <p className="text-right text-sm">
          Unknown Author
        </p>
      )}
    </div>
  );
};