"use client";

const Page = () => {
  // Simple click handler
  const handleClick = () => {
    alert("worked it!");
  };

  // Function with parameter
  const showMessage = (message: string) => {
    alert(message);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center space-x-4">
      {/*
        Wrong example:
        onClick={handleClick()}

        This executes the function immediately during render.
        The correct way is to pass the function reference:
        onClick={handleClick}
      */}

      {/* Function reference */}
      <button
        onClick={handleClick}
        className="rounded-md bg-blue-700 p-3 text-white"
      >
        Click Here (Simple Alert)
      </button>

      {/* Passing parameters with arrow function */}
      <button
        onClick={() => showMessage("message1")}
        className="rounded-md bg-blue-700 p-3 text-white"
      >
        Click Here 1 (With Message)
      </button>

      <button
        onClick={() => showMessage("message2")}
        className="rounded-md bg-blue-700 p-3 text-white"
      >
        Click Here 2 (With Message)
      </button>
    </div>
  );
};

export default Page;