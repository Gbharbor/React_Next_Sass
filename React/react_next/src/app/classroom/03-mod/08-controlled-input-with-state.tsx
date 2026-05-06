"use client";

import { useState } from "react";

const Page = () => {
  // Controlled input state
  const [nameInput, setNameInput] = useState("");

  // Show current input value
  const handleBtnClick = () => {
    alert(nameInput);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-3xl">
      {/* Text input */}
      <input
        type="text"
        className="rounded-md border border-black p-3 text-xl text-black"
        placeholder="Type your name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />

      {/* Current state value */}
      <p className="mt-4">
        Your name is:
        <span className="font-semibold">
          {" "}
          {nameInput}
        </span>
      </p>

      {/* Action button */}
      <button
        onClick={handleBtnClick}
        className="mt-4 rounded-md bg-blue-500 p-3 text-white transition hover:bg-blue-600"
      >
        Show Input Value
      </button>
    </div>
  );
};

export default Page;

/*
==========================================================
  Controlled Input with useState
==========================================================

This example demonstrates a controlled input.

- nameInput stores the input value
- setNameInput updates the state
- value links the input to React state
- onChange updates the UI in real time

Controlled inputs are fundamental in React forms.
*/