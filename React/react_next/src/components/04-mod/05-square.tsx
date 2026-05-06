import { useEffect } from "react";

export const Square = () => {
  useEffect(() => {
    // Event callback
    const handleScroll = () => {};

    // Component mounted
    window.addEventListener(
      "scroll",
      handleScroll
    );

    // Cleanup function
    return () => {
      console.log("disconnected");

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="h-40 w-40 bg-red-600"></div>
  );
};