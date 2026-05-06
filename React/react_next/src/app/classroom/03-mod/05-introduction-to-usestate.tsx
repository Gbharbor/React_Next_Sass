import { useState } from "react";

function Counter() {
  // State starts with value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

/*
=========================================================
  CLASS 5: Introduction to State
=========================================================

In React, State stores values that can change over time.

When the state changes, React automatically updates the UI.

In this example:
- count stores the current value
- setCount updates the state
- every click increases the counter

State is one of the core concepts for creating interactive interfaces.
*/