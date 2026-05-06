import { CountContext } from "@/contexts/04-mod/12-15-count-context";
import { useContext } from "react";

export const OnlineUsers = () => {
  // Consume context value
  const countCtx = useContext(CountContext);
  const handleBanAll = () => {
    countCtx?.setOnlineCount(0);
  }

  return (
    // Display shared value
    <>
        <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={handleBanAll}>Banir todo mundo</button>
    </>
  );
};