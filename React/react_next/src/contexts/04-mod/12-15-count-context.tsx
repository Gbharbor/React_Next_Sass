"use client";

import {
  ReactNode,
  createContext,
  useState,
} from "react";

// Context type
type CountContextType = {
  onlineCount: number;
  setOnlineCount: (n: number) => void;
};

// Context creation
export const CountContext =
  createContext<CountContextType | null>(
    null
  );

type Props = {
  children: ReactNode;
};

// Context Provider
export const CountProvider = ({
  children,
}: Props) => {
  const [onlineCount, setOnlineCount] =
    useState(45);

  return (
    <CountContext.Provider
      value={{
        onlineCount,
        setOnlineCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};