"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [firstName, setFirstName] = useState("Gui");
  const [lastName] = useState("Porto");
  const [age, setAge] = useState(90);

  // Derived value: does not need useEffect
  const fullName = `${firstName} ${lastName}`;

  // Runs once when the component mounts
  useEffect(() => {
    console.log("useEffect executed on mount");
  }, []);

  // Runs whenever firstName or lastName changes
  useEffect(() => {
    console.log(`Name updated: ${fullName}`);
  }, [firstName, lastName, fullName]);

  return (
    <div>
      <p>My name is {fullName}</p>
      <p>Age: {age}</p>

      <input defaultValue={fullName} />

      <hr />

      <button
        className="m-3 border border-blue-600 p-3"
        onClick={() => setFirstName("Porto")}
      >
        Change to Porto
      </button>

      <button
        className="m-3 border border-blue-600 p-3"
        onClick={() => setFirstName("Harbor")}
      >
        Change to Harbor
      </button>

      <button
        className="m-3 border border-blue-600 p-3"
        onClick={() => setAge(10)}
      >
        Change to 10 years old
      </button>

      <button
        className="m-3 border border-blue-600 p-3"
        onClick={() => setAge(90)}
      >
        Change to 90 years old
      </button>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 1 - 3: Introduction to useEffect
==========================================================

useEffect is a React hook used to handle side effects
inside functional components.

Common examples of side effects:
- API requests
- DOM manipulation
- Event listeners
- Timers and intervals

Main useEffect parts:
1. The function that runs the effect
2. The dependency array
3. The optional cleanup function

Examples in this file:
- An effect that runs only once on mount
- An effect that runs when selected dependencies change
- A derived value that does not need useEffect
*/