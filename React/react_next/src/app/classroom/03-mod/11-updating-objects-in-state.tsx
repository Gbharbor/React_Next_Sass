"use client";

// Updating Objects in State

import { c11Person } from "@/types/03-mod/11-person";
import { useState } from "react";

const Page = () => {
  // Object state
  const [fullName, setFullName] = useState<c11Person>({
    name: "",
    lastName: "",
  });

  // Clear all fields
  const handleClearAll = () => {
    setFullName({
      name: "",
      lastName: "",
    });
  };

  // Clear only the name field
  const handleClearName = () => {
    setFullName({
      ...fullName,
      name: "",
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-3xl">
      {/* Name input */}
      <input
        type="text"
        placeholder="Name"
        className="mb-3 rounded-md border border-black p-3 text-2xl text-black"
        value={fullName.name}
        onChange={(e) =>
          setFullName({
            ...fullName,
            name: e.target.value,
          })
        }
      />

      {/* Last name input */}
      <input
        type="text"
        placeholder="Last Name"
        className="mb-3 rounded-md border border-black p-3 text-2xl text-black"
        value={fullName.lastName}
        onChange={(e) =>
          setFullName({
            ...fullName,
            lastName: e.target.value,
          })
        }
      />

      {/* Full name preview */}
      <p>My full name is:</p>

      <p>{`${fullName.name} ${fullName.lastName}`}</p>

      {/* Actions */}
      <button
        onClick={handleClearAll}
        className="mb-3 rounded-sm bg-red-500 p-3 text-white"
      >
        Clear All
      </button>

      <button
        onClick={handleClearName}
        className="rounded-sm bg-blue-500 p-3 text-white"
      >
        Clear Name
      </button>
    </div>
  );
};

export default Page;

/*
==========================================================
  Updating Objects in State
==========================================================

This example demonstrates how to update object states
using useState.

Concepts covered:
- Object state
- Updating specific properties
- Using the spread operator (...)
- Controlled inputs with objects
- Immutable updates in React

The spread operator preserves existing properties while
updating only the desired field.
*/