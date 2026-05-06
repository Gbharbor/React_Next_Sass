"use client";

import { MultiActionButtonProps } from "@/types/03-mod/01-multi-action-button-props";

const MultiActionButton = ({
  Click,
  buttonText,
  twcss,
}: MultiActionButtonProps) => {
  return (
    <button
      onClick={Click}
      className={`rounded-md bg-blue-700 p-3 text-white transition hover:bg-blue-600 ${twcss || ""}`}
    >
      {buttonText}
    </button>
  );
};

export default MultiActionButton;