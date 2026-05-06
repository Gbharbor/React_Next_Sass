"use client";

import { useState } from "react";

const Page = () => {
  // State starts with 0
  const [count, setCount] = useState<number>(0);

  // Increment state value
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Set a fixed value
  const handleSetToFifty = () => {
    setCount(50);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Current state value */}
      <p>{count}</p>

      {/* Increment button */}
      <button
        className="m-3 bg-blue-500 p-3"
        onClick={handleIncrement}
      >
        +1
      </button>

      {/* Set fixed value button */}
      <button
        className="bg-blue-500 p-3"
        onClick={handleSetToFifty}
      >
        Set to 50
      </button>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 6: Updating State Values
==========================================================

Example 1:
The count state starts at 0 and can be updated to 50.

Example 2:
The count state increases by 1 every time the button is clicked.

This demonstrates how useState updates the UI dynamically.
*/