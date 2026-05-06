"use client";

import { useState } from "react";

const Page = () => {
  // Controls secret area visibility
  const [showSecret, setShowSecret] = useState(false);

  // Toggle visibility
  const handleClickButton = () => {
    setShowSecret(!showSecret);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Toggle button */}
      <button
        className="bg-blue-500 p-3"
        onClick={handleClickButton}
      >
        {showSecret
          ? "Hide Secret Area"
          : "Show Secret Area"}
      </button>

      {/* Conditional rendering */}
      {showSecret && (
        <div className="mt-3 rounded-md bg-blue-300 p-3">
          Secret Area
        </div>
      )}
    </div>
  );
};

export default Page;

/*
==========================================================
  Using State to Control UI
==========================================================

Example 1:
A boolean variable controls the visibility of a secret area.

Example 2:
The visibility is now controlled with useState.

Example 3:
The button can toggle between showing and hiding
the secret area dynamically.
*/