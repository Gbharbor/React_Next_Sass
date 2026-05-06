"use client";

// Using preventDefault()

import { FormEvent } from "react";

const Page = () => {
  const handleFormSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    // Prevent page reload on form submit
    event.preventDefault();

    alert("Sending...");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <h1 className="mb-3 text-5xl">Login Form</h1>

        <form onSubmit={handleFormSubmit}>
          <input type="text" />

          <input
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;