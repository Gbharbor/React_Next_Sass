import React from "react";
import { CardProps } from "@/types/01-02-mod/01-card-props";

export const CardWithTernary = ({
  phrase,
  author,
}: CardProps) => {
  return (
    <div className="w-96 border p-4">
      <h3 className="text-xl font-bold italic">
        {phrase}
      </h3>

      <p className="text-right text-sm">
        {author
          ? author
          : "Unknown Author"}
      </p>
    </div>
  );
};