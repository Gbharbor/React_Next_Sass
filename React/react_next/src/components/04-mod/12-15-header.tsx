import { useContext } from "react";
import { OnlineUsers } from "./12-15-online-users";
import { CountContext } from "@/contexts/04-mod/12-15-count-context";

export const Header = () => {

    const countCtx = useContext(CountContext);

  return (
    <header>
      {/* Structural component */}
      <h1 className="text-3xl">
        Page Title ({countCtx?.onlineCount})
      </h1>

      {/* Child component consuming context */}
      <OnlineUsers />
    </header>
  );
};