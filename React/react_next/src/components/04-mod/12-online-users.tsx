import { CountContext } from "@/contexts/04-mod/12-count-context";
import { useContext } from "react";

export const OnlineUsers = () => {
  // Consume context value
  const count = useContext(CountContext);

  return (
    // Display shared value
    <p>Online: {count}</p>
  );
};