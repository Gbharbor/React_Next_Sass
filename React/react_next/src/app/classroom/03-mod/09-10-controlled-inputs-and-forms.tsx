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
      {/* Controlled input */}
      <input
        type="text"
        className="rounded-md border border-black p-3 text-xl text-black"
        placeholder="Type your name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />

      {/* Real-time UI update */}
      <p className="mt-4">
        Your name is:
        <span className="font-semibold">
          {" "}
          {nameInput}
        </span>
      </p>

      {/* Button action */}
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
  CLASS 9 & 10: Controlled Inputs and Forms
==========================================================

This example demonstrates how React controls form inputs
using useState.

Concepts covered:
- Controlled inputs
- Real-time UI updates
- onChange event
- Synchronizing input values with state
- Basic form interaction

The input value is always synchronized with React state.
*/