"use client";

// Using cleanup function

import { Square } from "@/components/04-mod/05-square";
import { useState } from "react";

const Page = () => {
  // Controls component visibility
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && <Square />}
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 5: useEffect Cleanup
==========================================================

This example demonstrates component mounting
and unmounting.

Concepts covered:
- Conditional rendering
- Component lifecycle
- Mount and unmount
- Cleanup functions in useEffect

When the component disappears from the screen,
React unmounts it and the cleanup function
inside useEffect can be executed.
*/