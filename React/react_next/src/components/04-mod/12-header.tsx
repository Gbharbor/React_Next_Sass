import { OnlineUsers } from "./12-online-users";

export const Header = () => {
  return (
    <header>
      {/* Structural component */}
      <h1 className="text-3xl">
        Page Title
      </h1>

      {/* Child component consuming context */}
      <OnlineUsers />
    </header>
  );
};